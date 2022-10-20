-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data


CREATE TABLE shopping_cart (
    id SERIAL PRIMARY KEY,
    item varchar(80),
    quantity INTEGER,
    unit varchar(9),
    purchased BOOLEAN DEFAULT FALSE
);

INSERT INTO shopping_cart ("item", "quantity", "unit", "purchased")
VALUES ('bananas', 60, 'lbs', false), ('More Banana', 3, 'lbs', false), ('Juan', 1, 'unknown', false);

SELECT * FROM  shopping_cart;
