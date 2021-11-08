# MetaliQ Solution Template
## Single Page Application

This template provides a starting point for a MetaliQ solution that produces a Single Page Application (SPA).

## Getting Started

### Make a new copy of this template and disconnect it from the repo

```shell
git clone https://github.com/metaliq/init-spa your-project-name
cd your-project-name
rm -rf .git
```

### Install necessary dependencies

```shell
npm install
```

Alternatively, check out the excellent `npm` alternative `pnpm`. It will save you time and disk space if you work on lots of different projects, as it uses a centralised package version store instead of downloading each package into each project.


### Run the default "Hello, World!" specification

```shell
metaliq run
```

See the note at the foot of this file if you get a "command not found" type message.

### Try a more advanced specification with validation rules
```shell
metaliq run contactSpec
```

### Make a production build for either spec
```shell
metaliq build
metaliq build contactSpec
```

Metaliq includes a simple server for testing production builds.

```shell
metaliq serve www
```

Your production server should publish the directory configured in the specification's publication terms - `www` by default.

### Customise and develop

Start by changing the `name` field in `package.json`, making a new README to replace this file, and pushing to a new repository.
Then follow the patterns in the samples and online to define data types, design views and create meta-specs.

See the main `metaliq` repo for more details:
https://github.com/metaliq/metaliq

## NOTE on binary paths: 

For the `metaliq` commands to run from the project's metaliq version (which is recommended over a global install) you can EITHER 

1. precede them with `npx` (or `pnpx` if you're using `pnpm`) OR ...
2. add local NPM binaries to your path. Some terminals (e.g. WebStorm) do this automatically. Others can be configured, e.g. with the `terminal.integrated.env` settings in VSCode. Otherwise, use the command:

Windows:

```shell
set PATH=./node_modules/.bin;%PATH%
```

Unix / Linux / Mac:

```shell
export PATH=./node_modules/.bin:$PATH
```

You can also explore and expand upon the scripts in `package.json` and run them with `npm run` or an IDE shortcut.
