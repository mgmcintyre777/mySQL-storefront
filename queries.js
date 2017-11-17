const Qry = {

	getProducts:
    `SELECT
    p.id AS ID, 
    p.name AS Product, 
    p.price AS Price, 
    p.qty AS Qty, 
    d.name AS Department
    FROM products p LEFT JOIN departments d
    ON p.dept_id = d.id
    ORDER BY d.name, p.name`

}

module.exports = Qry;