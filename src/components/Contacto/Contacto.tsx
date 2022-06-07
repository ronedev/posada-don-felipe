import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Formik, Form, Field } from "formik";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const [formSend, setFormSend] = useState<boolean>(false);

  const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    tel: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const tiempoTranscurrido = new Date()
  const actual = new Date(tiempoTranscurrido)

  return (
    <section className="contactoContainer">
      <div className="infoContacto">
        <h2><FormattedMessage id="contacto.title" defaultMessage="Contactanos y reservanos" /></h2>
        <p>
          <FormattedMessage
            id="contacto.description"
            defaultMessage="Llenando el siguiente formulario realizaras tu consulta por disponibilidad para los dias especificados y en caso de tener otro tipo de consulta colocarla en forma de mensaje. Nosotros nos pondremos en contacto a la brevedad para informarte sobre disponibilidad y responder tus dudas."
          />
        </p>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          tel: 0,
          entry: "",
          exit: "",
          adults: 0,
          kids: 0,
          babys: 0,
          message: "",
        }}
        //Validación
        validate={(values) => {
          const { name, email, tel, entry, exit, adults, kids, babys } = values;

          let errors: {
            name?: string;
            email?: string;
            tel?: string;
            entry?: string;
            exit?: string;
            adults?: string;
          } = {};

          //Validacion de input name
          if (!name) {
            errors.name = "contacto.errors.noName";
          } else if (!expresiones.name.test(name)) {
            errors.name = "contacto.errors.invalidName";
          }

          //Validacion de input email
          if (!email) {
            errors.email = "contacto.errors.noEmail";
          } else if (!expresiones.email.test(email)) {
            errors.email = "contacto.errors.invalidEmail";
          }

          //Validacion de input tel
          if (!tel) {
            errors.tel = "contacto.errors.noTel";
          } else if (!expresiones.tel.test(tel.toString())) {
            errors.tel = "contacto.errors.invalidTel";
          }

          //Validacion de input entry
          if (!entry) {
            errors.entry = "contacto.errors.noEntry";
          }

          //Validacion de input exit
          if (!exit) {
            errors.exit = "contacto.errors.noExit";
          }

          //Validación de los inputs que toman la cantidad de hospedados
          if (adults + kids + babys > 6) {
            errors.adults = "contacto.errors.renterMax";
          } else if (adults + kids + babys === 0) {
            errors.adults = "contacto.errors.noRenter";
          }

          return errors;
        }}
        //Submit
        onSubmit={(values, { resetForm }) => {
          resetForm();
          emailjs
            .send(
              "service_dduwibn",
              "template_omuqq7a",
              values,
              "user_UeZ3fkVEA88RsY7SM3u7l"
            )
            .then((res) => console.log(`Enviado con exito: ${res}`))
            .catch((err) =>
              console.log(
                `Ocurrio un error al intentar enviar el formulario: ${err}`
              )
            );
          setFormSend(true);
          setTimeout(() => {
            setFormSend(false);
          });
        }}
      >
        {({ errors, touched, values }) => (
          <Form className="contactoForm">
            <div className="contactoInfo">
              <div className="input">
                <label htmlFor="name">
                  <FormattedMessage id="contacto.form.name" />
                </label>
                <Field type="text" name="name" id="name" />
                {touched.name && errors.name && (
                  <div className="error">
                    <FormattedMessage id={errors.name} />
                  </div>
                )}
              </div>

              <div className="input">
                <label htmlFor="email">
                  <FormattedMessage id="contacto.form.email" />
                </label>
                <Field type="email" name="email" id="email" />
                {touched.email && errors.email && (
                  <div className="error">
                    <FormattedMessage id={errors.email} />
                  </div>
                )}
              </div>

              <div className="input">
                <label htmlFor="tel">
                  <FormattedMessage id="contacto.form.tel" />
                </label>
                <Field type="tel" name="tel" id="tel" />
                {touched.tel && errors.tel && (
                  <div className="error">
                    <FormattedMessage id={errors.tel} />
                  </div>
                )}
              </div>
            </div>
            <div className="contactoInfo">
              <div className="input">
                <label htmlFor="entry">
                  <FormattedMessage id="contacto.form.entry" />
                </label>
                <Field type="date" name="entry" id="entry" min={actual.toISOString().split('T')[0]} />
                {touched.entry && errors.entry && (
                  <div className="error">
                    <FormattedMessage id={errors.entry} />
                  </div>
                )}
              </div>

              <div className="input">
                <label htmlFor="exit">
                  <FormattedMessage id="contacto.form.exit" />
                </label>
                <Field type="date" name="exit" id="exit" disabled={values.entry ? false : true} min={values.entry} />
                {touched.exit && errors.exit && (
                  <div className="error">
                    <FormattedMessage id={errors.exit} />
                  </div>
                )}
              </div>
            </div>
            <div className="contactoInfo">
              <div className="input">
                <label htmlFor="adults">
                  <FormattedMessage id="contacto.form.adults" />
                </label>
                <Field type="number" name="adults" id="adults" />
              </div>

              <div className="input">
                <label htmlFor="kids">
                  <FormattedMessage id="contacto.form.kids" />
                </label>
                <Field type="number" name="kids" id="kids" />
              </div>

              <div className="input">
                <label htmlFor="babys">
                  <FormattedMessage id="contacto.form.babys" />
                </label>
                <Field type="number" name="babys" id="babys" />
              </div>
            </div>
            {(touched.adults || touched.kids || touched.babys) &&
              errors.adults && <div className="error">
                <FormattedMessage id={errors.adults} />
              </div>}
            <label htmlFor="message">
              <FormattedMessage id="contacto.form.message" />
            </label>
            <Field name="message" id="message" as="textarea" />
            <button className="btn2" type="submit">
              <FormattedMessage
                id="contacto.btnSubmit"
                defaultMessage="Enviar consulta"
              />
            </button>
          </Form>
        )}
      </Formik>
      {formSend && (
        <p className="success">
          <FormattedMessage id="contacto.success" />
        </p>
      )}
    </section>
  );
};

export { Contacto };
