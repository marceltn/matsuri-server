# matsuri-server
Matsuri cash flow - server side

## Configurations

1. do a copy of database.template.js to database.js
1. inside database.js file
    1. change the secret
    1. configure the mongodb endpoint

To test:
```bash
$ docker build -t matsuri-server:dev .
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

- base url: /users
- register: /users/signup
- log in: /users/signin

### Items

- base url: /items
