-- find the top 10 products that have been ordered the most
select p.productName, sum(od.quantityOrdered) as quantityOrdered from products p
join orderdetails od on p.productCode = od.productCode
group by p.productName
order by sum(od.quantityOrdered) desc
limit 10;

-- display number of units sold for all products
select p.productName, sum(od.quantityOrdered) as quantityOrdered from products p
join orderdetails od on p.productCode = od.productCode
group by p.productName
order by sum(od.quantityOrdered) desc;
