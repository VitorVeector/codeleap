import { DataProvider } from 'context/DataContext'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <DataProvider>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>CodeLeap Challenge</title>
            </Head>
            <GlobalStyles/> 
            <Component {...pageProps} />
        </DataProvider>
    )
}
