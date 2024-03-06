import Link from "next/link";
import styles from './button.module.scss';

type ButtonProps = {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
};


export default function Button(props: ButtonProps) {
    const { children, href, onClick } = props;
    if (href) {
        return (
            <Link href={href} className={styles.btn}>
               {children}
            </Link>
        );
    }
    return (
        <button className={styles.btn} onClick={onClick}>
            {children}
        </button>
    );
}