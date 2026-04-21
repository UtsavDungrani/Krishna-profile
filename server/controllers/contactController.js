import { validationResult } from "express-validator";
import { sendContactEmail } from "../config/emailConfig.js";

/**
 * Handle contact form submission
 */
export const submitContact = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const { name, email, phone, message } = req.body;

    // Send email
    await sendContactEmail({ name, email, phone, message });

    res.status(200).json({
      success: true,
      message:
        "Your message has been sent successfully. We will contact you soon.",
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to process your request",
    });
  }
};

export default { submitContact };
