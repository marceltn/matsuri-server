# matsuri-server
Matsuri cash flow - server side

## Configurations

1. do a copy of database.template.js to database.js
1. change the secret

To test:
```bash
$ docker build -t matsuri-server:dev .
$ docker run --rm --name matsuri-server -p 3000:3000 matsuri-server:dev
Access http://localhost:3000/

$ docker stop express-server
$ docker-compose up
```

After every change:
```bash
$ docker-compose up --build
```

## API

- port: 3000
- base url: /api/v1

### Users

- base url: /api/v1/users
- register: /api/v1/users/signup
- log in: /api/v1/users/signin
