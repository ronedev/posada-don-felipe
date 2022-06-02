import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'

interface IContactoForm {
    name: string,
    email: string,
    tel: number,
    entry: Date | null,
    exit: Date | null,
    adults: number,
    kids: number,
    babys: number,
    message?: string
}

const Contacto = () => {

    const [formData, setFormData] = useState<IContactoForm>({
        name: '',
        email: '',
        tel: 0,
        entry: null,
        exit: null,
        adults: 0,
        kids: 0,
        babys: 0,
        message: ''
    })

    const handleChangeFormInputs = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {value, name} = e.target
        setFormData( (formDataPrev) => {
            return{
                ...formDataPrev, [name]: value   
            }
        })
    }
    
    return (
        <section className='contactoContainer'>
            <p>
                <FormattedMessage id='contacto.description' defaultMessage='Llenando el siguiente formulario realizaras tu consulta por disponibilidad para los dias especificados y en caso de tener otro tipo de consulta colocarla en forma de mensaje. Nosotros nos pondremos en contacto a la brevedad para informarte sobre disponibilidad y responder tus dudas.' />
            </p>
            <form className='contactoForm'>
                <div className='contactoInfo'>
                    <label>
                        <FormattedMessage id='contacto.form.name' />
                    </label>
                    <input type="text" name='name' required onChange={(e)=> handleChangeFormInputs(e)}/>

                    <label>
                        <FormattedMessage id='contacto.form.email' />
                    </label>
                    <input type="email" name='email' required onChange={(e)=> handleChangeFormInputs(e)}/>

                    <label>
                        <FormattedMessage id='contacto.form.tel' />
                    </label>
                    <input type="tel" name='tel' required onChange={(e)=> handleChangeFormInputs(e)}/>
                </div>
                <div className='contactoInfo'>
                    <label>
                        <FormattedMessage id='contacto.form.entry' />
                    </label>
                    <input type="date" name='entry' required onChange={(e)=> handleChangeFormInputs(e)}/>

                    <label>
                        <FormattedMessage id='contacto.form.exit' />
                    </label>
                    <input type="date" name='exit' required onChange={(e)=> handleChangeFormInputs(e)} />
                </div>
                <div className='contactoInfo'>
                    <label>
                        <FormattedMessage id='contacto.form.adults' />
                    </label>
                    <input type="number" name='adults' required onChange={(e)=> handleChangeFormInputs(e)}/>

                    <label>
                        <FormattedMessage id='contacto.form.kids' />
                    </label>
                    <input type="number" name='kids' required onChange={(e)=> handleChangeFormInputs(e)} />

                    <label>
                        <FormattedMessage id='contacto.form.babys' />
                    </label>
                    <input type="number" name='babys' required onChange={(e)=> handleChangeFormInputs(e)}/>
                </div>
                <textarea name="message" onChange={(e)=> handleChangeFormInputs(e)}></textarea>
                <button className='btn2'>
                    <FormattedMessage id='contacto.btnSubmit' defaultMessage='Enviar consulta' />
                </button>
            </form>
        </section>
    )
}

export { Contacto }