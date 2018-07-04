select * from inventory where shelf_id = $1
order by bin_num asc;