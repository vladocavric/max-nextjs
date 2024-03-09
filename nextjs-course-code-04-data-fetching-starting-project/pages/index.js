import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';

export default function HomePage(props) {
  const { products } = props;
  return (
    <>
      <ul>
        {products.map((product) => (<li key={product.id}><Link href={`/products/${product.id}`}>{product.title}</Link></li>))}
      </ul>
      <Link href="/user-profile">User profile</Link>
    </>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products
    }, 
    revalidate: 60
  };
}
