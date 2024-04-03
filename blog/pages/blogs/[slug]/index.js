import BlogContent from "../../../components/Blog/BlogSingle/BlogContent"
import BlogHeader from "../../../components/Blog/BlogSingle/BlogHeader"
import { useRouter } from 'next/router'

import { DUMMY_DATA } from "../../index"

const SingleBlogPage = () => {
    const router = useRouter()
    const data = DUMMY_DATA.find(data => data.slug === router.query.slug )
    return (
        <>
        <BlogContent image={data?.image} content={data?.content} title={data?.title} />
        </>
    )
}

export default SingleBlogPage