import { Hono } from 'hono'

const app = new Hono()

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const habits = ['gym', 'read']


app.get('/', (c) => {
  return c.html(
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body class="bg-white p-8">
        <h1 class="text-2xl font-bold mb-6">Habit Tracker</h1>
        <div class="overflow-x-auto">
          <table class="border-collapse text-sm">
            <thead>
              <tr>
                <th class="p-2 text-left font-medium text-gray-500 w-16">Week</th>
                {DAYS.map(day => (
                  <th class="p-2 text-center font-medium text-gray-700">
                    <div>{day}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 12 }).map((_, weekIndex) => (
                <tr class="border-t border-gray-200">
                  <td class="p-2 text-gray-500 text-xs align-top pt-3">{weekIndex + 1}</td>
                  {DAYS.map((_, dayIndex) => (
                    <td class="p-2 border-l border-gray-100">
                      <div class="flex flex-col gap-1">
                        {habits.map((habit, habitIndex) => {
                          const id = `${weekIndex}-${dayIndex}-${habitIndex}`
                          return (
                            <label class="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="checkbox"
                                data-key={id}
                                class="habit-checkbox w-3.5 h-3.5 cursor-pointer"
                              />
                              <span class="text-gray-700 capitalize">{habit}</span>
                            </label>
                          )
                        })}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <script dangerouslySetInnerHTML={{
          __html: `
          const checkboxes = document.querySelectorAll('.habit-checkbox');
          checkboxes.forEach(cb => {
            const key = 'habit:' + cb.dataset.key;
            cb.checked = localStorage.getItem(key) === '1';
            cb.addEventListener('change', () => {
              if (cb.checked) {
                localStorage.setItem(key, '1');
              } else {
                localStorage.removeItem(key);
              }
            });
          });
        `}} />
      </body>
    </html>
  )
})

export default app
