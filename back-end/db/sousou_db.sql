DROP DATABASE IF EXISTS sousou;
CREATE DATABASE sousou;

\c sousou

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR,
  username VARCHAR,
  email VARCHAR(255) not null unique,
  salt VARCHAR,
  password_digest VARCHAR,
  amount INT,
  stripe_id  VARCHAR,
  image BYTEA DEFAULT('https://png.icons8.com/windows/1600/owl.png')
);

CREATE TABLE groups (
    ID SERIAL PRIMARY KEY,
    total_members INT,
    creator VARCHAR,
    total_amount NUMERIC(2),
    end_date TIMESTAMPTZ
);

CREATE TABLE payments (
    ID SERIAL PRIMARY KEY,
    amount NUMERIC(2),
    payment_id VARCHAR,
    group_id INTEGER REFERENCES groups(ID),
    user_id INTEGER REFERENCES users(ID)
);
