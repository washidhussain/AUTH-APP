// InterviewModel.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IInterview extends Document {
    candidateName: string;
    interviewerName: string;
    rating: number;
}

const interviewSchema = new Schema<IInterview>({
    candidateName: { type: String, required: true },
    interviewerName: { type: String, required: true },
    rating: { type: Number, required: true },
});

export const InterviewModel = mongoose.model<IInterview>('Interview', interviewSchema);
