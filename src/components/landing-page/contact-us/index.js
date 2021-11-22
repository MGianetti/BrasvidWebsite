import { useFormik } from 'formik'
import { useRef } from 'react'
import * as Yup from 'yup'

import {
  CONTACT_US_CHECKBOX_LABEL,
  CONTACT_US_INPUT_ERROR_MSG_EMAIL,
  CONTACT_US_INPUT_ERROR_MSG_NAME,
  CONTACT_US_INPUT_ERROR_MSG_TEXT,
  CONTACT_US_INPUT_PLACEHOLDER_EMAIL,
  CONTACT_US_INPUT_PLACEHOLDER_NAME,
  CONTACT_US_INPUT_PLACEHOLDER_TEXT,
  CONTACT_US_SECTION_TITLE,
  CONTACT_US_SUBMIT_BUTTON_LABEL,
} from '../../../resources/strings'

const initialValues = {
  nome: '',
  email: '',
  msg: '',
}

export function ContactUs(props) {
  const { onSubmit } = props
  const checkRef = useRef(false)

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      onSubmit: form => {
        onSubmit({
          ...form,
          isChecked: checkRef.current,
        })
      },
      initialValues,
      validationSchema: Yup.object({
        nome: Yup.string().required(CONTACT_US_INPUT_ERROR_MSG_NAME),
        email: Yup.string()
          .email(CONTACT_US_INPUT_ERROR_MSG_EMAIL)
          .required(CONTACT_US_INPUT_ERROR_MSG_EMAIL),
        msg: Yup.string().required(CONTACT_US_INPUT_ERROR_MSG_TEXT),
      }),
    })

  function handleCheck(e) {
    checkRef.current = e.target.checked
  }

  return (
    <div className="flex flex-col items-center w-full py-8 px-4">
      <div className="flex flex-col space-y-4 max-w-4xl w-full">
        <p className="text-center text-2xl">{CONTACT_US_SECTION_TITLE}</p>
        <form onSubmit={handleSubmit} className="w-full grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-0.5 col-span-2 sm:col-span-1">
            <input
              type="text"
              name="nome"
              id="nome"
              value={values.nome}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={CONTACT_US_INPUT_PLACEHOLDER_NAME}
              className="text-field"
            />
            {touched.nome && errors.nome && (
              <p className="text-accent text-sm ml-4">{errors.nome}</p>
            )}
          </div>
          <div className="flex flex-col space-y-0.5 col-span-2 sm:col-span-1">
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={CONTACT_US_INPUT_PLACEHOLDER_EMAIL}
              className="text-field"
            />
            {touched.email && errors.email && (
              <p className="text-accent text-sm ml-4">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col space-y-0.5 col-span-2">
            <textarea
              id="msg"
              name="msg"
              value={values.msg}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-area autoexpand"
              placeholder={CONTACT_US_INPUT_PLACEHOLDER_TEXT}
              rows={3}
              maxLength={210}
              x-model="maximum"
              x-ref="maximum"
            ></textarea>
            {touched.msg && errors.msg && (
              <p className="text-accent text-sm ml-4">{errors.msg}</p>
            )}
          </div>
          <div className="col-span-2 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox"
                onChange={handleCheck}
              />
              <span>{CONTACT_US_CHECKBOX_LABEL}</span>
            </div>
            <button type="submit" className="btn-lg btn-secondary">
              {CONTACT_US_SUBMIT_BUTTON_LABEL}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
