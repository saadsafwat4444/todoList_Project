
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const ApiError = require("../utils/ApiError");

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{ 
        expiresIn: process.env.JWT_EXPIRE
    })
};
// register
exports.register=async(req,res,next)=>{
    try{

        const {name,email,password}=req.body;
         const existingUser=await User.findOne({email});
         if(existingUser){
             throw new ApiError(400,"Email already exists");
         }

         const user=await User.create({name,email,password});
    res.status(201).json({
      success: true,
      token: generateToken(user._id),
    });

    }
    catch(error){
    next(error);
    }
}

// Login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError(400, "Invalid credentials");
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new ApiError(400, "Invalid credentials");
    }

    res.status(200).json({
      success: true,
      token: generateToken(user._id),
    });
  } catch (error) {
    next(error);
  }
};