import Head from 'next/head';
import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>oğuz topçu</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="container mx-auto">
        <Navbar />

        <div className="container mt-5">
          {children}
        </div>
      </div>
    </>
  );
}