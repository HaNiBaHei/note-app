export default defineNuxtRouteMiddleware((to, from) => {
    const { isAuthenticated } = useAuth()
    if (!isAuthenticated.value && to.path !== '/auth') {
      return navigateTo('/auth')
    }
  })
  