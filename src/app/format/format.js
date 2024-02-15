import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Format({children}) {
    return (
        <>
        <Head>
        <title>Blog</title>
        </Head>

        <Navigation></Navigation>
        <main>{children}</main>
        <Footer></Footer>
        </>
    )
}
