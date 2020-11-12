import { createServer } from "miragejs"
import Upcoming from './Data/upcomingmovies.json';

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api"

      this.get("/", (schema) => {
        return Upcoming;
      })
    },
  })

  return server
}