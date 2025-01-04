import PropTypes from 'prop-types';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Navbar({ darkMode, setDarkMode }) {
  Navbar.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired
  };

  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          How to Uninstall Honey
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-lg ${
            darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-400" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>
    </nav>
  );
}