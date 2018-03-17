DROP DATABASE IF EXISTS SouSou;
CREATE DATABASE SouSou;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  namez VARCHAR,
  email VARCHAR,
  salt VARCHAR,
  password_digest VARCHAR,
  group_id INT REFERENCES groups(ID)
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