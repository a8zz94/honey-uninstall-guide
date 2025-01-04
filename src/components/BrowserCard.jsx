import PropTypes from 'prop-types';

export default function BrowserCard({ browser, icon, steps, darkMode }) {
  BrowserCard.propTypes = {
    browser: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,
    darkMode: PropTypes.bool.isRequired
  };

  return (
    <div className="w-full max-w-sm">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
        <div className="p-6 flex flex-col items-center space-y-4">
          <img 
            src={icon} 
            alt={`${browser} logo`} 
            className="w-24 h-24 object-contain"
          />
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {browser}
          </h2>
        </div>
        
        <div className="px-6 pb-6">
          <ol className={`list-decimal list-inside space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {steps.map((step, index) => (
              <li key={index} className="pl-2">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}