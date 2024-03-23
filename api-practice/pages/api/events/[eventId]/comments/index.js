export default function handler(req, res) {
    console.log(req.query, req.body)
    if(req.method === 'GET') {
        res.status(200).json({ message: 'success' });
    } else if (req.method === 'POST') {
        const newComment = {
            id: 'nesto novo',
            ...req.body
        }
		res.status(201).json({ message: 'success' });
	} 
    //TODO: ovo mora u novi file [id].js
    // else if (req.method === "DELETE") {
    //     res.status(202).json({ message: 'successfully deleted email' });
    // }  
}
