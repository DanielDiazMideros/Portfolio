import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = {
  submitting: boolean;
  success: boolean;
  error: boolean;
  message: string;
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const initialFormData: FormData = {
  name: "",
  email: "",
  message: "",
};

const initialFormStatus: FormStatus = {
  submitting: false,
  success: false,
  error: false,
  message: "",
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formStatus, setFormStatus] = useState<FormStatus>(initialFormStatus);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      await emailjs.send(serviceID, templateID, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully",
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <motion.input
        type="text"
        name="name"
        placeholder="Your name..."
        required
        whileFocus={{ scale: 1.02 }}
        onChange={handleInputChange}
        value={formData.name}
      />
      <motion.input
        type="email"
        name="email"
        placeholder="Your email..."
        required
        whileFocus={{ scale: 1.02 }}
        onChange={handleInputChange}
        value={formData.email}
      />
      <motion.textarea
        name="message"
        placeholder="Your message..."
        required
        whileFocus={{ scale: 1.02 }}
        onChange={handleInputChange}
        value={formData.message}
      />

      <motion.button
        className="submit-btn"
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={formStatus.submitting}
      >
        {formStatus.submitting ? "Sending..." : "Send Message"}
      </motion.button>

      {formStatus.message && (
        <motion.div
          className={`form-status ${formStatus.success ? "success" : "error"}`}
        >
          {formStatus.message}
        </motion.div>
      )}
    </motion.form>
  );
};
