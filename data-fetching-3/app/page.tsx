import Link from "next/link";

export default function HomePage() {
    return(
        <>
        <h1>this is home page</h1>
        <Link href={'/products'}>Products</Link>
        <br/>
        <Link href={'/sales-client'}>Sales Client</Link>
        <br/>
        <Link href={'/sales-server'}>Sales Server</Link>
        </>
    )
}