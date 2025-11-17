interface TurnstileResponse {
  success: boolean
  hostname?: string
  'error-codes': string[]
}

async function validateTurnstile(token: FormDataEntryValue | null, remoteIp: string | null): Promise<TurnstileResponse> {
  const formData = new FormData()
  if (!token || !remoteIp) {
    return { success: false, 'error-codes': ['missing-input-response'] }
  }

  formData.append('secret', process.env.TURNSTILE_SECRET ?? '')
  formData.append('response', token)
  formData.append('remoteIp', remoteIp)

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    })

    return await response.json()
  } catch {
    return { success: false, 'error-codes': ['internal-error'] }
  }
}

export default validateTurnstile
