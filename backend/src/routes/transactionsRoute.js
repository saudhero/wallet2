import express from "express";
import {
  createTransaction,
  deleteTransaction,
  getSummaryByUserId,
  getTransactionsByUserId,
} from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/summary/:userId", getSummaryByUserId);
router.post("/", createTransaction);
router.delete("/:id", deleteTransaction);
router.get("/:userId", getTransactionsByUserId);


export default router;
