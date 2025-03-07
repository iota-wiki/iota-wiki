---
description: Introducing the HORNET nodes configuration files and their settings.
image: /img/logo/HORNET_logo.png
tags:
  - IOTA Node
  - HORNET Node
  - Configuration
  - REST API
  - Dashboard
  - how to
---

# Post-installation

Once you have deployed HORNET, you can set all the parameters using configuration files.

## Configuration Files

The most important configuration files are:

- `config.json` - Includes all configuration flags and their values.
- `peering.json` - Includes all connection details to your static peers (neighbors).

## Default Configuration

There is a default configuration file (`config_defaults.json`) available that you can use to see the default parameters for Hornet and use as a reference when customizing your `config.json`

Please see the [`config.json`](../references/configuration.md) and [`peering.json`](../references/peering.md) articles for more information about the contents of the configuration files.

## Configuring HTTP REST API

One of the tasks the the node is responsible for is exposing [API](../references/api_reference.md) to clients that would like to interact with the IOTA network, such as crypto wallets, exchanges, IoT devices, etc.

By default, HORNET will expose the [Core REST API v2](../references/api_reference.md) on port `14265`.
If you use the [recommended setup](using_docker.md) the API will be exposed on the default HTTPS port (`443`) and secured using an SSL certificate.

Since offering the HTTP REST API to the public can consume your node's resources, there are options to restrict which routes can be called and other request limitations:

### Routes

- `restAPI.publicRoutes` defines which routes can be called without JWT authorization.
- `restAPI.protectedRoutes` defines which routes require JWT authorization.
- All other routes will not be exposed.

### JWT Auth

To generate a JWT-token to be used with the protected routes you can run:

```sh
./hornet tool jwt-api --databasePath <path to your p2pstore> --salt <restAPI.jwtAuth.salt value from your config.json>
```

If you are running our [recommended setup](using_docker.md) then see [here](using_docker.md#tools).

### Reverse Proxy

We recommend that you provide your HTTP REST API behind a reverse proxy, such as [HAProxy](http://www.haproxy.org/), [Traefik](https://traefik.io/), [Nginx](https://www.nginx.com/), or [Apache](https://www.apache.org/) configured with TLS.
When using our [recommended setup](using_docker.md) this is done for you automatically.

### Other

You can find all the HTTP REST API related options in the [`config.json` reference](../references/configuration.md#restapi)

## Update to 2.x.x

You can update HORNET to the latest stable version with no breaking updates by running the following command:

```sh
docker compose down && docker compose pull && docker compose up -d
```
