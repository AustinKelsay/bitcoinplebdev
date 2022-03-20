import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" rel="stylesheet"/>
            <script>
                {`
              function resetHeight(){
                // reset the body height to that of the inner browser
                document.body.style.height = window.innerHeight + "px";
              }
              // reset the height whenever the window's resized
              window.addEventListener("resize", resetHeight);
              // called to initially set the height.
              resetHeight();
              `}
            </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument