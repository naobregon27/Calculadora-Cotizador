import pg from 'pg'
import { db } from "./config.js";

export const pool = new pg.Pool({
  // user: db.user,
  // password: db.password,
  // host: db.host,
  // port: db.port,
  // database: db.database,
  ssl: db.ssl,
  connectionString: db.dburl,


});



pool.on('connect', () => console.log('DB connected'))