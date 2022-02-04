import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fast Food | Home</title>  
        <meta name='keyword' content='foodlist'/>
      </Head>

    <div>    
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>In ullamco est reprehenderit eu Lorem laborum ullamco. Reprehenderit id amet nisi Lorem consectetur. Ipsum anim tempor veniam occaecat et est dolor sint veniam Lorem officia.</p>
        <p className={styles.text}>In ullamco est reprehenderit eu Lorem laborum ullamco. Reprehenderit id amet nisi Lorem consectetur. Ipsum anim tempor veniam occaecat et est dolor sint veniam Lorem officia.</p>
        <Link href={'/foodlist'}>
        <a className={styles.btn}>See more Food List</a>
        </Link>    
      </div>
    </>
  )
}
