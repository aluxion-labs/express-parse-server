# :zap: express-parse-server :zap:
A smart express.js application based on the official parse-server documentaion ready to be lauched as standalone server or mounted in Docker.

Install dependencies 
```sh
npm install
```

## Standalone
You need to specify a config.yml file in the root of the project, check config.example.yml.

#### Run your node js app
```sh
node server.js
```

## In Docker
```sh
You need to specify a config.yml file in your host machine, then mount it when launching the container, check config.example.yml.
```
#### Build your image
```sh
docker build -t <username>/express-parse-server .
```
#### Remove your image
```sh
docker rmi [-f] <IMAGE ID>
```
#### Run your image (remove the daemon option in order to check for launching errors -d)
```sh
docker run -d -p <port_out>:33033 -v <path/to/your/dashboard-config.yml>:/usr/src/app/dashboard-config.yml -v <path/to/your/server-config.yml>:/usr/src/app/server-config.yml <username>/express-parse-server
```

#### Example

[example dashboard-config.yml](https://github.com/aluxion-labs/express-parse-server/blob/master/dashboard-config.example.yml)

[example server-config.yml](https://github.com/aluxion-labs/express-parse-server/blob/master/server-config.example.yml)

```sh
docker run -d -p 33034:33033 -v /home/aluxion/docker/dashboard-config.yml:/usr/src/app/dashboard-config.yml 
                             -v /home/aluxion/docker/server-config.yml:/usr/src/app/server-config.yml 
                             -v /home/aluxion/docker/apn_dev.p12:/usr/src/app/apn_dev.p12 
                             -v /home/aluxion/docker/apn_pro.p12:/usr/src/app/apn_pro.p12  
                             aluxion-labs/express-parse-server
                             ce596f51829df82b6fbe12514b6d5269e8019eedb00cc60d1176d4e54f62a653
```
