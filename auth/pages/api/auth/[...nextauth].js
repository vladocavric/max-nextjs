import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers'
import CredentialsProvider from 'next-auth/providers/credentials';

import { connectToDB } from '../../../lib/db';
import { verifyPassword } from '../../../lib/auth';

export default NextAuth({
	// session: {
	// 	jwt: true,
	// },
	providers: [
		CredentialsProvider({
			async authorize(credentials, req) {
				const client = await connectToDB();
				const user = await client
					.db()
					.collection('users')
					.findOne({ email: credentials.email });

				if (!user) {
					throw new Error('No user found with this email');
				}

				const isValidPassword = await verifyPassword(
					credentials.password,
					user.password
				);

				if (!isValidPassword) {
					throw new Error('Could not logged you in');
				}

				client.close();
				return {
					email: user.email,
				};
			},
		}),
	],
});
