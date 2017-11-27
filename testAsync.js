const mysql = require("mysql");
const inquirer = require("inquirer");
const log = console.log;
const Table = require('cli-table');
const clear = require('clear')
const qry = require('./queries');
const prompts = require('./prompts');
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306, 
  user: "root",
  password: "Lucymong3r!",
  database: "bamazon"
});

connection.connect(err => {
  if(!err) {

 
  } 
  else {
    log("err:", err);
  }
});

const execQuery = async (sqlString, args) => {

  try{    

    return await new Promise((resolve, reject) => {

      var fieldsArr = [];
      var widthArr = [];
      var dataArr = [];

      connection
        .query(sqlString, args)
        .on('error', err => reject(err))
        .on('fields', fields => { 
          fields.forEach(field => {
            fieldsArr.push(field.name);
            widthArr.push(12);
          })
        })
        .on('result', row => dataArr.push(Object.keys(row).map(key => row[key])))
        .on('end', () => {
          var table = new Table({head: fieldsArr, colWidths: widthArr});
          dataArr.forEach(dataRow => table.push(dataRow));
          resolve(table.toString());      
      });
    })
  }
  catch(err) {
    log("err:", err);
  }
};