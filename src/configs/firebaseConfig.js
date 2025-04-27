import admin from "firebase-admin";
import * as path from "node:path";

const serviceAccount = path.resolve(`${process.env.SERVICE_ACCOUNT_PATH}`);

const fbApp = admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount),
  }
);
export default fbApp;
