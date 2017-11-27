const Qry = {
    getProducts:
    "SELECT p.id AS ID, p.name AS Product, p.price AS Price, p.qty AS Qty, d.name AS Department FROM products p LEFT JOIN departments d ON p.dept_id = d.id ORDER BY d.name, p.name"
    ,getQtyById:
    "SELECT id, qty, qty - ? AS remaining, ? * price AS cost FROM products WHERE id = ?"
    ,reduceQtyById:
    "UPDATE products SET qty = ? WHERE id = ?"
}

module.exports = Qry;