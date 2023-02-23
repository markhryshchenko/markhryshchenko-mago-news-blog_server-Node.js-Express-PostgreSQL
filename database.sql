create TABLE labels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
   
);
create TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    label_id INTEGER,
    FOREIGN KEY (label_id) REFERENCES labels(id)
);
