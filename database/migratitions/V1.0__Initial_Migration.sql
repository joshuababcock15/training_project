CREATE TYPE package_type AS ENUM ('Ebook', 'Box', 'Kitchen-sink');

CREATE TABLE IF NOT EXISTS public.users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE,
  deleted_at TIMESTAMP WITH TIME ZONE,
  packageBought package_type NOT NULL
);

-- CREATE TABLE IF NOT EXISTS public.publishers (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   created_at TIMESTAMP WITH TIME ZONE,
--   updated_at TIMESTAMP WITH TIME ZONE,
--   deleted_at TIMESTAMP WITH TIME ZONE
-- );