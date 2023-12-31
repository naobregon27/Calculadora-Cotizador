CREATE TABLE comunas(
  id SERIAL PRIMARY KEY,
  comuna VARCHAR(255) UNIQUE,
  generacion FLOAT,
  costocombustiblepeaje FLOAT,
  valorventaenergia FLOAT
);