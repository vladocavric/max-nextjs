import BlogGrid from '../Blog/BlogGrid'
import styles from './FeaturedPosts.module.css'

const FeaturedPosts = ({blogs}) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <BlogGrid blogs={blogs}/>
    </section>
  )
}

export default FeaturedPosts
