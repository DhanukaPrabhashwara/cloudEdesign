// src/components/home/Contact.jsx
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="py-16 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left side */}
                <div>
                    <div>
                        <h2 className="text-5xl font-playfair font-bold mb-2">
                            <span className="text-[#8A1739]">Get</span>{" "}
                            <span className="text-[#D4AF37]">in Touch</span>
                        </h2>
                        <div className="flex justify-center pr-6">
                            <p className="text-[#D4AF37] font-semibold mb-4">
                                CONNECT WITH US
                            </p>
                        </div>
                    </div>

                    <p className="text-black max-w-md mb-12">
                        Ready to experience the finest in hospitality? Contact us to learn
                        more about our restaurants, services, or partnership opportunities.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <img
                                src="/map.png"
                                alt="Location marker"
                                className="w-7 h-7 mt-1"
                            />
                            <div>
                                <h4 className="text-[#D4AF37] font-medium">Visit Us</h4>
                                <p className="text-gray-400">City, Country</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <img
                                src="/mail.png"
                                alt="Email icon"
                                className="w-6 h-5 mt-1"
                            />
                            <div>
                                <h4 className="text-[#D4AF37] font-medium">Email Us</h4>
                                <p className="text-gray-400">info@abcventures.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <img
                                src="/phone.png"
                                alt="Phone icon"
                                className="w-6 h-6 mt-1"
                            />
                            <div>
                                <h4 className="text-[#D4AF37] font-medium">Call Us</h4>
                                <p className="text-gray-400">+XXX XXXX XXXX</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div>
                    <h2 className="text-lg font-playfair font-bold mb-2">
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
                 rounded-tl-2xl rounded-br-2xl pr-20"
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
               rounded-tl-2xl rounded-br-2xl resize-none border-none appearance-none"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-[#8A1739] text-white px-6 py-3 font-playfair rounded-tl-2xl rounded-br-2xl hover:opacity-90"
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
