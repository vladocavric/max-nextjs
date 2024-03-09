export default function UserIdPage(props) {
    const { id } = props;
    return (
        <h1>{props.id}</h1>
    );
}


export async function getServerSideProps(context) {
    const { params } = context;
    const userId = params.uid;
    return {
        props: {
            id: `userid-${userId}`
        }
    };
}