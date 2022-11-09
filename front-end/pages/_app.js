import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/index.css';
import { AuthProvider } from '../lib/context/context';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )

}
