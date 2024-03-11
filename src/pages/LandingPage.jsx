import { initializeApp } from 'firebase/app'
import { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { getStorage, ref as reff, getDownloadURL } from 'firebase/storage'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { uid } from 'uid'

import { Button } from '../components/Button'

const firebaseConfig = {
  apiKey: 'API_KEY',
  authDomain: 'PROJECT_ID.firebaseapp.com',
  // The value of `databaseURL` depends on the location of the database
  databaseURL: 'https://dimamusic-26395-default-rtdb.firebaseio.com/',
  projectId: 'dimamusic-26395',
  storageBucket: 'gs://dimamusic-26395.appspot.com',
  messagingSenderId: 'SENDER_ID',
  appId: 'APP_ID',
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
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
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      const xhr = new XMLHttpRequest()
      xhr.responseType = 'blob'
      xhr.onload = (event) => {
        const blob = xhr.response
      }
      xhr.open('GET', url)
      xhr.send()
      setUrl(url)
    })
    .catch((error) => {
      // Handle any errors
    })

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

  return (
    <section className="h-[75vh] flex  items-center justify-around">
      <div className="container flex grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Charlie Dragster</h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Electronic music
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-3">
          <form className="flex space-x-3">
            <input
              className="max-w-lg flex-1"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError(false)
              }}
            />
            {error && <div className="error">type valid email</div>}
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
