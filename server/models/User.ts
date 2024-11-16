import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: "admin" | "team_member";
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "team_member"],
      default: "team_member",
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare password for login
userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUser>("User", userSchema);
