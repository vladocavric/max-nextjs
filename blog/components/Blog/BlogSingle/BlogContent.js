import React from 'react';
import styles from './BlogContent.module.css';
import Image from 'next/image';
import BlogHeader from './BlogHeader';
import ReactMarkdown from 'react-markdown'

const BlogContent = ({ image, content, title }) => {
	return (
		<article className={styles.content}>
      <BlogHeader title={title} image={image} />
			{/* <Image src={`/images/blog/${image}`} alt={title} fill /> */}
			<ReactMarkdown>{content}</ReactMarkdown>
		</article>
	);
};

export default BlogContent;
