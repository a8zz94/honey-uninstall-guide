import { useState } from 'react';
import Navbar from './components/Navbar';
import BrowserCard from './components/BrowserCard';

const browsers = [
  {
    name: 'Google Chrome',
    icon: '/icons/chrome.svg',
    steps: [
      "Click the three dots menu (⋮) in the top right corner of Chrome",
      "Select 'Extensions' under 'More Tools'",
      "Find 'Honey' in your list of extensions",
      "Click 'Remove' to uninstall",
      "Confirm by clicking 'Remove' in the popup dialog"
    ]
  },
  {
    name: 'Firefox',
    icon: '/icons/firefox.svg',
    steps: [
      "Click the menu button (☰) in the top right corner",
      "Select 'Add-ons and Themes'",
      "Click on 'Extensions' in the left sidebar",
      "Find Honey in your list of extensions",
      "Click the three dots (⋯) next to Honey",
      "Select 'Remove'",
      "Confirm removal when prompted"
    ]
  },
  {
    name: 'Microsoft Edge',
    icon: '/icons/edge.svg',
    steps: [
      "Click the three dots menu (⋯) in the top right corner",
      "Select 'Extensions'",
      "Click 'Manage extensions'",
      "Find Honey in the list",
      "Click 'Remove' under the extension",
      "Confirm removal in the popup dialog"
    ]
  },
  {
    name: 'Safari',
    icon: '/icons/safari.svg',
    steps: [
      "Click 'Safari' in the top menu bar",
      "Select 'Settings' (or Preferences in older versions)",
      "Click on 'Extensions'",
      "Find Honey in the left sidebar",
      "Uncheck the box next to Honey to disable it",
      "Click the Uninstall button to completely remove it"
    ]
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {browsers.map((browser) => (
            <BrowserCard
              key={browser.name}
              browser={browser.name}
              icon={browser.icon}
              steps={browser.steps}
              darkMode={darkMode} 
            />
          ))}
        </div>
      </main>
      <footer className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm pb-8">
        <p>For additional information, google Honey Scam - Uninstall.</p>
      </footer>
    </div>
  );
}

export default App;