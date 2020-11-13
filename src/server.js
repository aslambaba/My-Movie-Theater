import { createServer } from "miragejs"
import Upcoming from './Data/upcomingmovies.json';
import Toprated from './Data/toprated.json';
import MyMovies from './Data/mymovies.json';

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api"

      this.get("/", (schema) => {
        return Upcoming;
      });
      this.get("/top-rated", (schema) => {
        return Toprated;
      });
      this.get("/upcoming", (schema) => {
        return Upcoming;
      });
      this.get("/my-movies", (schema) => {
        return MyMovies;
      });
    },
  })

  return server
}