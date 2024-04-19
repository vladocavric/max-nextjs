import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const blogsFolderPath = path.join(process.cwd(), 'blogs');

export const getAllBlogs = () => {
	const blogFiles = fs.readdirSync(blogsFolderPath);
	// let blogsArr;
	// for (const blogFileName in blogFiles) {
	// 	blogsArr.push(getBlogData(blogFileName));
	// }

	// const sortedBlogs = blogsArr.sort((a, b) => {
	// 	// Convert the date strings to Date objects for comparison
	// 	let dateA = new Date(a.date);
	// 	let dateB = new Date(b.date);

	// 	// Compare the dates
	// 	if (dateA < dateB) return -1;
	// 	if (dateA > dateB) return 1;
	// 	return 0;
	// });

	return blogFiles;
};

// export const getBlogData = (blogName) => {
// 	const blogPath = path.join(blogsFolderPath, blogName);
// 	const fileData = fs.readFileSync(blogPath, 'utf-8');
// 	const { data, content } = matter(fileData);
// 	const slug = blogName.replace(/\.md/g, '');
// 	const blogData = {
// 		slug,
// 		...data,
// 		content,
// 	};
// 	return blogData;
// };

export const getFeaturedBlogs = () => {
	// const sortedBlogs = getAllBlogs();
	// const featuredBlogs = sortedBlogs.filter((blog) => blog.isFeatured);
    const featuredBlogs = 'nesto'
	return featuredBlogs;
};
