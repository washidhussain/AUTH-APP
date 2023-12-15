// UserModel.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for a User document
interface IUser extends Document {
  username: string;
  password: string;
}

// Define the User schema
const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create and export the User model
export const UserModel = mongoose.model<IUser>('User', userSchema);
