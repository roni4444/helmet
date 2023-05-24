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


exports.Accident = functions.database.ref("/User1/Helmet/Accident/Value")
  .onUpdate(async (change, context) => {
    if (change.before.exists() && change.after.exists()) {
      const recent = change.after.val();
      if (recent==1) {
        const user1 = await fire.collection("Users").doc("User1").get();
        const name = user1.get("Name");
        const vehicle = user1.get("Vehicle_No");
        const snapshot = await fire.collection("Users").doc("User1")
          .collection("Emergency").get();
        snapshot.forEach((doc) => {
          fire.collection("mail").add({
            "to": doc.id,
            "message": {
              "subject": "Accident Occurred",
              "text": `${name} has met an accident while riding on a `+
              `vehicle with number ${vehicle}`,
            },
          });
        });
        return null;
      }
    }
    return null;
  });
