import express from 'express'
import cors from 'cors'
import { toNodeHandler, fromNodeHeaders } from 'better-auth/node'
import { server_env as env } from '@repo/env'
import { auth } from './config/auth'

const app = express()
const port = env.PORT || 5000;
app.use(
  cors({
    origin: [env.CLIENT_URL, env.ADMIN_URL,],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
)
app.all('/api/auth/*splat', toNodeHandler(auth))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/me', async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers)
  })
  return res.json(session)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});