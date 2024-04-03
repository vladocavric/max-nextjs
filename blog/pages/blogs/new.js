'use client'
import dynamic from 'next/dynamic';
// import BlogForm from '../../components/Blog/BlogForm';
const BlogForm = dynamic(() => import('../../components/Blog/BlogForm'));

const NewBlogPage = () => {    
    return(
        <>
        <h1>New Blog Page</h1>
        <BlogForm />
        </>
    )
}

export default NewBlogPage