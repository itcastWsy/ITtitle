import { ref } from 'vue'
import { defineStore } from 'pinia'
import { login } from '@/services/user'
import type { LoginParams } from '@/types'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const fetchToken = async (data: LoginParams) => {
      const result = await login(data)
      token.value = result.data.token
      console.log(token.value)
    }
    return { token, fetchToken }
  },
  {
    persist: true,
  },
)
