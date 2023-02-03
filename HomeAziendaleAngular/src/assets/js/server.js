const{Client}=require('pg')
const client=new Client({
    host:'localhost',
    user:'postgres',
    password:'juventus17',
    database:'utenti'

});

client.connect();
