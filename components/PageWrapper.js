/* -*- mode: react -*- */
/* eslint-disable react/no-danger */
import Head from 'next/head';
import stylesheet from '../styles/index.css';

// Una funcion que devuelve una funcion
export default Page => () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900i"
        rel="stylesheet"
      />
      <style jsx global>{stylesheet}</style>
    </Head>
    <Page />
  </div>
);
