import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import 'aos/dist/aos.css'

// import express from "express"
// // import collection from "../../mongo"
// const collection = require('../../mongo');
// import cors from "cors"
// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())

// app.post("/", async(req, res) => {
//   const{email} = req.body

//   const data = {
//     email:email
//   }

//   try{
//     const check = await collection.findOne({email})
//     if(check) {
//       res.json('Email exists!');
//     } else {
//       res.json("doesn't exist")
//       await collection.insertMany({data})
//     }
//   }
//   catch(e) {
//     res.json("failed");
//   }
// })

// app.listen(8000, () => {
//   console.log('Port connected!');
// })

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
