## Get started

### Prerequisites

`yarn` (to install it run `npm install -g yarn`)

### Embedded API

Made my API from 4 years ago into an npm package so I dont have to host a server for the app. [@jimjardland/nhl](https://github.com/Jimjardland/nhl)

### iOS

To get started using the iOS simulator start by installing the JavaScript
dependencies using

```
$ yarn
```

Next you need to install the [Cocoapods](https://cocoapods.org/) dependencies
for the iOS project

```
$ cd ios
$ pod setup
$ pod install
```

You should now be setup to run the app in the Simulator. Run the `ios` command
in the root of the app.

```
$ yarn ios
```

### Android

Android development requires that you have [Android Studio](https://developer.android.google.cn/studio?hl=en) and relevant build tools installed.

Start by installing JavaScript dependencies using

```
$ yarn
```

Before running the app you should start an emulator from Android Studio. Then
run the following command to start the build

```
$ yarn android
```

## Running tests

```
$ yarn test
```

## Screenshots of mocks

![Mocks](/screenshots/mock.png)
![Mocks](/screenshots/mock-goalie.png)
