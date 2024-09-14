import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/auth',
      component: () => import('../views/Authentication.vue')
    },
    {
      path: '/bookings',
      component: () => import('../views/Bookings.vue'),
      meta: { requiresAuth: true }
    },
	{
		path: '/admin',
		component: () => import('../views/Admin.vue'),
		meta: { requiresAuth: true, role: 'admin'}
		
	},
    {
      path: '/about',
      component: () => import('../views/About.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/team',
      component: () => import('../views/Team.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/contact',
      component: () => import('../views/Contact.vue'),
      meta: { requiresAuth: true }
    },
  ]
});

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	const requiredRole = to.meta.role; // Assumes role is specified in route meta
	const userRole = localStorage.getItem('userRole'); // Assumes user's role is stored in localStorage
  
	if (requiresAuth && !localStorage.getItem('userToken')) {
	  next('/auth'); // Redirect to login if not authenticated
	} else if (requiresAuth && requiredRole && requiredRole !== userRole) {
	  next(from.path); // Redirect back if the user does not have the required role
	} else {
	  next(); // Proceed if authenticated or no specific role required
	}
  });

export default router;
