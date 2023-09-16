# Code Katas

This repo holds various [code katas][01] I've found around the internet and
attempted.

## Installation and Setup With Node

Run:

```bash
npm i
```

In the root directory. To see a list of possible commands, run:

```bash
npm run
```

In the root directory.

## installation and Setup with Docker

To use the project via Docker:

### Clone the Repo

```bash
git clone https://github.com/opnsrce/code-katas.git
```

### Navigate to the Code Directory

```bash
cd code-katas
```

### Start the Container

```bash
docker-compose up -d
```

### Attach to a Runner Container

Once you've started the container, you can run the following command in VS Code:

```
> Dev Containers: Attach to a running container
```

Then choose `/code-katas` from the list.

[01]: https://t2informatik.de/en/smartpedia/code-kata/
