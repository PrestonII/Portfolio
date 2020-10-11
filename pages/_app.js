import { Provider } from 'react-redux';
import { useStore } from '../app/app.store';
// import '../app/app.module.scss';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
