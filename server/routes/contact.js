import express from "express";
import { body } from "express-validator";
import { submitContact } from "../controllers/contactController.js";

const router = express.Router();

/**
 * POST /contact
 * Handle contact form submission with validation
 */
router.post(
  "/",
  [
    // Validation middleware
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 2, max: 100 })
      .withMessage("Name must be between 2 and 100 characters"),

    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please enter a valid email address")
      .normalizeEmail(),

    body("phone")
      .trim()
      .notEmpty()
      .withMessage("Phone number is required")
      .matches(/^\d{10}$|^(\+\d{1,3}[-.\s]?)?\d{10}$/)
      .withMessage("Please enter a valid 10-digit phone number"),

    body("message")
      .trim()
      .notEmpty()
      .withMessage("Message is required")
      .isLength({ min: 10, max: 5000 })
      .withMessage("Message must be between 10 and 5000 characters"),
  ],
  submitContact,
);

export default router;
