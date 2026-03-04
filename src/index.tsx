import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <div>Hello</div>
  )
})

export default app
