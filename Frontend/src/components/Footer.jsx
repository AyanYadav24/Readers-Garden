import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        {/* Footer Top - Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul>
              <li><a className="text-lg hover:text-pink-400 transition-colors duration-300" href="#">About Us</a></li>
              <li><a className="text-lg hover:text-pink-400 transition-colors duration-300" href="#">Contact</a></li>
              <li><a className="text-lg hover:text-pink-400 transition-colors duration-300" href="#">Jobs</a></li>
              <li><a className="text-lg hover:text-pink-400 transition-colors duration-300" href="#">Press Kit</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Support</h5>
            <ul>
              <li><a className="text-lg hover:text-pink-400 transition-colors duration-300" href="#">FAQ</a></li>
              <li><a className="text-lg hover:text-pink-400 transition-colors duration-300" href="#">Help Center</a></li>
              <li><a className="text-lg hover:text-pink-400 transition-colors duration-300" href="#">Terms & Conditions</a></li>
              <li><a className="text-lg hover:text-pink-400 transition-colors duration-300" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Resources</h5>
            <ul>
              <li><a className="text-lg hover:text-pink-400 transition-colors duration-300" href="#">Blog</a></li>
              <li><a className="text-lg hover:text-pink-400 transition-colors duration-300" href="#">Case Studies</a></li>
              <li><a className="text-lg hover:text-pink-400 transition-colors duration-300" href="#">White Papers</a></li>
              <li><a className="text-lg hover:text-pink-400 transition-colors duration-300" href="#">Webinars</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Social</h5>
            <div className="flex space-x-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
             
              
            </div>
            <p>.</p>
            <p>Made by <span className="font-bold text-2xl">Ayan</span></p>
           
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="text-center text-sm mt-12">
          <p>Copyright © 2024 - All rights reserved by Readers Garden</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
