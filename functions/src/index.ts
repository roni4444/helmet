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

// const fire = await admin.firestore();
// const FieldValue = await admin.firestore.FieldValue;
const real = admin.database();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//
// exports.Accident = functions.database.ref("/User1/Helmet/Accident/Value")
//   .onUpdate(async (change) => {
//     if (change.before.exists() && change.after.exists()) {
//       const recent = change.after.val();
//       if (recent==1) {
//         fire.collection("mail").add({
//           "to": "debaratipal4@gmail.com",
//           "message": {
//             "subject": "Accident Occurred",
//             "text": "Someone has met an accident while riding on a "+
//             "vehicle with number 123456789",
//           },
//         });
//         const user1 = await fire.collection("Users").doc("User1").get();
//         const name = user1.get("Name");
//         const vehicle = user1.get("Vehicle_No");
//         const snapshot = await fire.collection("Users").doc("User1")
//           .collection("Emergency").get();
//         snapshot.forEach((doc) => {
//           fire.collection("mail").add({
//             "to": doc.id,
//             "message": {
//               "subject": "Accident Occurred",
//               "text": `${name} has met an accident while riding on a `+
//               `vehicle with number ${vehicle}`,
//             },
//           });
//         });
//
//         return change.after.ref.child("accident_run").set("run");
//       }
//     }
//     return null;
//   });

exports.Auto_emailing = functions.database.ref("/User1/Helmet/Accident/Value")
  .onUpdate(async (change) => {
    if (change.after.val() == 1 ) {
      const count = await real.ref("User1/Details/EmailCount").get();
      const name = await real.ref("User1/Details/Name").get();
      const vehicle = await real.ref("User1/Details/Vehicle").get();
      for (let i=1; i<=count.val(); i++) {
        switch (i) {
        case 1: {
          const email1 = await real.ref("User1/Details/Email1").get();
          admin.firestore().collection("mail").add({
            "to": email1.val(),
            "message": {
              "subject": "Accident Occurred",
              "text": `${name.val()} has met an accident while riding on a `+
              `vehicle with number ${vehicle.val()}`,
            },
          });
          break;
        }
        case 2: {
          const email2 = await real.ref("User1/Details/Email2").get();
          admin.firestore().collection("mail").add({
            "to": email2.val(),
            "message": {
              "subject": "Accident Occurred",
              "text": `${name.val()} has met an accident while riding on a `+
              `vehicle with number ${vehicle.val()}`,
            },
          });
          break;
        }
        case 3: {
          const email3 = await real.ref("User1/Details/Email3").get();
          admin.firestore().collection("mail").add({
            "to": email3.val(),
            "message": {
              "subject": "Accident Occurred",
              "text": `${name.val()} has met an accident while riding on a `+
              `vehicle with number ${vehicle.val()}`,
            },
          });
          break;
        }
        case 4: {
          const email4 = await real.ref("User1/Details/Email4").get();
          admin.firestore().collection("mail").add({
            "to": email4.val(),
            "message": {
              "subject": "Accident Occurred",
              "text": `${name.val()} has met an accident while riding on a `+
              `vehicle with number ${vehicle.val()}`,
            },
          });
          break;
        }
        case 5: {
          const email5 = await real.ref("User1/Details/Email5").get();
          admin.firestore().collection("mail").add({
            "to": email5.val(),
            "message": {
              "subject": "Accident Occurred",
              "text": `${name.val()} has met an accident while riding on a `+
              `vehicle with number ${vehicle.val()}`,
            },
          });
          break;
        }
        case 6: {
          const email6 = await real.ref("User1/Details/Email6").get();
          admin.firestore().collection("mail").add({
            "to": email6.val(),
            "message": {
              "subject": "Accident Occurred",
              "text": `${name.val()} has met an accident while riding on a `+
              `vehicle with number ${vehicle.val()}`,
            },
          });
          break;
        }
        case 7: {
          const email7 = await real.ref("User1/Details/Email7").get();
          admin.firestore().collection("mail").add({
            "to": email7.val(),
            "message": {
              "subject": "Accident Occurred",
              "text": `${name.val()} has met an accident while riding on a `+
              `vehicle with number ${vehicle.val()}`,
            },
          });
          break;
        }
        case 8: {
          const email8 = await real.ref("User1/Details/Email8").get();
          admin.firestore().collection("mail").add({
            "to": email8.val(),
            "message": {
              "subject": "Accident Occurred",
              "text": `${name.val()} has met an accident while riding on a `+
              `vehicle with number ${vehicle.val()}`,
            },
          });
          break;
        }
        case 9: {
          const email9 = await real.ref("User1/Details/Email9").get();
          admin.firestore().collection("mail").add({
            "to": email9.val(),
            "message": {
              "subject": "Accident Occurred",
              "text": `${name.val()} has met an accident while riding on a `+
              `vehicle with number ${vehicle.val()}`,
            },
          });
          break;
        }
        }
      }
      admin.firestore().collection("mail").add({
        "to": "debapriya.paul.cse.2020@tint.edu.in",
        "message": {
          "subject": "Accident Occurred",
          "text": `${name.val()} has met an accident while riding on a `+
          `vehicle with number ${vehicle.val()}`,
        },
      });
    }
  });
