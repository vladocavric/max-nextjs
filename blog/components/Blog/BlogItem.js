import React from 'react';
import styles from './BlogItem.module.css';
import Link from 'next/link';
import Image from 'next/image';

const BlogItem = ({ title, date, slug, image, excerpt }) => {
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	return (
		<li className={styles.post}>
			<Link href={`/blogs/${slug}`}>
				<div className={styles.image}>
					<Image
						src={`/images/blog/${image}`}
						alt={title}
						width={300}
						height={200}
						layout='responsive'
					/>
				</div>
				<div className={styles.content}>
					<h3>{title}</h3>
					<time>{formattedDate}</time>
					<p>{excerpt}</p>
				</div>
			</Link>
		</li>
	);
};

export default BlogItem;
