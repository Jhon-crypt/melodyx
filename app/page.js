import Image from 'next/image'
import ImportPreline from './preline'
import Header from './components/header/header'
import HeaderHero from './components/hero/headerHero'

export default function Home() {
  return (
    <>
    <ImportPreline />
    <Header />
    <HeaderHero />
    </>
  )
}
