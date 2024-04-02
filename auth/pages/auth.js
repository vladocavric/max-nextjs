import AuthForm from '../components/auth/auth-form';
import { getSession } from 'next-auth/react';

function AuthPage(props) {
  return <AuthForm />;
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if(session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: { session },
  }
}


export default AuthPage;
