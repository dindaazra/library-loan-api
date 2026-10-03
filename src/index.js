import express from "express";
import dotenv from "dotenv";
import loanRoutes from "./routes/loanRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk membaca JSON
app.use(express.json());

// Halaman utama
app.get("/", (req, res) => {
    res.json({
        message: "Library Loan REST API is running"
    });
});

// Route peminjaman
app.use("/loans", loanRoutes);

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});