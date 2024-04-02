import { MongoClient, ObjectId } from 'mongodb';

export const connectToDB = async () => {
	const client = await MongoClient.connect(
		`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.byhwe0u.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
	);

	return client;
};

export const insertDocument = async ({ client, collection, document }) => {
	const db = client.db();
	const result = await db.collection(collection).insertOne({ ...document });
	client.close();
	return result;
};

export const getDocumentsBy = async ({ client, collection, findBy, sort }) => {
	const db = client.db();
	const items = await db
		.collection(collection)
		.find(findBy)
		.sort(sort)
		.toArray();
	client.close();
	return items;
};

export const deleteDocumentById = async ({ client, collection, id }) => {
	const db = client.db();
	const objectId = new ObjectId(id);
	const result = await db.collection(collection).deleteOne({ _id: objectId });
	client.close();
};
