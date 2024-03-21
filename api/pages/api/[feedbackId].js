import {getFilePath, getFileData} from './feedback'
export default function handler(req, res) {
    const feedbackId = req.query.feedbackId
    const filePath = getFilePath()
    const data = getFileData(filePath)
    const selectedFeedback = data.find(feedback => feedback.id === feedbackId)
    res.status(200).json({feedback: selectedFeedback})
}