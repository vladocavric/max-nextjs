import Link from 'next/link';
import style from './button.module.css';

export default function Button({
	children,
	href,
}: {
	children: any;
	href?: string;
}): JSX.Element {
	return (
		<>
			{href ? (
				<Link className={style.btn} href={href}>
					{children}
				</Link>
			) : (
				<button className={style.btn}>{children}</button>
			)}
		</>
	);
}
