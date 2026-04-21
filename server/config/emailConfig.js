import nodemailer from "nodemailer";

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

/**
 * Send contact form email
 * @param {Object} data - Contact form data
 * @returns {Promise}
 */
export const sendContactEmail = async (data) => {
  const { name, email, phone, message } = data;

  // Email to company
  const companyEmailContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    <hr>
    <p><small>This is an automated email from your website contact form.</small></p>
  `;

  // Email to customer (confirmation)
  const customerEmailContent = `
    <h2>Thank You for Contacting Krishna Profile</h2>
    <p>Hi ${escapeHtml(name)},</p>
    <p>We have received your message and will get back to you as soon as possible.</p>
    <p><strong>Your Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    <hr>
    <p><strong>Contact Information:</strong></p>
    <p>Phone: +91-9876-543-210</p>
    <p>Email: info@krishnapolindustries.com</p>
    <p>Thank you,<br>Krishna Profile Team</p>
  `;

  try {
    // Send email to company
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: companyEmailContent,
      replyTo: email,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "We received your message - Krishna Profile",
      html: customerEmailContent,
    });

    return { success: true, message: "Emails sent successfully" };
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send email: " + error.message);
  }
};

// Helper function to escape HTML
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export default { sendContactEmail };
