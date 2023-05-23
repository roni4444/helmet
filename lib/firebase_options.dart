// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyD1cT9o-a0UnZEupqulgYgSOgeXVbnzPW8',
    appId: '1:1057573197918:web:275845456e045d937bfccf',
    messagingSenderId: '1057573197918',
    projectId: 'smart-helmet-70b94',
    authDomain: 'smart-helmet-70b94.firebaseapp.com',
    databaseURL: 'https://smart-helmet-70b94-default-rtdb.firebaseio.com',
    storageBucket: 'smart-helmet-70b94.appspot.com',
    measurementId: 'G-1YMTYTJK40',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyBa04fkvZcnpEoB5k9h28efrxa877XodOg',
    appId: '1:1057573197918:android:a94380fb72cf474b7bfccf',
    messagingSenderId: '1057573197918',
    projectId: 'smart-helmet-70b94',
    databaseURL: 'https://smart-helmet-70b94-default-rtdb.firebaseio.com',
    storageBucket: 'smart-helmet-70b94.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyCKzRjaFK5Ef8EdH3HUCfQq5G9UK6zqQBk',
    appId: '1:1057573197918:ios:0b40fc28c1a5bcf47bfccf',
    messagingSenderId: '1057573197918',
    projectId: 'smart-helmet-70b94',
    databaseURL: 'https://smart-helmet-70b94-default-rtdb.firebaseio.com',
    storageBucket: 'smart-helmet-70b94.appspot.com',
    iosClientId: '1057573197918-nrtv2hv4fg57fv802iljlcdv6jphksm6.apps.googleusercontent.com',
    iosBundleId: 'com.example.helmet',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyCKzRjaFK5Ef8EdH3HUCfQq5G9UK6zqQBk',
    appId: '1:1057573197918:ios:0b40fc28c1a5bcf47bfccf',
    messagingSenderId: '1057573197918',
    projectId: 'smart-helmet-70b94',
    databaseURL: 'https://smart-helmet-70b94-default-rtdb.firebaseio.com',
    storageBucket: 'smart-helmet-70b94.appspot.com',
    iosClientId: '1057573197918-nrtv2hv4fg57fv802iljlcdv6jphksm6.apps.googleusercontent.com',
    iosBundleId: 'com.example.helmet',
  );
}
