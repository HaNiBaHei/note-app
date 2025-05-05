interface AuthUser {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  accessToken: string,
  refreshToken: string
}

export const useAuth = () => {
  const user = useState<AuthUser | null>('authUser', () => null)
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
  