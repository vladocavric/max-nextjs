import { connectToDB, insertDocument } from '../../../helpers/db-util.js';

export default async function handler(req, res) {
	const { email } = req.body;
	if (req.method === 'POST') {
		if (!email || !email.includes('@')) {
			res.status(422).json({ message: 'the email was not valid' });
			return;
		}
        let client;
        try {
            client = await connectToDB();   
        } catch (error) {
            res.status(500).json({message: 'connection to db filed'})
            return;
        }
        try { 
            await insertDocument({
                client,
                document: {email},
                collection: 'newsletters',
            });
        } catch (error) {
            res.status(500).json({message: 'inserting data filed'})
            return;
        }
        res.status(201).json({ message: 'success' });
		return;
	}
	//  else if (req.method === "DELETE") {
	//     res.status(202).json({ message: 'successfully deleted email' });
	// }
}
