export async function GET(req: Request) {
  const ip = req.headers.get('x-forwarded-for')
  const realIp = req.headers.get('x-real-ip')

  return Response.json({ip, realIp})
}