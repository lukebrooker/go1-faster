import Provider from "@go1d/go1d/build/components/Provider";

function MyApp({ Component, pageProps }) {
  return <Provider><Component {...pageProps} /></Provider>
}

export default MyApp
