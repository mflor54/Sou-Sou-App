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
  pay_in_amount INTEGER,
  pay_out_amount INTEGER,
  description_ TEXT,
  frequency VARCHAR,
  date_created TIMESTAMPTZ,
  end_date TIMESTAMPTZ
  -- user_id INTEGER REFERENCES users(ID)
);

-- This table creates a many to many relationship between groups and users

CREATE TABLE users_groups (
  user_id INTEGER REFERENCES users(ID),
  group_id INTEGER REFERENCES groups(ID)
);

CREATE TABLE payments_in (
    ID SERIAL PRIMARY KEY,
    amount INTEGER,
    payment_id VARCHAR,
    group_id INTEGER REFERENCES groups(ID),
    user_id INTEGER REFERENCES users(ID)
);


CREATE TABLE payments_out (
    ID SERIAL PRIMARY KEY,
    amount INTEGER,
    payment_id VARCHAR,
    group_id INTEGER REFERENCES groups(ID),
    user_id INTEGER REFERENCES users(ID)
);

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

INSERT INTO users (email, username, first_name, last_name) VALUES ('randomtest@gmail.com', 'randomUser', 'John', 'Doe');

INSERT INTO groups (group_name, total_members, pay_in_amount, pay_out_amount, frequency) VALUES ('Money savers', 5, 100, 2000, weekly);