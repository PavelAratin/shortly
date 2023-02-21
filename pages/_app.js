import '../styles/main.scss';
import poppinsFont from '@next/font/local';
import Layout from '../components/layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../store/store';
const poppinsLocalFont = poppinsFont({
  src: [
    {
      path: '../public/fonts/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
      display: 'swap',
    },
    {
      path: '../public/fonts/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal',
      display: 'swap'
    },
  ],
})
export default function App({ Component, pageProps }) {
  return (
    <main className={poppinsLocalFont.className}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </main>
  )
}
