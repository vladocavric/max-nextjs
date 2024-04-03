import React from 'react'
import styles from './AllBlogs.module.css';
import BlogGrid from './BlogGrid';

const AllBlogs = ({blogs}) => {
  return (
    <section className={styles.posts}>
        <h1>Blogs</h1>
        <BlogGrid blogs={blogs}/>
    </section>
  )
}

export default AllBlogs