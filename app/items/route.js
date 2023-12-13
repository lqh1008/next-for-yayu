// app/items/route.js
// import { NextResponse } from "next/server"
export async function GET() {
    const res = await fetch('https://httpbin.org/get', {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY,
      },
    })
    const data = await res.json()
    console.log('🚀  data:::', data)
   
    return Response.json(data)
  }
  

//   export async function GET() {
//     const res = await fetch('https://data.mongodb-api.com/...', {
//       next: { revalidate: 60 }, //  每 60 秒重新验证
//     })
//     const data = await res.json()
   
//     return Response.json(data)
//   }