import { Html, Head, Main, NextScript } from 'next/document';
import { path_ibm } from '../utils/ibm-bundle-info';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src={path_ibm} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
