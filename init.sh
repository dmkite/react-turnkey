echo Welcome to Turnkey. 

echo Let\'s get started. What\'s the name of your project?

read varProjName

echo 'const projectName = "'$varProjName'"' > project-details/index.js

echo What should we call your database?

read varDbName

varNewDbName="$(echo "${varDbName}" | tr -d '[:space:]')"

echo 'const dbName = "'$varNewDbName'"' >> project-details/index.js

echo 'module.exports = {projectName, dbName}' >> project-details/index.js

echo Creating postgreSQL database...
dropdb $varNewDbName'_dev'
createdb $varNewDbName'_dev'

cd my-app
echo Installing frontend dependencies...
npm install

cd ../backend
echo Installing backend dependencies
npm install
npm run knex migrate:rollback
npm run knex migrate:latest

echo Establishing secret
mv .env.example .env

Starting the party...

cd ../my-app 

node ../backend/app.js & npm start



