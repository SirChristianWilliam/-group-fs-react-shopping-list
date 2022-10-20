-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shopping_cart (
    id SERIAL PRIMARY KEY,
    item varchar(80),
    quantity INTEGER,
    unit varchar(80),
    purchased BOOLEAN DEFAULT FALSE
);
INSERT INTO shopping_cart ("item", "quantity","unit", "purchased")
VALUES ('Banana', 60, 'unknown', false), ('More Banana', 3, 'unknown', false), ('Juan', 1, 'unknown',false);
