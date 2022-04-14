import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Moment from 'moment'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

       
        <title>XView - Re-inventing business software</title>
        <meta name="description" content="Bespoke business software that's working for you in days, not months." />

        <meta property="og:url" content="https://www.xview.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="XView - Re-inventing business software" />
        <meta property="og:description" content="Bespoke business software that's working for you in days, not months." />
        <meta property="og:image" content="https://www.xview.app/openGraphImage.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="xview.app" />
        <meta property="twitter:url" content="https://www.xview.app" />
        <meta name="twitter:title" content="XView - Re-inventing business software" />
        <meta name="twitter:description" content="Bespoke business software that's working for you in days, not months." />
        <meta name="twitter:image" content="https://www.xview.app/openGraphImage.png" />

      </Head>

      <main className={styles.main}>
        <img className={styles.logo} src="/logo.svg" />
        <h1 className={styles.title}>
          Re-inventing Business Software
        </h1>


        <p className={styles.description}>We're busy delivering services to new clients at the moment.</p>
        <p className={styles.description}>If you've been recommended XView, and want to get in touch, please send an email to <a href='mailto:hello@xview.app'>hello@xview.app</a>, we'd love to hear from you.</p>

        {/* <div className={styles.grid}>
          <a href="/new-page" className={styles.card}>
            <h3>XView</h3>
            <p>XView</p>
          </a>

          <a href="/new-page" className={styles.card}>
            <h3>XView</h3>
            <p>XView</p>
          </a>

          <a href="/new-page" className={styles.card}>
            <h3>XView</h3>
            <p>XView</p>
          </a>

          <a href="/new-page" className={styles.card}>
            <h3>XView</h3>
            <p>XView</p>
          </a>
            
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        © Copyright {Moment().year()} XView Limited<br />XView Limited is a company registered in England and Wales (Company No. 12666640) Wharf Cottage, Daneway, Sapperton, GL7 6LN
      </footer>
    </div>
  )
}
