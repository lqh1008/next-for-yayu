// app/layout.js
export default function RootLayout({ children, team, analytics }) {
  return (
    <html>
      <body>
        <h1>root layout</h1>
        {children}
        {team}
        {analytics}
      </body>
    </html>
  )
}
