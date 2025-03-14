import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getProfile, login } from '@/services/user'
import type { LoginParams, UserProfile } from '@/types'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const userProfile = ref<UserProfile>({} as UserProfile)
    const fetchToken = async (data: LoginParams) => {
      const result = await login(data)
      token.value = result.token
      console.log(token.value)
    }
    const fetchUserProfile = async () => {
      const result = await getProfile()

      userProfile.value = result
    }
    const logout = () => {
      token.value = ''
      userProfile.value = {} as UserProfile
    }
    return { token, fetchToken, fetchUserProfile, userProfile, logout }
  },
  {
    persist: true,
  },
)
