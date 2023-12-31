export const db = {
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "Mateo123",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_DATABASE || "comuna",
  dburl: process.env.DATABASE_URL || "postgres://postgress:Qr2BDKxGDdhlQsF6AX0ktXDOXhAfO3sh@dpg-cm8um06d3nmc73cju7vg-a/comuna_qff2",
}

export const port = process.env.PORT || 4000;