import React, { useState } from "react";
import mensajesIngles from "../lang/en-US.json";
import mensajesEspañol from "../lang/es-AR.json";
import { IntlProvider } from "react-intl";

interface props {
  children: JSX.Element | JSX.Element[];
}

interface ILangContext {
    cambiarIdioma: (lenguaje: string)=>void 
}

const langContext = React.createContext<ILangContext>({} as ILangContext);


const LangProvider = ({ children }: props) => {
    let messageDefault
    let localeDefault
    const lenguajePreferido = localStorage.getItem('lang')

    if(lenguajePreferido){
        localeDefault = lenguajePreferido
        if(localeDefault === 'es-AR'){
            messageDefault = mensajesEspañol
        }else if (localeDefault === 'en-US'){
            messageDefault = mensajesIngles
        }else{
            messageDefault = mensajesEspañol
            localeDefault = 'es-AR'
        }
    }else{
        messageDefault = mensajesEspañol
        localeDefault = 'es-AR'
    }

    const [locale, setLocale] = useState<string>(localeDefault)
    const [mensajes, setMensajes] = useState<Record<string, string> | undefined>(messageDefault)

    const cambiarIdioma = (lenguaje:string)=>{
        switch(lenguaje){
            case 'es-AR':
                setLocale(lenguaje)
                setMensajes(mensajesEspañol)
                localStorage.setItem('lang', lenguaje)
                break
            case 'en-US':
                setLocale(lenguaje)
                setMensajes(mensajesIngles)
                localStorage.setItem('lang', lenguaje)
                break
            default:
                setLocale('es-AR')
                setMensajes(mensajesEspañol)
                localStorage.setItem('lang', 'es-AR')
        }
    }

  return (
    <langContext.Provider value={{ cambiarIdioma: cambiarIdioma}}>
      <IntlProvider
        locale={locale}
        messages={mensajes}
      >{children}</IntlProvider>
    </langContext.Provider>
  );
};

export { langContext, LangProvider };
