import { Hono } from 'hono'

const app = new Hono()

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const habits = ["gym", "read"]

app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body>
        <div class="w-[90%] m-auto">
          <h1 class="text-3xl font-bold underline">
            Habit Tracker
          </h1>
          <div id="day-week-toggle" class=""></div>
          <div class="">
            <table>
              <tr class="">
                <th></th>
                {DAYS.map(day => <th>{day}</th>)}
              </tr>
              {Array.from({ length: 12 }, (_, i) => (
                <tr>
                  <td>{i + 1}</td>
                  {DAYS.map(_ => {
                    habits.map(_ => (
                      <input type="checkbox" />
                    ))
                  })}
                </tr>
              ))}
            </table>
          </div>
        </div>
      </body>
    </html>
  )
})

export default app
