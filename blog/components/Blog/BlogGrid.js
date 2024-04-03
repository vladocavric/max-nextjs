import React from 'react'
import BlogItem from './BlogItem'
import styles from './BlogGrid.module.css'

const BlogGrid = (props) => {
    const {blogs} = props
  return (
    <ul className={styles.grid}>
        {blogs.map(blog => <BlogItem key={blog.slug} {...blog}/>)}
    </ul>
  )
}

export default BlogGrid