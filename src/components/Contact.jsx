import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name.trim() ||
      !formData.email.includes("@") ||
      !formData.message.trim()
    ) {
      setPopup({
        show: true,
        type: "error",
        message: "Please fill all fields correctly ❌",
      });
      return;
    }

    // Success
    setPopup({
      show: true,
      type: "success",
      message: "Submission is done! I will get back to you soon. ✅",
    });

    // Clear form
    setFormData({ name: "", email: "", message: "" });

    // Auto hide popup
    setTimeout(() => {
      setPopup({ show: false });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative bg-gray-950 text-white py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-teal-500/5 blur-3xl" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-teal-400 tracking-widest uppercase text-sm mb-3">
            Get in touch
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            Let’s build{" "}
            <span className="text-teal-400">something great.</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Have a project in mind? Send me a message and let’s discuss how we
            can work together.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10
                       rounded-2xl p-8 shadow-lg"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2 w-full bg-black/40 border border-white/10
                             rounded-lg px-4 py-3 outline-none
                             focus:border-teal-400 transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full bg-black/40 border border-white/10
                             rounded-lg px-4 py-3 outline-none
                             focus:border-teal-400 transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hey, I really want to hire you!"
                  className="mt-2 w-full bg-black/40 border border-white/10
                             rounded-lg px-4 py-3 outline-none resize-none
                             focus:border-teal-400 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600
                           text-black font-semibold py-3 rounded-lg
                           flex items-center justify-center gap-2
                           transition"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10
                            rounded-2xl p-6 space-y-5">
              <h3 className="text-lg font-semibold">Contact Information</h3>

              <div className="flex items-center gap-4">
                <Mail className="text-teal-400" size={18} />
                <p className="text-gray-300">udithindrachapa26@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-teal-400" size={18} />
                <p className="text-gray-300">+94 77 433 0817</p>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-teal-400" size={18} />
                <p className="text-gray-300">Sri Lanka</p>
              </div>
            </div>
            {/* Availability */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10
                            rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                <h3 className="font-semibold">Currently Available</h3>
              </div>

              <p className="text-gray-400 text-sm">
                I’m open to new UI/UX design, and web projects.
                Let’s build something impactful together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popup Toast */}
      {popup.show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-lg
            ${popup.type === "success"
              ? "bg-teal-500 text-black"
              : "bg-red-500 text-white"}`}
        >
          {popup.message}
        </motion.div>
      )}
    </section>
  );
}
