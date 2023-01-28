import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className=' bg-slate-500'>
        <div className=' content-center text-center '>
        <h1 className=' text-4xl'>To Do by Fahad</h1>
        </div>
        {children}</body>
    </html>
  )
}
