import './globals.css'

export const metadata = {
  title: 'MelodyX',
  description: 'Melodyx Helps You Discover New Music And A Perfect Playlist That Fits Your Mood',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor:'#FFEADF'}}>{children}</body>
    </html>
  )
}
