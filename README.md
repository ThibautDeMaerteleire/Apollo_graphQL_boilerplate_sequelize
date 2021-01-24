# A GraphQL start template

This template can be used to start with your GraphQL API!

## Getting Started

1. Install node modules via `npm install` or `yarn install`
2. Add the `.env` file to change the GraphQL port and the database configuration variables.
3. Open up GraphQL playground by surfing `http://localhost:PORT`


## Environment Variables

```
PORT=4000 (The port your server will be running on || default 4000)

TOKEN_SALT=lol (The token salt you will be using for encryption || default lol)

MYSQL_DB_CONNECTION=mysql (The type of SQL database you will be using)
MYSQL_HOST= (The hostname of your SQL database, can be an IP address or a web address)
MYSQL_PORT=3306 (The port your SQL database is running on, default for mySQL 3306)
MYSQL_DB= (The name of your SQL database)
MYSQL_USER= (The username to login at your SQL database)
MYSQL_PASSWORD= (The password to login at your SQL database)
```