DROP DATABASE IF EXISTS sousou;
CREATE DATABASE sousou;

\c sousou

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    email VARCHAR UNIQUE,
    salt VARCHAR,
    password_digest VARCHAR,
    group_id INTEGER REFERENCES groups(id),
    first_name VARCHAR,
    last_name VARCHAR,
    amount INTEGER,
    rating VARCHAR,
    stripe_id VARCHAR UNIQUE,
    image_ BYTEA DEFAULT('https://png.icons8.com/windows/1600/owl.png'),
    username VARCHAR UNIQUE
);

CREATE TABLE groups (
    ID SERIAL PRIMARY KEY,
    total_members INTEGER,
    creator VARCHAR,
    pay_in_amount NUMERIC (6, 2),
    pay_out_amount NUMERIC (6, 2),
    total_amount INTEGER,
    date_created TIMESTAMPTZ,
    frequency VARCHAR,
    payout VARCHAR,
    group_name VARCHAR UNIQUE,
    rating VARCHAR,
    description_ VARCHAR
);

CREATE TABLE paymentsIn (
    ID SERIAL PRIMARY KEY,
    payment_id VARCHAR UNIQUE,
    amount INTEGER,
    user_id VARCHAR REFERENCES users(stripe_id),
    groupd_id INTEGER REFERENCES users(id)
);

CREATE TABLE paymentsOut (
    ID SERIAL PRIMARY KEY,
    payment_id VARCHAR UNIQUE,
    amount INTEGER,
    user_id VARCHAR REFERENCES users(stripe_id),
    group_id INTEGER REFERENCES users(id)
);