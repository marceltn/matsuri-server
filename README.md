# matsuri-server
Matsuri cash flow - server side

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

