import AllBlogs from "../../components/Blog/AllBlogs"

import { DUMMY_DATA } from "../index"

const BlogsPage = () => {
    return(
        <AllBlogs blogs={DUMMY_DATA}/>
    )
}

export default BlogsPage