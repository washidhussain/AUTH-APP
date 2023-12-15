// interviewRoutes.ts
import express from 'express';
import { InterviewModel } from './InterviewModel';
import verifyToken from './verifyToken';

const router = express.Router();

router.use(verifyToken);

router.post('/add', async (req, res) => {
  try {
    const { candidateName, interviewerName } = req.body;
    const newInterview = new InterviewModel({ candidateName, interviewerName });
    await newInterview.save();

    return res.status(201).json({ message: 'Interview added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/list', async (req, res) => {
  try {
    const interviews = await InterviewModel.find();
    res.status(200).json(interviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete('/delete/:interviewId', async (req, res) => {
  try {
    const interviewId = req.params.interviewId;
    await InterviewModel.findByIdAndDelete(interviewId);
    res.status(200).json({ message: 'Interview deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
