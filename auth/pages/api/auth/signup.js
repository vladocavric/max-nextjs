import { connectToDB } from '../../../lib/db';
import { hashedPassword } from '../../../lib/auth';
const handler = async (req, res) => {
    if(req.method !== 'POST') {
        return;
    }
	const { password, email } = req.body;
	if (!email || !email.includes('@') || !password || !password.trim()) {
		res.status(422).json({
			message:
				'invalid input - password should also be at least 7 carcases long',
		});
        client.close()
		return;
	}
	const client = await connectToDB();
	const db = client.db();
    const existingUser = await db.collection('users').findOne({email})
    if(existingUser) {
        res.status(422).json({message: 'User with this email already exist'})
        client.close()
        return;
    }
	const  returnedHashedPassword = await hashedPassword(password);
	const result = await db.collection('users').insertOne({
		email,
		password: returnedHashedPassword,
	});

	res.status(201).json({ message: 'Created user!' });
    client.close()
};

export default handler;
