# MetaliQ Solution Template
## Single Page Application

This template provides a starting point for a MetaliQ solution that produces a Single Page Application (SPA).

* Make a new copy of this template and disconnect it from the repo

```shell
git clone https://github.com/metaliq/init-spa your-project-name
cd your-project-name
rm -rf .git
```

* Install necessary dependencies

```shell
npm install
```

* Run the default "Hello, World!" specification

```shell
metaliq run
```

* Try a more advanced specification with validation rules
```shell
metaliq run contactSpec
```

* Make a production build for either spec
```shell
metaliq build
metaliq build contactSpec
```

* Customise and develop

Start by changing the `name` field in `package.json` and pushing to a new repository. 
Then follow the patterns in the samples and online to define data types, design views and create system specifications.
