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
  amount NUMERIC NOT NULL DEFAULT 0,
  rating VARCHAR NOT NULL DEFAULT('Bronze'),
  stripe_id VARCHAR UNIQUE,
  memeber_date text NOT NULL DEFAULT TO_CHAR(CURRENT_TIMESTAMP,'YYYYMM'),
  image_ BYTEA DEFAULT('https://png.icons8.com/windows/1600/owl.png')

);

CREATE TABLE groups (
  ID SERIAL PRIMARY KEY,
  group_name VARCHAR UNIQUE,
  total_members INTEGER,
  creator INTEGER REFERENCES users(ID),
  pay_in_amount NUMERIC(6,2),
  pay_out_amount NUMERIC(6,2),
  description_ TEXT,
  frequency VARCHAR,
  date_created TIMESTAMPTZ,
  end_date TIMESTAMPTZ,
  user_id INTEGER REFERENCES users(ID)
);

-- This table creates a many to many relationship between groups and users

CREATE TABLE users_groups (
  user_id INTEGER REFERENCES users(ID),
  group_id INTEGER REFERENCES groups(ID)
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

CREATE TABLE threads (
    ID SERIAL PRIMARY KEY,
    groupID INTEGER REFERENCES groups(ID),
    date_created TIMESTAMPTZ
);

CREATE TABLE messages (
    ID SERIAL PRIMARY KEY,
    authorID INTEGER REFERENCES users(ID),
    threadID INTEGER REFERENCES threads(ID), 
    user_message TEXT, 
    date_created TIMESTAMPTZ
);
