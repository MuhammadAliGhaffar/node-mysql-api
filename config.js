const mysql = require("mysql")
const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "test"
})

connection.connect((err) => {
      if (err) {
            console.log("Error while  creating or running server :",err)
      } else {
            console.log("Connected Server is running")
      }
})

module.exports = connection