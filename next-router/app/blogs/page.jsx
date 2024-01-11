import Link from 'next/link';
export default function Blogs() {
    return (
        <main>
        <h1>📝 Blogs</h1>
        <p><Link href='/blogs/post-1'>Blog  1</Link></p>
        <p><Link href='/blogs/post-2'>Blog  2</Link></p>
        </main>
    );
}