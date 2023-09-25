import { type Express, Router } from 'express'
import fg  from 'fast-glob'

import '../routers/home_routers'

export default (app: Express): void => {
  const router = Router()
  app.use(router)
  fg.sync ('**/src/routers/**_routers.ts')
.map(async file => (await import(`../../${file}` )).default(router))
}

