import PropTypes from 'prop-types';

export default function BrowserGuide({ browser, steps }) {
  // Add prop validation
  BrowserGuide.propTypes = {
    browser: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired
  };
  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        {browser}
      </h2>
      <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-300">
        {steps.map((step, index) => (
          <li key={index} className="pl-2">{step}</li>
        ))}
      </ol>
    </section>
  )
}