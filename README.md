# Node.js & MySQL
### Matt McIntyre

## Objective
In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this week. The app will take in orders from customers and deplete stock from the store's inventory.

### Challenge #1: Customer View

* Create a MySQL Database called `bamazon`.
* Then create a Table inside of that database called `products`.
* The products table should have each of the following columns:
   * item_id (unique id for each product)
   * product_name (Name of product)
   * department_name
   * price (cost to customer)
   * stock_quantity (how much of the product is available in stores)
* Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).


**Schema:** https://github.com/mgmcintyre777/mySQL-storefront/blob/master/Storefront-Schema.sql
![Image of Database](/images/db.png)


* Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
* The app should then prompt users with two messages.
   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.


**bamazonCutomer.js:** https://github.com/mgmcintyre777/mySQL-storefront/blob/master/bamazonCustomer.js
![Image of Products Table](/images/prodTable.png)


* Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.   
* If your store _does_ have enough of the product, you should fulfill the customer's order. This means updating the SQL database to reflect the remaining quantity. Once the update goes through, show the customer the total cost of their purchase.
  * Here we purchase 5 Hats at a total cost of $100. There is sufficent Qty to complete the purchase.
  * User is asked if they would like to make another purchase.

![Image of Completed Purchase](/images/completedPurchase.png)

* If your store _does not_ have enough of the product, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
  * Here we attempt to purchase 10 more hats. Notice there are only 5 remaining after the prior purchase.
  * User is again asked if they would like to make another purchase.
  * Selecting 'no' closes the connection to the DB and exits the app.

![Image of Failed Purchase](/images/insufficentSupply.png)

# ¯\_(ツ)_/¯
:open_mouth: