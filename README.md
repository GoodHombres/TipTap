# TipTap
## Get Started

The following software is required to be installed on your machine in order to launch the Patch Mobile App:

- [nvm](https://github.com/nvm-sh/nvm): Node Version Manager
  - This will help you manage and install versions of `node` and `npm`
- [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12): useful for doing native ios development
- [Android Studio](https://developer.android.com/studio): useful for doing native android development
- [CocoaPods](https://cocoapods.org/): iOS dependency manager

### Install npm dependencies

Sync node version via nvm

```bash
nvm use
```

Install **node_modules** dependencies

```bash
npm install
```

### Launch application

Clear watchman cache and start metro bundles

```bash
watchman watch-del-all && npx react-native start --reset-cache
```

#### Launching application in iOS simulator

```bash
npx react-native run-ios --simulator "iPhone 11 Pro Max"
```

_Note: Current xcode requires an explicit target device to launch. You can swap the device out for others, such as_ `"iPhone SE"` _or_ `"iPad Pro"`

#### Launching application on Android Device and Simulator (depending on what is available)

```bash
npx react-native run-android
```
### Troubleshooting

> Possible solutions if you are unable to launch app

Refresh node_modules:

`rm -rf node_modules && npm install`

Clear watchman and react native cache:

`watchman watch-del-all && npx react-native start --reset-cache`

Reinstall Cocoapods (iOS):

`cd ios && pod deintegrate && pod install && cd ..`

Clear Android build folder:
`cd android/app && rm -r build`