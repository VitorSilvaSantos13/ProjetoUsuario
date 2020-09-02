//Define a string de conexão com o banco de dados

//module = exporta arquivo para fora
module.exports = {
    development:{
        database:{
            host: 'localhost',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'root',
            password: 'vitor.07062001.silva'

        }


    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }    


    }



}