import mongoose,{Schema,model} from "mongoose";

interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    category : mongoose.Types.ObjectId;
    stock : number;
};

const productSchema : Schema <IProduct> = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    stock: {type: Number, required: true}
},{timestamps:true,versionKey:false});

const productModel = mongoose.model<IProduct>("product", productSchema);

export default productModel;