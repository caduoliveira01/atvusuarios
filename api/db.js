import mysql from "mysql"



export const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "0M3lh0r4dc#",
    database: "mydb"

}) 