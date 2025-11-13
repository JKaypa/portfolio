import Email from '@/app/api/email-model'

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validate = (userData: FormData): [boolean, Email] => {
  const subject = userData.get('subject')
  const emailAddress = userData.get('email')
  const message = userData.get('message')

  if (!subject || !emailAddress || !message) {
    return [false, {} as Email]
  }

  const email: Email = {
    subject: subject.toString(),
    email: emailAddress.toString(),
    message: message.toString(),
  }

  return [isValid(email), email]
}

const isValid = (user: Email): boolean => {
  return !(!user.subject || user.subject.length < 3 || !user.email || !emailRegex.test(user.email) || !user.message || user.message.length < 10)
}

export default validate
