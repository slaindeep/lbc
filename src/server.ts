import express from "express";
import dotenv from "dotenv";
import appointmentsRouter from "./routes/appointments";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CORS_ORIGIN
        : "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api/appointments", appointmentsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
