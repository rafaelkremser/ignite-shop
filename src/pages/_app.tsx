import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'

import Image from 'next/image'

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} width={130} height={52} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default App
