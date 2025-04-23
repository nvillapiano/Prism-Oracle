// Get all view components using webpack's require.context
const viewsContext = require.context('../views', false, /[A-Z]\w+View\.vue$/);

/**
 * Generates route objects from view components
 * @param {Object} options - Configuration options
 * @param {boolean} options.includeComponent - Whether to include the component in the route object
 * @param {boolean} options.excludeHome - Whether to exclude the home route
 * @returns {Array} Array of route objects
 */
export function generateRoutes({ includeComponent = true, excludeHome = false } = {}) {
  return viewsContext.keys()
    .map(filename => {
      const name = filename.match(/\.\/(\w+)View\.vue$/)[1];
      const path = name.toLowerCase() === 'home' ? '/' : `/${name.toLowerCase()}`;
      
      const route = {
        path,
        name
      };

      if (includeComponent) {
        route.component = () => import(`@/views/${filename.slice(2)}`);
      }

      return route;
    })
    .filter(route => !excludeHome || route.name.toLowerCase() !== 'home');
}

/**
 * Formats a route name from camelCase to Title Case with spaces
 * @param {string} name - The route name to format
 * @returns {string} Formatted route name
 */
export function formatRouteName(name) {
  return name.replace(/([A-Z])/g, ' $1').trim();
} 