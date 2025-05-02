/* @vite-ignore */
/**
 * This module handles the dynamic generation of routes from Vue components in the views directory.
 * It uses Vite's glob import to automatically discover and process view components,
 * eliminating the need for manual route registration.
 */

// Get all view components using Vite's glob import
const views = import.meta.glob('../views/[A-Z]*.vue', { eager: true });

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
  return Object.keys(views)
    .map(filename => {
      // Extract the view name from the filename (e.g., '../views/PainView.vue' -> 'Pain')
      const name = filename.match(/\/(\w+)View\.vue$/)[1];
      
      // Convert route path to lowercase and handle home route specially
      // HomeView.vue -> '/' (root path)
      // PainView.vue -> '/pain'
      const path = name.toLowerCase() === 'home' ? '/' : `/${name.toLowerCase()}`;
      
      const route = {
        path,
        name
      };

      // Only include component imports when needed (e.g., for router.js)
      if (includeComponent) {
        route.component = () => /* @vite-ignore */ import(`../views/${name}View.vue`);
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