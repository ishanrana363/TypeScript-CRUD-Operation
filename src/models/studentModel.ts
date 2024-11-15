import mongoose, {Document,Schema} from "mongoose";

interface IStudent extends Document{
    name: string;
    age: number;
    email: string;
    enrolledDate :Date;
    courses: string;
};

const studentSchema: Schema<IStudent> = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    enrolledDate: { type: Date, default: Date.now },
    courses: {type: String} 
});

const studentModel = mongoose.model<IStudent>("Student",studentSchema);

export default studentModel;