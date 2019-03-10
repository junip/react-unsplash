/**
 * -------------------------------------------------------------
 * Importing Unsplash object and using for fetching image data using
 * APP_KEY and APP_SECRET
 * SignUp Yourself in `https://unsplash.com/` GO TO Threedots -> API/Devlopers
 * Follow the instruction and API USE restriction to use the API KEY
 * -------------------------------------------------------------
 */

/**
 *  Github Link for the unsplash-js
 *  `https://github.com/unsplash/unsplash-js`
 */

import Unsplash from "unsplash-js";

const APP_ACCESS_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

const unsplash = new Unsplash({
  applicationId: APP_ACCESS_KEY,
  secret: API_SECRET
});

export default unsplash;
