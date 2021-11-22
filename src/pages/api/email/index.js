import httpStatus from 'http-status'
import nodemailer from 'nodemailer'

import { SITE_NAME } from '../../../resources/strings'
import APIError from '../_APIError'

const { EMAIL_FROM, EMAIL_LUCAS, EMAIL_MATEUS, NODE_ENV } = process.env

let auth

async function getAcc() {
  if (auth) return auth
  auth = NODE_ENV === 'development' ? await nodemailer.createTestAccount() : {}
  return auth
}

export default async function handler(req, res) {
  const { method, body } = req
  if (method !== 'POST')
    throw new APIError(
      'Method not allowed.',
      httpStatus.METHOD_NOT_ALLOWED,
      true,
    )

  await getAcc()

  const { email, nome, msg, isChecked } = body

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: auth.user,
      pass: auth.pass,
    },
  })

  const emailConfig = {
    from: EMAIL_FROM,
    to: [EMAIL_LUCAS, EMAIL_MATEUS],
    cc: [],
    subject: `${SITE_NAME} - Contato de ${nome}`,
    html: `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <br />
      <p>${msg}</p>
    `,
  }

  if (isChecked) emailConfig.cc.push(`"${nome}" <${email}>`)

  try {
    const info = await transporter.sendMail(emailConfig)
    const previewURL = nodemailer.getTestMessageUrl(info)
    return res.status(httpStatus.OK).json({ previewURL })
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
  }
}
