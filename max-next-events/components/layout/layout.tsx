import MainHeader from "./main-header"

export default function Layout({ children } : { children: any}) {
    return (
        <>
            <MainHeader />
            <main>{children}</main>
        </>
    );
}