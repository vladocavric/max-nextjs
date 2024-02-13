import Link from "next/link";
import styles from './button.module.scss';

export default function Button(props) {
    const { children, href } = props;
    return (
        <Link href={href} className={styles.btn}>
           {children}
        </Link>
    );
}