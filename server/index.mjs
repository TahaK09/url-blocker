import express from "express";
import mongodb from "mongodb";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Atlas connection
mongoose
  .connect(
    "mongodb+srv://tahak09:kiki1234@cluster0.z36vixp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to the DB"))
  .catch((err) => console.error("DB connection error:", err));

// SCHEMA
const urlBlockSchema = new mongoose.Schema({
  url: { type: String, unique: true },
});

const Url = mongoose.model("Url", urlBlockSchema);

// ROUTES
app.get("/", (req, res) => res.json("Server is running"));

app.post("/api/urls/add", async (req, res) => {
  const { url } = req.body;

  try {
    const existing = await Url.findOne({ url });
    if (!existing) {
      await Url.create({ url });
      return res.status(200).json({ success: true, message: "URL saved!" });
    }
    return res
      .status(200)
      .json({ success: true, message: "URL already blocked!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get("/api/urls", async (req, res) => {
  try {
    const urls = await Url.find();
    res.json(urls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/urls/delete", async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ success: false, message: "ID is required" });
  }

  try {
    await Url.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: "URL deleted!" });
  } catch (error) {
    console.error("Delete error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
