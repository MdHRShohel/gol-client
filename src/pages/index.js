import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
    <h1>Hello World...</h1>
    </div>
  )
}
