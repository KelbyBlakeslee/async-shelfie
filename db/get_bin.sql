select * from inventory where shelf_id = $1 and bin_num = $2
order by bin_num asc;