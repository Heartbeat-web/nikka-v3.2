//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349124252744";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1USHdwcDdjZUdWNXNXNGdtUC9xaWRrNnU0aFJYRDVIY3NsOGF4YWYwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09XZStrWDRvMzJKc2l6MmpvY3duclgvallHTDNCZ2o5bytaOGk0Y2tRUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSVdhYU83NjlYZ1JDV1V3a1pjM0pvSEtOOFJGMVU4TWNPVWg4eFJYWkV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsRXoxU0wwbW1TMFlwNnRSLzllQkw2cXd2TUF4M0p3OXFKNE5sRVdyVUZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFJRHZkT09NOGFrbjVRZDF6a09vV0JZcFJZZ2lZTXhBb1NxMXBmc0ZrMWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBzeEdHekl2RzFPUlJINmpyTmRtUDFPU05CcCtQQnNYT1dXY25HWEE2SDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdVVWtuQTIxWUZOU3pIQS9CQm9BdlNEVnYwSmxqVHdZMVVRUWdLOG1sQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHBCVVJFR2NIRndNNGFGZVlHNUNOQWdTdXdyMkJzREFqbGZSdmNuVllEND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZOa29UaWtFK20zRTBYcFY1bGhGcDFNanZFeDh4UUNGbDd4TGNQUnpUcHAxN280MFhaSVg1aVkxU0dpUXZQMm5nTklFTGRCd01HTHh1Ny8xdVdnREF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiI5LzN0YStJVGQrU3ZQQmJNOXNTU2IrSmlya2xUY2xHR08vMk4zRFA2Z0kwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtak0ySDlveVJDcURIYmtRTFEzdmhnIiwicGhvbmVJZCI6IjM4NDViYTExLTk4MjUtNGNmOS04MTdlLTc3YzQxYTYxYjJkOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5blgvMDRiVHR3NmduN0djYy9NMnFHdE81Zlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmE0NXF5VUNBdVZhOGZTSUhRSFdtOFp6Q3hVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNDV0JGNzRCIiwibWUiOnsiaWQiOiIyMzQ5MTI0MjUyNzQ0OjM4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKMm8ySTRIRUw2bnZMc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0UlRObDlBaUNTUFF2OWozdjdaenNpTUUySklYbVhJQkFSaUJPckVyOTFJPSIsImFjY291bnRTaWduYXR1cmUiOiJWNmxmb1J2Wlk3ZUFZWlIzeXhXSlJGemh1bTUrMVpUM3M1OHI5SUxkU3RnOFRqeUxNdGlJaVNqSndodmU5OUhHR0I3OFlhWWdOc0tTUXFqb1VnQ0VBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTks4TXg0eS9HS0Ric1gyN2J5Y2dFREhzOStJMjZOWTJVNmRMb2ZQK1BranE0di9YTmZ0eFJrdDlncjFxWHgvaW9QZTBWMUhHN2ZMeWhXaEdoNWErQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTI0MjUyNzQ0OjM4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVFVXpaZlFJZ2tqMEwvWTk3KzJjN0lqQk5pU0Y1bHlBUUVZZ1RxeEsvZFMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUzMzI4MTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ1A3In0======" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
