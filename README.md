# Syl-Studio - "IonicBaseProject" Mobile Ionic Project

### Probably already installed :
```
npm install -g bower
npm install -g cordova
npm install -g ionic
```

### Install Gulp too :
```
npm install -g gulp
```

### So do :
```
npm install
```


### Install Platforms :
```
ionic platform add ios
ionic platform add android
```

### Build the Project
```
ionic build ios
ionic build android
```
The project is built in the conference/platforms/android folder (for Android)

### To build and run the application on an Android device connected to your computer using a USB cable
```
ionic run android
```

### To build and run the application in emulator:
```
ionic emulate android
```

### To check in a browser :
```
ionic serve
```

To check in a browser with mobile preview :
```
ionic serve --lab
```


### Can be useful :
```
ionic state restore
```
Which will chew through package.json and install platforms and plugins as needed.


To remove a cordova plugin :
```
cordova plugin remove name-of-plugin
```
