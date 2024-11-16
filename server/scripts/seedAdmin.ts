import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../models/User";

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);

    // Check if admin already exists
    const existingAdmin = await User.findOne({
      email: "admin@luminousbluewaters.com",
    });

    if (!existingAdmin) {
      const adminUser = new User({
        name: "Admin User",
        email: "admin@luminousbluewaters.com",
        password: "admin123", // This will be hashed automatically by the pre-save hook
        role: "admin",
      });

      await adminUser.save();
      console.log("Admin user created successfully!");
    } else {
      console.log("Admin user already exists");
    }

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding admin user:", error);
  }
};

seedAdmin();
