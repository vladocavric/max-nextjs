import styles from './Logo.module.css'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' className={styles.logo}>Logo</Link>
  )
}

export default Logo