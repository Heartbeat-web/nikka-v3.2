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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5iWXdlNTFLOWVDZk85YURIQVVqWFdEVkgza0VpWGVrc3ZPc2FxQVVGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXBOVGF6TWJhY0xub1lOU2NlbFdyMkRQZnNVTGkwVEFPbFVCeU93TWZYUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQzhua0xDQ3kzdTJrTDUrS1dzUnYwdm8vYkxPalJERUVyZDk2YmxwcDFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3dDFrWkZBc1VrNE1zWVhJdW4rdERPQjlaV2JDV3lkREh6SGlMUmRTTWhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFGZzBjNk5XN0dHTUNrbkw2bkpTK0RGNkgwUTgvaE45UWJnd2ZmMFNORWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYxTWc3c0FKc2FCN0ZlNXJhUHVPRVNLeWZidVBIVzZ0UFMveXI4cUZ0RnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUI0TzZGM1dzb20wMEZ1bithZWVva0pFSmZjS00rNUduSGpLc1Vsck0zMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3lRL3ZLbWJNbVJXQnBsdEtKZytIeWQ1OHI2ekdISmtxK3BKMnpDUFlRZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjkzeFpQa25OcUk0MjV0a2NHWStzRGMvM1lEL3J6TFJicTFxZElRRmxxOUlpa3MwZGJobCtKV3FEUzBudDF0U0s1U1VBYTZUbU03U2tDNUdMYlJWZ0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiIwT3pXdWVsMGFsay9FSndxcDNacGlNdE11dmMrbzgzVklOcmVWZFhFWnRBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjQyNTI3NDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREIyNTg4REM5MDc4RTFENUM1OUJFMkFBMzE1REI0NkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMTYxNjg5OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieTBZVE1GLUxTOU9iRkpRWFZIWk1vQSIsInBob25lSWQiOiJhZjA3N2QxMy05NDA2LTRmY2MtYjk5ZS02NDRhY2E0OTAyZTkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1VYcmZsUHpOeHVmaFBPazA3MVlqRVZscmxRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc2bFBOVDJub3BkU3J1Z3ZGdWFWcGVJaXVmVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3Q0RMWU41QSIsIm1lIjp7ImlkIjoiMjM0OTEyNDI1Mjc0NDozNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNeSBIZWFydGJlYXQg8J+kreKdpO+4j/CfmYLigI3ihpTinaTvuI/igI3wn6m5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKcW8ySTRIRVBQQTJia0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0UlRObDlBaUNTUFF2OWozdjdaenNpTUUySklYbVhJQkFSaUJPckVyOTFJPSIsImFjY291bnRTaWduYXR1cmUiOiJPZmdrak5iWTJSS0N1Vnh2OUJTL2RvRDZTYWdyNnZLSG5jUitWQ3NBTjk0NXBONzZ3N1R4RGRRVWo1Z0pZMHY2QWk0Qm5pb0Jid05MejJIWkk5YUNDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiREhRVkx6R2NINmU3b0NIbS91anY2akdCL0wwbkZNMzdOaE5XTnY4eVdLLzZEajhkQW9BbGl0eW9VT3FZZFYvcmVzc2pCelZia3BqOXNRM0tOdUtsQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTI0MjUyNzQ0OjM1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVFVXpaZlFJZ2tqMEwvWTk3KzJjN0lqQk5pU0Y1bHlBUUVZZ1RxeEsvZFMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE2MTY4OTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ1A3In0=====" // session id here
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
