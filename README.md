# RestoFinder

This is a hobby project I made to get to know better about React Native and its enviroment. This Project
uses the API provided by [Yelp](https://yelp.com/developers).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for learning and testing purposes.

### Setting up the development environment

This project is built using React Native CLI. For setting up the development environment, I highly recommend you to follow the official documentation provided by React Native, which you can read [here](https://reactnative.dev/docs/environment-setup).

Also, you need to notice that every OS has different way to set up the development environment, so make sure that you are following the one that suits you.

### Setting up the environment variables

You need to set up a `.env` file in the root directory in order to run this project. As for now, it only requires you to list 1 `YELP_API_TOKEN` variable which will be used as an authentication token for Yelp API. You can get your own token after registering to [Yelp Developer](https://www.yelp.com/developers/v3/manage_app).

### Installing

I use `yarn` as my main package manager.

```
yarn install
```

## Running the app (android)

In order to run the android app, you need to have [Android Studio](https://developer.android.com/studio) installed, and make sure that you have at least 1 Virtual Device that is ready to use on your Android Studio. Then, you can run this command:

```
yarn android
```

## Running the tests

How to run tests in command line:

```
yarn test
```
