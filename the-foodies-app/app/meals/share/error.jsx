'use client';
export default function Error({error}) {
    return (
        <main className="error">
            <h1>An error occurred!</h1>
            <p>Failed to save meal data, becaus the data was invalid</p>
        </main>
    );
}