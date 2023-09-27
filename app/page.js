import ImportPreline from './preline'
import Header from './components/header/header'
import HeaderHero from './components/hero/headerHero'

export default function Home() {

  const CLIENT_ID = "43030d5d670e478a8be51b2a3c6891ac"

  const REDIRECT_URI = "http://localhost:300"

  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"

  const RESPONSE_TYPE = "token"

  return (
    <>
    <ImportPreline />
    <Header logspoti_color="text-gray-600" about_color="text-gray-600" contact_color="text-gray-600"/>
    <HeaderHero AUTH_ENDPOINT={AUTH_ENDPOINT} CLIENT_ID={CLIENT_ID} REDIRECT_URI={REDIRECT_URI} RESPONSE_TYPE={RESPONSE_TYPE}/>
    </>
  )
}
