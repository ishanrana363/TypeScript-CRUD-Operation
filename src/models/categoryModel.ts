import mongoose,{Schema,Document} from 'mongoose';

interface ICategory extends Document {
    name: string;
    img : string;
};


const categorySchema : Schema<ICategory> = new Schema({
    name : {type: String, required: true},
    img : {type: String, required: true}
},{ timestamps:true, versionKey:false });


const categoryModel = mongoose.model<ICategory>("category",categorySchema);

export default categoryModel;