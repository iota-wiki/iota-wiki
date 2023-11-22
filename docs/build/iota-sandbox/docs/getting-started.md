import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started With the IOTA Sandbox

You can use this guide to [install](#install-the-iota-sandbox-using-docker)
and [run](#run) the [IOTA Sandbox](welcome.md).
It includes everything you need to develop your own IOTA dApps, plugins, and more.

## Install the IOTA Sandbox using Docker

### Requirements

1. A recent release of [Docker](https://www.docker.com/). Avoid using the Docker version shipped with your OS since these are mostly out of date. You can find installation instructions in the [official Docker documentation](https://docs.docker.com/).

2. [Git](https://git-scm.com/).

### Clone the Repository

:::note 

The commands assume you are using Linux.

:::

Once you have completed all the installation requirements, 
you can clone the repo and navigate to the `sandbox` folder by running the following command:

```sh
git clone https://github.com/iotaledger/iota-sandbox && cd iota-sandbox/sandbox
```

### Prepare

:::note

The commands assume you are using Linux.

:::

#### Set Up Your Environment

TODO - I didn't need any extra setup steps to run the sandbox, am I missing something? Or can wedelete this?

#### Bootstrap

If you haven't run the IOTA Sandbox before, you need to bootstrap it. To do that, just run the following command:

```sh
sudo ./bootstrap.sh
```

## Run

### Start the IOTA Sandbox

You can start the IOTA Sandbox by running:

<Tabs groupId="profile" queryString>
<TabItem value="default" label="Default">

```sh
docker compose up -d
```

</TabItem>
<TabItem value="wasp" label="Wasp">

```sh
docker compose --profile=wasp up -d
```

</TabItem>
</Tabs>

- `-d` Instructs Docker to start the containers in the background.
- `-d` Instructs Docker to start the containers in the background.


:::tip Available endpoints

Once the container is up and running, you can access the node using the
available [endpoints](references/endpoints.md).

:::

### Stop the IOTA Sandbox

You can stop the IOTA Sandbox by running the following commands:

```sh
docker compose down
```
