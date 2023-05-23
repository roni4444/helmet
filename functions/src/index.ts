/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

import functions = require("firebase-functions");
import admin = require("firebase-admin");

admin.initializeApp();

const fire = admin.firestore();
// const FieldValue = admin.firestore.FieldValue;
// const real = admin.database();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.AccXBleep = functions.database.ref("/User1/Helmet/Acc/X")
  .onUpdate((change, context) => {
    let direction;
    if (change.before.exists() && change.after.exists()) {
      const old = Math.abs(change.before.val());
      const recent = Math.abs(change.after.val());
      const differance = Math.round(recent) - Math.round(old);
      direction = 0;
      if (differance>20) {
        direction=1;
      } else if (differance<20) {
        direction=-1;
      } else {
        direction=0;
      }
      direction = direction+1;
      return change.after.ref.parent!.child("BleepX").set(differance);
    }
    return null;
  });

exports.AccYBleep = functions.database.ref("/User1/Helmet/Acc/Y")
  .onUpdate((change, context) => {
    let direction;
    if (change.before.exists() && change.after.exists()) {
      const old = Math.abs(change.before.val());
      const recent = Math.abs(change.after.val());
      const differance = Math.round(recent) - Math.round(old);
      direction = 0;
      if (differance>20) {
        direction=1;
      } else if (differance<20) {
        direction=-1;
      } else {
        direction=0;
      }
      direction = direction+1;
      return change.after.ref.parent!.child("BleepY").set(differance);
    }
    return null;
  });

exports.Accident = functions.database.ref("/User1/Helmet/Acc/BleepX")
  .onUpdate(async (change, context) => {
    if (change.before.exists() && change.after.exists()) {
      const old = change.before.val();
      const recent = change.after.val();
      if (old==0 && recent==-1) {
        const y = (await change.after.ref.parent!.child("BleepY").get())
          .val();
        if (y==1) {
          fire.collection("Users").doc("User1").update({
            "accident_state": "Accident",
          });
          return change.after.ref.parent!.parent!.child("Accident").set(1);
        } else {
          fire.collection("Users").doc("User1").update({
            "accident_state": "Not Accident",
          });
          return change.after.ref.parent!.parent!.child("Accident").set(0);
        }
      }
    }
    return null;
  });
