// src/components/home/Contact.jsx
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="py-16 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left side */}
                <div>
                    <h2 className="text-5xl font-playfair font-bold mb-2">
                        <span className="text-[#8A1739]">Get</span>{" "}
                        <span className="text-[#D4AF37]">in Touch</span>
                    </h2>
                    <p className="text-[#D4AF37] font-semibold mb-4">
                        CONNECT WITH US
                    </p>

                    {/* New description text */}
                    <p className="text-black max-w-md mb-12">
                        Ready to experience the finest in hospitality? Contact us to learn
                        more about our restaurants, services, or partnership opportunities.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <FaMapMarkerAlt className="text-[#8A1739] text-2xl mt-1" />
                            <div>
                                <h4 className="text-[#D4AF37] font-semibold">Visit Us</h4>
                                <p className="text-gray-400">City, Country</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <FaEnvelope className="text-[#8A1739] text-2xl mt-1" />
                            <div>
                                <h4 className="text-[#D4AF37] font-semibold">Email Us</h4>
                                <p className="text-gray-400">info@abcventures.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <FaPhone className="text-[#8A1739] text-2xl mt-1" />
                            <div>
                                <h4 className="text-[#D4AF37] font-semibold">Call Us</h4>
                                <p className="text-gray-400">+XXX XXXX XXXX</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div>
                    <h2 className="text-lg font-playfair font-medium mb-2">
                        SEND YOUR MESSAGE
                    </h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-600 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Tyler"
                                    className="w-full px-4 py-3 bg-[#f6f2f1] focus:outline-none 
                   rounded-tl-2xl rounded-br-2xl"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@gmail.com"
                                    className="w-full px-4 py-3 bg-[#f6f2f1] focus:outline-none 
                   rounded-tl-2xl rounded-br-2xl"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-2">Subject</label>
                            <select
                                className="w-full px-4 py-3 bg-[#f6f2f1] focus:outline-none 
                 rounded-tl-2xl rounded-br-2xl"
                            >
                                <option>Restaurant Inquiry</option>
                                <option>Business Inquiry</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-600 mb-2">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Type your message here..."
                                className="w-full px-4 py-3 bg-[#f6f2f1] focus:outline-none 
                 rounded-tl-2xl rounded-br-2xl"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-[#8A1739] text-white px-6 py-3 
                 rounded-tl-2xl rounded-br-2xl hover:opacity-90"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
