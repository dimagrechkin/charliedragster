import { initializeApp } from 'firebase/app'
import { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { getStorage, ref as reff, getDownloadURL } from 'firebase/storage'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { uid } from 'uid'

import { Button } from '../components/Button'
import { links } from '../helpers/const'

const firebaseConfig = {
  apiKey: 'API_KEY',
  authDomain: 'PROJECT_ID.firebaseapp.com',
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID_DI,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET_DI,
  messagingSenderId: 'SENDER_ID',
  appId: 'APP_ID',
  measurementId: 'G-MEASUREMENT_ID',
}

// Initialize firebase app.
const app = initializeApp(firebaseConfig)
// Initialize firebase database and get the reference of firebase database object.
const database = getDatabase(app)
const storage = getStorage()
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Sxua1qK2pnL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

const pathReference = reff(storage, 'bundle.zip')

const LandingPage = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [url, setUrl] = useState('')

  getDownloadURL(pathReference)
    .then((url) => {
      const xhr = new XMLHttpRequest()
      xhr.responseType = 'blob'
      xhr.onload = () => {
        // const blob = xhr.response
      }
      xhr.open('GET', url)
      xhr.send()
      setUrl(url)
    })
    .catch(() => {})

  const onSubmit = (e) => {
    const data = {
      email: email,
    }
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (email.match(validRegex)) {
      set(ref(database, 'email/' + uid()), data)
        .then(() => {
          toast.success('Successfully submitted your email!')
        })
        .catch(() => {
          toast.error('Failed to submit email')
        })
      e.preventDefault()
      setEmail('')
    } else {
      setError(true)
    }
  }

  const listItems = (id) =>
    links.map(
      (link) =>
        link.row === id && (
          <span
            key={link.id}
            className="w-1/2 text-center text-sm font-medium rounded-full border border-gray-200/90 bg-gray-200/80 py-1 z-10"
          >
            <a className="text-sm font-medium hover:underline underline-offset-4" href={link.url}>
              {link.name}
            </a>
          </span>
        )
    )

  const tableSize = [1, 2, 3, 4, 5]

  return (
    <section className="h-[92vh] flex  items-center justify-around">
      <div className="container flex grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10 z-10">
        {/* <img className="mx-auto grid z-10 w-20 h-20" src="IMG_0056.PNG" alt="image description" /> */}
        <div className="w-full max-w-sm mx-auto grid gap-2 pt-4 z-10">
          {tableSize.map((i) => (
            <div key={i} className="flex gap-2">
              {listItems(i)}
            </div>
          ))}
        </div>
        <div className="space-y-3 ">
          <h1 className="min-h-[230px] lg:min-h-[120px] font-bold tracking-tighter text-8xl sm:text-8xl md:text-8xl lg:text-8xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Charlie Dragster
          </h1>
          {/* <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed  xl:text-xl/relaxed dark:text-gray-400 ">
            Electronic music
          </p> */}
        </div>
        <div className="mx-auto w-full max-w-sm space-y-3">
          <form className="flex space-x-3">
            <input
              className="placeholder:pl-3 w-44 flex-1 relative inline-flex items-center justify-center border-gray-200/90 bg-gray-200/80  transition-all duration-200  font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError(false)
              }}
            />

            {error && <div className="error">Type valid Email</div>}
            {/* <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" /> */}
            <Button onClick={onSubmit}>Subscribe</Button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Sign up to get notified when new music released and get free bundle of digital assets.
            <a className="underline underline-offset-2" href={url}>
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
