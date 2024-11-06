INSERT INTO public.users (name, lastname, email, password, created_at, updated_at, deleted_at, packageBought)
VALUES
 ('John', 'Doe', 'JBABS@GMAIL.COM', '123456', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'Ebook'),
 ('Jack', 'Doe', 'john.doe@example.com', 'hashed_password_1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'Box'),
 ('Bob', 'Smith', 'jane.smith@example.com', 'hashed_password_2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'Kitchen-sink'),
 ('Alice', 'Johnson', 'alice.johnson@example.com', 'hashed_password_3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'Ebook'),
 ('Bob', 'Williams', 'bob.williams@example.com', 'hashed_password_4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'Box'),
 ('Emma', 'Brown', 'emma.brown@example.com', 'hashed_password_5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 'Kitchen-sink')