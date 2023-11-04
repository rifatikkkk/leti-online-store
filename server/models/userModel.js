import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter Your Name"],
            maxLength: [30, "Name cannot exceed 30 characters"],
            minLength: [4, "Name should have more than 4 characters"],
        },
        password: {
            type: String,
            required: [true, "Please Enter Your Password"],
            minLength: [8, "Password should be greater than 8 characters"],
            select: false,
        },
        avatar: {
            public_id: {
                type: String,
                required: true,
                default: "default photo",
            },
            url: {
                type: String,
                required: true,
                default: "defaultPic.png",
            },
        },
        role: {
            type: String,
            default: "user",
        },
    }
)

// Password Hash
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.model("User", UserSchema);