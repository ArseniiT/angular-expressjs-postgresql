CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100),
    email VARCHAR(100) NOT NULL,
    age INT
);

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES person(id)
);