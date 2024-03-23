export default function handler(req, res) {
    const { email } = req.body;
	if (req.method === 'POST') {
        // TODO: add email to db
		res.status(201).json({ message: 'success' });
	} else if (req.method === "DELETE") {
        res.status(202).json({ message: 'successfully deleted email' });
    }
}
