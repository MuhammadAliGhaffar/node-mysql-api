const { request, response } = require('express')
const express = require('express')
const connection = require('./config')
const app = express()

app.use(express.json())

app.get("/users", (request, response) => {
      // response.send("Route done")
      connection.query("select * from tbl_users", (error, result) => {
            if (error) {
                  response.send("Error :", error)
            } else {
                  response.send(result)
            }
      })
})

app.post("/users", (request, response) => {
      const data = request.body
      connection.query("INSERT INTO tbl_users SET?", data, (error, result, fields) => {
            if (error) {
                  response.send("Error :", error)
            } else {
                  response.send(result)
            }
      })
})

app.put("/:id",(request,response)=>{
      const data = [request.body.name,request.params.id]
      connection.query("UPDATE tbl_users SET name =? WHERE id = ?",data,(error, result, fields)=>{
            if (error) {
                  response.send("Error :", error)
            } else {
                  response.send(result)
            }
      })
})

app.delete("/:id",(request,response)=>{
      const data = [request.body.name,request.params.id]
      connection.query("DELETE FROM tbl_users WHERE id = "+request.params.id,data,(error, result, fields)=>{
            if (error) {
                  response.send("Error :", error)
            } else {
                  response.send(result)
            }
      })
})

app.listen("5000")