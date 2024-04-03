import React from 'react';
import styles from './BlogHeader.module.css';
import Image from 'next/image';

const BlogHeader = ({ title, image }) => {
	return (
		<header className={styles.header}>
			<h1>{title}</h1>
			{image && (
				<Image
					src={`/images/blog/${image}`}
					alt={title ? title : 'some alt text'}
					width={200}
					height={150}
				/>
			)}
		</header>
	);
};

export default BlogHeader;
