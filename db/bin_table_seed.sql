create table inventory (
    id serial primary key,
    name text, 
    price float,
    image text, 
    shelf_id varchar(1),
    bin_num integer
);