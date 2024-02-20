# Joins
![SQL Joins](https://user-images.githubusercontent.com/36210723/168467385-257b457e-fcf3-4173-b0e4-2f5760e584db.jpg)


SQL Joins are used to combine rows from two or more tables, based on a related column between them. There are four main types of SQL joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.

## INNER JOIN

The INNER JOIN keyword selects records that have matching values in both tables.

Example:

```sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;
```

## LEFT JOIN (or LEFT OUTER JOIN)
The LEFT JOIN keyword returns all records from the left table (table1), and the matched records from the right table (table2). The result is NULL on the right side, if there is no match.

Example:
```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;
```

## RIGHT JOIN (or RIGHT OUTER JOIN)
The RIGHT JOIN keyword returns all records from the right table (table2), and the matched records from the left table (table1). The result is NULL on the left side, when there is no match.

Example:
```sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
RIGHT JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;
```

## FULL JOIN (or FULL OUTER JOIN)
The FULL JOIN keyword returns all records when there is a match in either left (table1) or right (table2) table records.

Example:
```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;
```
