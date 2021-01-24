/**
 * A GraphQL template
 * More Information: https://graphql.org/
 */

/**
 * Importing some libraries
 */

const  { ApolloServer } = require('apollo-server');
const dotenv = (require('dotenv')).config();
const { Sequelize } = require('sequelize');
const sequelize = require('./dbconnection');
const jwt = require('jsonwebtoken');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');


/**
 * MySQL Database
 */

const openMySQLDB = async () => {
  return new Promise((resolve,reject) => {
    try {
      sequelize.authenticate().then(() => resolve());
      console.log('Connection has been established successfully.');
    } catch (error) {
      reject('Unable to connect to the database:', error);
    }
  });
};


/**
 * Apollo Server
 */

const startServer = () => {
  return new Promise((resolve, reject) => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      introspection: true,
      playground: true,
      context: (({ req }) => {
        try {
          const authHeader = req.headers['authorization'];
          const token = authHeader && authHeader.split(' ')[1];
          const decodedToken = jwt.verify(token, process.env.TOKEN_SALT);
          return decodedToken && decodedToken.userId ? { userId: decodedToken.userId, ...decodedToken } : { userId: '' }
        } catch {
          return { userId: '' }
        }
      }),
    });

    server
      .listen({ port: process.env.PORT || 4000 })
      .then(({ url }) => { resolve(url); });
  });
}

/**
 * Start the server
 */

openMySQLDB()
  .then(startServer)
  .then((url) => console.log(`Server Started on ${url}`))
  .catch(e => console.error(e));