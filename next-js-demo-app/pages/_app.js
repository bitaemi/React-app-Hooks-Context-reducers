import NavbarComp from "../components/navbar";

function MyApp({ Component, pageProps }) {
    return (
    <>
        <NavbarComp />
        <Component {...pageProps} />
        <p>I am the footer from _app.js file</p> {/* this will show up on all pages */}
    </>
    );
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp;