/**
 * This module handles the dynamic generation of routes from Vue components in the views directory.
 * It uses webpack's require.context to automatically discover and process view components,
 * eliminating the need for manual route registration.
 */

// Get all view components using webpack's require.context
// This looks for files in the views directory that:
// - Are in the immediate directory (no subdirectories)
// - Start with an uppercase letter
// - End with 'View.vue'
const viewsContext = require.context('../views', false, /[A-Z]\w+View\.vue$/);

/**
 * Generates route objects from view components found in the views directory.
 * 
 * @param {Object} options - Configuration options for route generation
 * @param {boolean} options.includeComponent - If true, adds dynamic component imports to routes
 *                                           (needed for router.js, not needed for navigation-only uses)
 * @param {boolean} options.excludeHome - If true, filters out the Home route from the results
 *                                      (useful for navigation menus where Home is handled separately)
 * @returns {Array<Object>} Array of route objects with the following structure:
 *                         {
 *                           path: string (e.g., '/pain', '/anger', '/'),
 *                           name: string (e.g., 'Pain', 'Anger', 'Home'),
 *                           component?: () => Promise<Component> (only if includeComponent is true)
 *                         }
 * 
 * @example
 * // For router.js (with components)
 * const routes = generateRoutes({ includeComponent: true });
 * 
 * // For navigation menus (without components, excluding home)
 * const navRoutes = generateRoutes({ includeComponent: false, excludeHome: true });
 */
export function generateRoutes({ includeComponent = true, excludeHome = false } = {}) {
  return viewsContext.keys()
    .map(filename => {
      // Extract the view name from the filename (e.g., './PainView.vue' -> 'Pain')
      const name = filename.match(/\.\/(\w+)View\.vue$/)[1];
      
      // Convert route path to lowercase and handle home route specially
      // HomeView.vue -> '/' (root path)
      // PainView.vue -> '/pain'
      const path = name.toLowerCase() === 'home' ? '/' : `/${name.toLowerCase()}`;
      
      const route = {
        path,
        name
      };

      // Only include component imports when needed (e.g., for router.js)
      // This uses dynamic imports for better code splitting
      if (includeComponent) {
        route.component = () => import(`@/views/${filename.slice(2)}`);
      }

      return route;
    })
    // Optionally filter out the home route based on the excludeHome option
    .filter(route => !excludeHome || route.name.toLowerCase() !== 'home');
}

/**
 * Formats a route name from camelCase to Title Case with spaces.
 * This is useful for displaying route names in navigation menus.
 * 
 * @param {string} name - The route name to format
 * @returns {string} Formatted route name with spaces between words
 * 
 * @example
 * formatRouteName('PainManagement') -> 'Pain Management'
 * formatRouteName('ToDo') -> 'To Do'
 * formatRouteName('FAQ') -> 'FAQ' (preserves acronyms)
 */
export function formatRouteName(name) {
  return name.replace(/([A-Z])/g, ' $1').trim();
} 