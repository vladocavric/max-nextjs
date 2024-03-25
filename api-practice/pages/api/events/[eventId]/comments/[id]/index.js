import {
	connectToDB,
	deleteDocumentById,
} from '../../../../../../helpers/db-util';

export default async function handler(req, res) {
	let client;
	try {
		client = await connectToDB();
	} catch (error) {
		res.status(500).json({ message: 'connection to db filed' });
		return;
	}
	if (req.method === 'DELETE') {
		try {
			await deleteDocumentById({
				client,
				collection: 'comments',
				id: req.query.id,
			});
		} catch (error) {
			res.status(500).json({ message: 'deleting data filed' });
		}
		res.status(202).json({ message: 'successfully deleted comment' });
	}
}
