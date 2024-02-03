import { useRouter } from 'next/router';
export default function ClientsProjectPage() {
    const router = useRouter();
    const loadProjectHandler = () => {
        // load data...
        // router.push('/clients/max/projecta');
        // router.replace('/clients/max/projecta'); // replace the current page so you can't go back
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'max', clientprojectid: 'projecta' }
        });
    }

    return (
        <div>
        <h1>The Clients Project Page</h1>
        <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}