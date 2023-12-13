// // app/api/route.js
// import { cookies,headers } from 'next/headers'

// export async function GET(request) {
//   const cookieStore = cookies()
//   console.log('🚀   headers():::',  headers())
//   const token = cookieStore.get('token')
//   console.log('🚀  token:::', token)
// //    const token = request.cookies.get('token')
//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: { 'Set-Cookie': `token=${token}` },
//   })
// }

// export async function GET(request) {
//     const token = request.cookies.get('token')
//     request.cookies.set(`token2`, 123)
//     return new Response('token',{
//         status:200,
//         headers:{
//              'Set-Cookie':`token=${111}`
//         }
//     })
//   }

// import { redirect } from 'next/navigation'
 
// export async function GET(request) {
//   redirect('https://nextjs.org/')
// }


// import { headers } from 'next/headers'
 
// export async function GET(request) {
//   const headersList = headers()
//   const referer = headersList.get('referer')
//   console.log('🚀  referer:::', referer)
 
//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: { referer: referer },
//   })
// }



// app/items/route.js
// import { NextResponse } from 'next/server'
 
// export async function POST(request) {
//   const formData = await request.formData()
//   const name = formData.get('name')
//   console.log('🚀  name:::', name)
//   const email = formData.get('email')
//   return NextResponse.json({ name, email })
// }

export async function GET(request) {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}