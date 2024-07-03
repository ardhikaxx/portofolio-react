import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out p-2" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 fill-current" />
              </a>
            </li>
            <li className="ml-4">
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out p-2" aria-label="Github">
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5 fill-current" />
              </a>
            </li>
            <li className="ml-4">
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out p-2" aria-label="Facebook">
                <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 fill-current"/>
              </a>
            </li>
          </ul>

          <div className="text-sm text-gray-600 mr-4">&copy; ARDHIKA. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}