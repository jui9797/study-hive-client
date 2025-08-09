import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Footer = () => {
  const { isDarkMode } = useContext(AuthContext);

  return (
    <footer
      className={`p-8 ${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-[#0AB99D] text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Navigation Links and Description */}
        <div className="flex flex-col items-center md:items-start space-y-3 md:space-y-6">
          <nav className="flex space-x-8 text-lg font-medium">
            <a
              href="/contact"
              className="hover:underline hover:text-[#0AB99D] transition"
            >
              Contact
            </a>
            <a
              href="/assignments"
              className="hover:underline hover:text-[#0AB99D] transition"
            >
              Assignments
            </a>
            <a
              href="/"
              className="hover:underline hover:text-[#0AB99D] transition"
            >
              Blogs
            </a>
          </nav>
          <p className="max-w-xs text-center md:text-left text-sm text-gray-200">
            StudyHive is your go-to platform for collaborative learning,
            insightful blogs, and keeping up with assignments effortlessly.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.facebook.com/TwitterInc/"
            aria-label="Facebook"
            className="hover:text-[#0AB99D] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          <a
            href="https://www.youtube.com/"
            aria-label="YouTube"
            className="hover:text-[#0AB99D] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>

          <a
            href="https://www.google.com/search?q=fb"
            aria-label="Facebook Search"
            className="hover:text-[#0AB99D] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-200 italic">
        © {new Date().getFullYear()} All rights reserved by{" "}
        <span
          className={`font-bold text-lg ${
            isDarkMode ? "text-[#0AB99D]" : "text-gray-800"
          }`}
        >
          Study<span>Hive</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
