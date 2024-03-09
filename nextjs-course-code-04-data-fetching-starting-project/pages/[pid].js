import fs from 'fs/promises';
import path from 'path';

export default function ProductsDetailsPage(params) {
    const { loadedProduct } = params;
    if (!loadedProduct) {
        return <h1>Loading...</h1>;
    }
    return (
        <div>
        <h1>{loadedProduct.title}</h1>
        <p>{loadedProduct.description}</p>
        </div>
    );
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

export async function getStaticProps(context) {
    const { params } = context;
    const data = await getData();
    const product = data.products.find(product => product.id === params.pid);
    if (!product) {
        return { notFound: true };
    }
    return {
        props: {
            loadedProduct: product
        }
    };
}

export async function getStaticPaths() {
    const {products} = await getData();
    const paths = products.map(product => ({params: {pid : product.id}}));
    return {
        paths,
        fallback: true
    };
}