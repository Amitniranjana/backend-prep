import asyncHandler from '../utils/asyncHandler.js'
import ApiError from "../utils/ApiError.js"
import { User } from '../models/user.model.js';
import uploadOnCloudinary from '../utils/cloudinary.js';

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    //.some() is used to check if at least one item in an array meets a condition.
    if ([username, email, password].some((field) =>
        field?.trim() === ""
    )) {
        throw new ApiError(400, "all field are necessary")
    }
    const existingUser = await User.findOne({ $or: [{ email: email.trim().toLowerCase() }, { username: username.trim().toLowerCase() }] });
    if (existingUser) {
        throw new ApiError(409, "user already register");
    }
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "avatar is required");
    }

    const avatarUrl = await uploadOnCloudinary(avatarLocalPath);
    const coverImageUrl = coverImageLocalPath ? await uploadOnCloudinary(coverImageLocalPath) : null;

    if (!avatarUrl) {
        throw new ApiError(400, "avatar file is required");
    }

    const user = await User.create({
        username,
        avatar: avatarUrl.url,
        email,
        coverImage: coverImageUrl ? coverImageUrl.url : undefined,
        password // Don't forget to save password!
    });

    console.log(user);
    res.status(201).json({ success: true, user });
})

export default registerUser;