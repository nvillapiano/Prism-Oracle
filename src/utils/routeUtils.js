const views = import.meta.glob('../views/[A-Z]*.vue');

export function generateRoutes({ includeComponent = true, excludeHome = false } = {}) {
  return Object.keys(views)
    .map(filename => {
      const name = filename.match(/\/(\w+)View\.vue$/)[1];
      const path = name.toLowerCase() === 'home' ? '/' : `/${name.toLowerCase()}`;
      
      const route = {
        path,
        name
      };

      if (includeComponent) {
        route.component = () => /* @vite-ignore */ import(`../views/${name}View.vue`);
      }

      return route;
    })
    .filter(route => !excludeHome || route.name.toLowerCase() !== 'home');
}

export function formatRouteName(name) {
  return name.replace(/([A-Z])/g, ' $1').trim();
} 