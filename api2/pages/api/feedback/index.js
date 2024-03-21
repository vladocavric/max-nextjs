import path from 'path'
import fs from 'fs'
export const getFilePath = () => {
    return path.join(process.cwd(), 'data', 'feedbacks.json')
}
export const getFileData = (filePath) => {
    const data = fs.readFileSync(filePath)
    return JSON.parse(data)
}
const handler = (req, res) => {
    const filePath = getFilePath()
    const data = getFileData(filePath)

    if(req.method === 'POST') {
        const newFeedback = {
            id: new Date().toISOString(),
            ...req.body
        }
        data.push(newFeedback)
        fs.writeFileSync(filePath, JSON.stringify(data))
        res.status(201).json({message: 'success', feedback: newFeedback})
    } else {
        res.status(200).json({ feedbacks: data})
    }
}

export default handler