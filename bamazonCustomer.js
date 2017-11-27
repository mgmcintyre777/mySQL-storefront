const mysql = require("mysql");
const inquirer = require("inquirer");
const log = console.log;
const Table = require('cli-table');
const clear = require('clear');
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
    makePurchase();
  } else {
    log("error:", err);
  }
});

function makePurchase(){

  clear();
  execQuery(qry.getProducts
  )
  .then(result => {
    log(buildTable(result));
    return inquirer.prompt([prompts.selectItem, prompts.selectQty])
  })
  .then((answers) => execQuery(qry.getQtyById, 
      [parseInt(answers.qty), parseInt(answers.qty), parseInt(answers.id)])
  )    
  .then(result => {
    if(result.data[0][2] >= 0){
      log("Purchase Complete. Your Price is: $" + result.data[0][3]);
      execQuery(qry.reduceQtyById, 
        [result.data[0][2], result.data[0][0]]);
      return Promise.resolve(true);
    } else {
      log("Insufficent Supply");
      return Promise.resolve(false);
    }
  })
  .then(valid => 
    inquirer.prompt(prompts.buyAgain)
  )
  .then(answer =>{
    if(answer.again){
      makePurchase();
    } else {
      log("Thanks!");
      connection.end();
    }
  })
  .catch(err => {
    log("catch:", err);
    connection.end();
  })

}

const execQuery = (sqlString, args) => {

  return new Promise((resolve, reject) => {

    var fieldsArr = [];
    var dataArr = [];

    connection.query(sqlString, args)
    .on('error', err => reject(err))
    .on('fields', fields => fields.forEach(field => fieldsArr.push(field.name)))
    .on('result', row => dataArr.push(Object.keys(row).map(key => row[key])))
    .on('end', () => resolve({fields: fieldsArr, data: dataArr}))
  })
}


const buildTable = (queryData) => {

  var table = new Table({head: queryData.fields, colWidths: queryData.fields.map(f => 12)});
  queryData.data.forEach(dataRow => table.push(dataRow));
  return table.toString();

}