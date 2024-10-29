import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" py-10 px-7 bg-black ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" text-center md:text-start">
            <h2 className="text-lg text-yellow-600 font-semibold mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Our Games
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Educational Quizes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  User Stories & Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  New Features(Memory Tracker)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Accessibilty Tools
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg text-yellow-600 font-semibold mb-4">Social Media Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Youtube
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>

          <div className=" text-center md:text-start">
            <h2 className="text-lg text-yellow-600 font-semibold mb-4">Resources & Support</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Alzheimer’s association
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Alzheimer’s Society
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Early Signs and Symptoms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Memory Care Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQs on Alzheimer’s
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Emergency Helplines
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg text-yellow-600 font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className=" container mx-auto  flex flex-col md:flex-row justify-between items-center bg-slate-900">
        <div className="text-xl font-semibold hidden md:flex text-white ">
          Memo<span className="text-yellow-500 font-bold">Rise</span>
        </div>
        <div className="text-gray-400 text-sm hidden md:flex">
          <p>&copy; 2024 MemoRise PVT. LTD. All rights reserved</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#">
            <FaGithub className="h-6" />
          </a>
          <a href="#">
            <BsYoutube className="h-6" />
          </a>

          <a href="#">
            <FaLinkedin className="h-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
