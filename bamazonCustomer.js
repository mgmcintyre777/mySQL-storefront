const mysql = require("mysql");
const inquirer = require("inquirer");
const log = console.log;
const Table = require('cli-table');
const clear = require('clear')
const qry = require('./queries');
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306, 
  user: "root",
  password: "Lucymong3r!",
  database: "bamazon"
});

connection.connect(err => {
  if(err) log("err:", err);
});

clear();
displayQry(qry.getProducts);
connection.end();

function displayQry(sqlString){

  var fieldsArr = [];
  var widthArr = [];
  var dataArr = [];  

  connection
    .query(sqlString)
    .on('error', err => log(err))
    .on('fields', fields => { 
      fields.forEach(field=> {
        fieldsArr.push(field.name);
        widthArr.push(12);
      })
    })
    .on('result', row => dataArr.push(Object.keys(row).map(key => row[key])))
    .on('end', () => {
      var table = new Table({head: fieldsArr, colWidths: widthArr});
      dataArr.forEach(dataRow => table.push(dataRow));
      log(table.toString());      
  });
}

