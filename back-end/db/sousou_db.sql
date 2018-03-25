DROP DATABASE IF EXISTS sousou;
CREATE DATABASE sousou;

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
    image BYTEA DEFAULT('https://png.icons8.com/windows/1600/owl.png'),
    username VARCHAR UNIQUE
);

CREATE TABLE groups (
    ID SERIAL PRIMARY KEY,
    total_members INTEGER,
    creator VARCHAR,
    total_amount INTEGER,
    date_created TIMESTAMPTZ,
    frequency VARCHAR,
    payout VARCHAR,
    group_name VARCHAR UNIQUE,
    rating VARCHAR,
    description VARCHAR
);

CREATE TABLE paymentsIn (
    ID SERIAL PRIMARY KEY,
    payment_id VARCHAR UNIQUE,
    amount INTEGER,
    user_id VARCHAR REFERENCES users(id)
);

CREATE TABLE paymentsOut (
    ID SERIAL PRIMARY KEY,
    payment_id VARCHAR UNIQUE,
    amount INTEGER,
    user_id VARCHAR REFERENCES users(id)
);