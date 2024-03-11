import { useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import { usePostContactMutation } from '../features/apiSlice'
import { Tooltip, Button } from '../components'
import { validationSchema, socialLinks } from '../helpers'
import { Mandalorian } from '../assets/images'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactPage = () => {
  return (
    <section className="h-[75vh] flex  items-center justify-around">
      <div className="container flex grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <h1 className="text-2xl font-bold">Work Mail: </h1>
        <h1 className="text-2xl font-bold">dima.grechkin8@gmail.com</h1>
      </div>
    </section>
  )
}

export default ContactPage
