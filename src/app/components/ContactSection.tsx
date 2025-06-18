"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Get In Touch
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-300 mb-2">
              Let&apos;s connect and discuss opportunities!
            </p>
            <p className="text-gray-400 text-sm">
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Email */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
              <a
                href="mailto:ericcui.career@gmail.com"
                className="w-12 h-12 bg-sky-400 hover:bg-sky-300 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <h3 className="text-base font-semibold text-white mb-1">Email</h3>
              <p className="text-gray-400 text-xs">ericcui.career@gmail.com</p>
            </div>

            {/* LinkedIn */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
              <a
                href="https://www.linkedin.com/in/eric-cui-003154233/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-sky-400 hover:bg-sky-300 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <h3 className="text-base font-semibold text-white mb-1">
                LinkedIn
              </h3>
              <p className="text-gray-400 text-xs">Connect with me</p>
            </div>

            {/* Twitter */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-sky-400 hover:bg-sky-300 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <h3 className="text-base font-semibold text-white mb-1">
                Twitter
              </h3>
              <p className="text-gray-400 text-xs">@yourhandle</p>
            </div>

            {/* Resume */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-sky-400 hover:bg-sky-300 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
              <h3 className="text-base font-semibold text-white mb-1">
                Resume
              </h3>
              <p className="text-gray-400 text-xs">Download PDF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
