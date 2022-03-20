import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  if (typeof window !== 'undefined') {
    const appHeight = () => {
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
    };
    window.addEventListener('resize', appHeight);
    appHeight();
  }
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}