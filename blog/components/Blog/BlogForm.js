'use client'
import dynamic from 'next/dynamic';
const CustomEditor = dynamic( () => {
    return import( '../CustomEditor/CustomEditor' );
  }, { ssr: false } );


const BlogForm = () => {
	return (
		<form style={{maxWidth: 700,height: 700, margin: 'auto'}}>
			<h3>BlogForm</h3>
            <CustomEditor />
		</form>
	);
};

export default BlogForm;