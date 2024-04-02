import UserProfile from '../components/profile/user-profile';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router'

function ProfilePage(props) {
  // const { data: session, status } = useSession();
  // const session = props.session
  // const router = useRouter()
  // if(!session) {
  //   router.push('/auth')
  //   return;
  // }
  return <UserProfile />;
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }
  return {
    props: { session },
  }
}

export default ProfilePage;
