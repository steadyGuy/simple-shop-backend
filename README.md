Install lts version of node.js from [node.js](https://nodejs.org/en/)
Install yarn from [yarn](https://yarnpkg.com/)
Install docker from [docker](https://www.docker.com/) and docker-compose from [docker-compose](https://docs.docker.com/compose/install/)

To start an application in development mode, run the following command:

```bash
- add .env file with the content of .env.example.
- docker-compose up -d (to start the database on port 3306)
Then you need to make sure taht the database is running (container is up and running)
and then you can run the following commands:
- yarn install
- yarn start:dev

Additionally, you can fill the database with some seeder data by running the following command:
- yarn start:seeder
```

Your app will be running at `http://localhost:3000/`
Swagger documentation will be running at `http://localhost:3000/docs/`

Production version of the app currently runs on `http://3.126.253.50 (aws ec2 instance)`