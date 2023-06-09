import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { MainLayout } from '../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <>
        <div className={styles.card}>
          <h1>
            Ir a <Link href="/about">About</Link>
          </h1>
        </div>

        <p className={styles.description}>
          Get started by editing {''}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </>
    </MainLayout>
  )
}
