import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    role: {
      type: String,
      enum: ['customer', 'admin'],
      default: 'customer'
    },
    avatar:{
        public_id:String,
        url:String,
    },
    task:{
         title:"string",
         discription:"string",
         completed:Boolean,
         createdAt:Date
    },
    otp:Number,
    otp_Entry:Date,
    verified:{
      type:Boolean,
      default:false
    }
    // You can add more fields here such as address, phone number, etc.
  },
  { timestamps: true }
);

userSchema.pre("save",async function(next){

  if(!this.isModified("password") ) return next();

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password,salt);
  this.password= hashedPassword;
  next();

})


userSchema.methods.getJWTToken = function () {
  return jwt.sign({_id:this._id},process.env.JWT_SECRET,{
    expiresIn:100,
  })
}



// Create a model from the schema
const User = mongoose.model('User', userSchema);

export default User;
