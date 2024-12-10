import React from "react"
import { FaInstagram, FaEnvelope } from "react-icons/fa"

export default function ContactPage() {
  return (
    <section id="contact" className="py-20 bg-gray-900 bg-opacity-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Contact Me</h2>

        {/* Contact Message */}
        <div className="text-center mb-12">
          <p className="text-lg text-white">
            If you have any questions or would like to get in touch, feel free to contact me here!
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.instagram.com/officialkartikeytiwari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-blue-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:hi@justakartik.com"
              className="text-3xl text-white hover:text-blue-500 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
