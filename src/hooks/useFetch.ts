import { ref, watchEffect, toValue } from 'vue'

export function useFetch(url) {
  const data = ref('')
  const error = ref('')

  watchEffect(async () => {
    const urlValue = toValue(url)

    try {
      const res = await fetch(urlValue)
      data.value = await res.json()
    } catch (e) {
      error.value = 'error'
    }
  })

  return { data, error }
}
