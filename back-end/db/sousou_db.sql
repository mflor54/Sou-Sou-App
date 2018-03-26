DROP DATABASE IF EXISTS sousou;
CREATE DATABASE sousou;

\c sousou

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE,
  username VARCHAR UNIQUE,
  salt VARCHAR,
  password_digest VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR,
  amount INTEGER,
  rating VARCHAR,
  stripe_id VARCHAR UNIQUE,
  image_ BYTEA DEFAULT('https://png.icons8.com/windows/1600/owl.png')

);

CREATE TABLE groups (
  ID SERIAL PRIMARY KEY,
  group_name VARCHAR UNIQUE,
  total_members INTEGER,
  creator VARCHAR,
  pay_in_amount NUMERIC(6,2),
  pay_out_amount NUMERIC(6,2),
  description_ VARCHAR,
  frequency VARCHAR,
  date_created TIMESTAMPTZ,
  end_date TIMESTAMPTZ,
  user_id INTEGER REFERENCES users(ID)
);

CREATE TABLE payments_in (
    ID SERIAL PRIMARY KEY,
    amount NUMERIC(2),
    payment_id VARCHAR,
    group_id INTEGER REFERENCES groups(ID),
    user_id INTEGER REFERENCES users(ID)
);


CREATE TABLE payments_out (
    ID SERIAL PRIMARY KEY,
    amount NUMERIC(2),
    payment_id VARCHAR,
    group_id INTEGER REFERENCES groups(ID),
    user_id INTEGER REFERENCES users(ID)
);