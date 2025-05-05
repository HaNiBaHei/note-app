interface AuthUser {
  
}

export const useAuth = () => {
    const user = useState('authUser', () => null)
    const token = useState<string | null>('authToken', () => null)
    const isAuthenticated = computed(() => !!token.value)
  
    function login(userData: any, accessToken: string) {
      user.value = userData
      token.value = accessToken
    }
  
    async function logout() {
      user.value = null
      token.value = null
      await navigateTo('/auth')
    }
  
    return {
      user,
      token,
      isAuthenticated,
      login,
      logout,
    }
  }
  