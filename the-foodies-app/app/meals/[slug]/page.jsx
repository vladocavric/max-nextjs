export default function Meal({params}) {
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
            <p>{params.slug}</p>
            </h1>
        </main>
    );
}