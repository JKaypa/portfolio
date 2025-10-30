import redis from '../redis_db'

const TIME = 60
const MAX_REQUESTS = 2

const rateLimit = async (ip: string | null): Promise<boolean> => {
  if(!ip){
    return false
  }

  const requests = await redis.incr(ip)

  if(requests === 1){
    await redis.expire(ip, TIME)
  }

  return requests > MAX_REQUESTS
}

export default rateLimit