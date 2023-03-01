import mongoose from "mongoose";
 const connectdb=(url)=>{mongoose.set('strictQuery',true)
 mongoose.connect(url)
 .then(()=>console.log('connected'))
 .catch((err)=>console.log('error'))
}
export default connectdb;