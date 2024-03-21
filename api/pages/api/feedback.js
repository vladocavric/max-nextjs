import path from 'path'
import fs from 'fs'

export const getFilePath = () => {
    return path.join(process.cwd(), 'data', 'feedback.json')
}

export const getFileData = (filePath) => {
    const fileData = fs.readFileSync(filePath)
    return JSON.parse(fileData)
}

export default function handler(req, res) {
    const filePath = getFilePath()  
    const data = getFileData(filePath)
	if (req.method === 'POST') {
        const email = req.body.email
        const feedback = req.body.feedback
        const newFeedback = {
            id: new Date().toISOString(),
            email,
            feedback
        }
        data.push(newFeedback)
        fs.writeFileSync(filePath, JSON.stringify(data))
        res.status(201).json({message: 'success', feedback: newFeedback})
	} else {
		res.status(200).json({ feedback: data });
	}
}
