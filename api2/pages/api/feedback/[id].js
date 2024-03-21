import { getFilePath, getFileData } from "./index";
export default function handler(req, res) {
    const id = req.query.id
    const filePath = getFilePath()
    const fileData = getFileData(filePath)
    const selectedFeedback = fileData.find(feedback => feedback.id === id)
    res.status(200).json({...selectedFeedback})
}