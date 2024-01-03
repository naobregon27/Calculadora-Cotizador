export const db = {
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "Mateo123",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_DATABASE || "comuna",
  dburl:
    process.env.DATABASE_URL ||
    "postgres://prueba_bikz_user:icgiNFBOWhh97UjlxG37DOZ1fOY3Oh93@dpg-cmagrtn109ks73fe8hdg-a.oregon-postgres.render.com/prueba_bikz",
  ssl: true,
};

export const port = process.env.PORT || 4000;