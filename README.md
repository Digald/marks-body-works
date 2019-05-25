# Mark's Bodyworks

My favorite weight lifting programs I use all in one place and automated. Just insert your starting numbers and head to the gym knowing what weights to use.

Try it out at: https://markbodyworks.herokuapp.com/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

First you must install meteor on your system. Head to https://www.meteor.com/install if you need to install it if you don't have it already.

I use yarn as my package manager. If you don't have yarn on your system I suggest npm install it first.

```
npm install yarn -g
```

If using google chrome, it may be useful to install the react and meteor extensions to help with debugging.


### Installing

As with any project you will have to clone the repo.

```
git clone https://github.com/Digald/marks-body-works.git
```

Move into the project directory and install dependencies using yarn

```
cd marks-body-works
yarn install
```

Once all dependencies are install, run meteor and the application will start.

```
meteor
```

Open the application in your browser on http://localhost:3000/

Seeing a console message such as this is normal and means you're application is ready.
![Console logs after running meteor command](https://i.gyazo.com/5ad3156d85e1229cca17911379fa70d7.png)

## Deployment

This application is deployed to heroku. I used https://github.com/AdmitHub/meteor-buildpack-horse for my build pack and other deployment settings.

## Built With

* [Meteor](https://www.meteor.com/) - The node framework used
* [React](https://reactjs.org/docs/getting-started.html) - Front-End Library

## Authors

* **Mark Alaniz** - *Full Development*

