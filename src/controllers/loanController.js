import {
    getAllLoans,
    getLoanById,
    createLoan,
    updateLoan,
    deleteLoan
} from "../models/loanModel.js";

// GET semua loan + filter status
export const getLoans = async (req, res) => {
    try {
        const { status } = req.query;

        const loans = await getAllLoans(status);

        res.status(200).json({
            success: true,
            data: loans
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET loan berdasarkan ID
export const getLoan = async (req, res) => {
    try {
        const { id } = req.params;

        const loan = await getLoanById(id);

        res.status(200).json({
            success: true,
            data: loan
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};

// CREATE loan
export const addLoan = async (req, res) => {
    try {
        const loan = await createLoan(req.body);

        res.status(201).json({
            success: true,
            message: "Data peminjaman berhasil ditambahkan",
            data: loan
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// UPDATE loan
export const editLoan = async (req, res) => {
    try {
        const { id } = req.params;

        const loan = await updateLoan(id, req.body);

        res.status(200).json({
            success: true,
            message: "Data peminjaman berhasil diperbarui",
            data: loan
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// DELETE loan
export const removeLoan = async (req, res) => {
    try {
        const { id } = req.params;

        const loan = await deleteLoan(id);

        res.status(200).json({
            success: true,
            message: "Data peminjaman berhasil dihapus",
            data: loan
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};