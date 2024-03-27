import {
	connectToDB,
	insertDocument,
	getDocumentsBy,
} from '../../../../../helpers/db-util';

export default async function handler(req, res) {
	let client;
	try {
		client = await connectToDB();
	} catch (error) {
		res.status(500).json({ message: 'connection to db filed' });
		return;
	}

	if (req.method === 'GET') {
		let items;
		try {
			const findBy = { eventId: req.query.eventId };
			const sort = { _id: -1 };
			items = await getDocumentsBy({
				client,
				collection: 'comments',
				findBy,
				sort,
			});
		} catch (error) {
			res.status(500).json({ message: 'failed to fetch data form db' });
			return;
		}

		res.status(200).json({ message: 'success', comments: items });
		return;
	}

	if (req.method === 'POST') {
		const { email, name, text } = req.body;
		if (!email || !email.includes('@') || !name || !text) {
			res.status(422).json({ message: 'some of data were not valid' });
			return;
		}
		const newComment = {
			eventId: req.query.eventId,
			...req.body,
		};

		try {
			const result = await insertDocument({
				client,
				document: newComment,
				collection: 'comments',
			});
			newComment._id = result.insertedId;
		} catch (error) {
			res.status(500).json({ message: 'inserting data filed' });
		}
		res.status(201).json({ message: 'success', comment: newComment });
		return;
	}
}
