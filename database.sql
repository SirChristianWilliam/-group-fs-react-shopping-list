-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data


CREATE TABLE shopping_cart (
    id SERIAL PRIMARY KEY,
    item varchar(80),
    quantity INTEGER,
    unit varchar(9),
    purchased BOOLEAN DEFAULT FALSE
);
INSERT INTO shopping_cart ("item, quantity, purchased")
VALUES ("Banana", 60, false), ("More Banana", 3, false), ("Juan", 1, false);