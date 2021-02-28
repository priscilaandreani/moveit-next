import { ChallangeProvider } from '../contexts/ChallangeContexts';
import '../styles/global.css';



function MyApp( { Component, pageProps } ) {
  return (
    <ChallangeProvider>
      <Component {...pageProps} />
    </ChallangeProvider>
  )
}

export default MyApp
