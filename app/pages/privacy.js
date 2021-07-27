import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blobeo - Explore &amp; share videos, images, and GIFs right from Discord!</title>
        <meta name="description" content="PP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.top}>
        <h1 className={styles.title}>
          PP
        </h1>

        <p className={styles.description}>
        Privacy Policy for Blobeo
        </p>
        <center>
        <Link href="/"><button className={styles.button}>Back</button></Link>
        </center>
</div>
<div style={{margin: '50px'}}>
<p className={styles.description}>Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there Hi there </p>
       </div>
        </main>
        </div>
  )
}
