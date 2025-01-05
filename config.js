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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01RNmtwUklnaDhycURlR3ZuS2lWcFVHZjVyVGM0STdRRExoUTB0RzVIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHM4eWhEdEdOR21pN1REbkRkRjA5UlV0VHB6REkwTUZxUzBjN09IQ0lTbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0T0taZ3NCa2xZOGRXbE5XUTRGUXhkN081Q1ludVNrQkk4dCs3eDFMajJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SFBTeHZDNitrOHVndmdNT1A1dVlTZmlNWnJlV1FWdnZ2V2dGSjBFTVRBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKWWxCOXBkM1RWSXBRTHBlbFFidlF6NXdNdmd3WVp6aDFiVFN3Ni9EV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh1YVZKQTVpSjhaczJrWEtkbGhzeHMwRTZUdVhWZmFkNHZwREtMWHU0blk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0xhM3RnNGhwSC9scXRaNTRmbVowVEZJdkQzYy9MaVJLbTNIRytBS1lFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDN6YzExWHo2Vnd4NWdZaGI0ZmUraEJCNU1JR3ppMFF1WnEzVWs5QjFqYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitYSDdoRWpsN01ESVh4UUhZUlkrUUJyVEthOGllRmZ6Y2JLenhmSlV3NWpRcTlpM3lDZW4vN21iVm5vKzdzK3BESnBhbWFkRnhXaVZiTGFsQTNUV2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIyLCJhZHZTZWNyZXRLZXkiOiJNLzVSVUZyeTZnWGxlQnVTZDdHK2tZUHhyTWV5WFhpU0ZwVkpabUJETDcwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpM0d2cDcweVFDQ1o0RmxSWGVKMXJBIiwicGhvbmVJZCI6ImM5ZGY4MTk5LWQ5OTItNDZlMi05MzQ1LTM5MWEzNDIyZmQyNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCelVLdjIwcXloSDRLc1oxOUJvQVd6REVQN2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3V1TTlydWpPcE5qVlJVVHNFNHg3VVlVZ3NJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldRQ0FLSE1LIiwibWUiOnsiaWQiOiIyMzQ5MTI0MjUyNzQ0OjM5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFkbWluIPCfmI3inaTvuI/igI3wn6m5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKNm8ySTRIRUo2czY3c0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0UlRObDlBaUNTUFF2OWozdjdaenNpTUUySklYbVhJQkFSaUJPckVyOTFJPSIsImFjY291bnRTaWduYXR1cmUiOiIrOTg4SnAwaWVjeTB4dy8xOGN6dWNtdmg3WGVmVVBtSURUcnlVUEhkNmZtLzYrSVJYalgxb1UzUEdJRGNzcGRiZ3A0YW1uUDhYN2N2YVlYWXNIbnBEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMzBJNkUyU2VqQXc1WUJ5MEh0SE1MK1k0dlNDWUs2eXcwT2RnNTdmNitoSitRNmJCeitUTUk5V29MUzk3ZWhTWlBpcE16N3cranBUS2U1QTY1SkxLaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTI0MjUyNzQ0OjM5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVFVXpaZlFJZ2tqMEwvWTk3KzJjN0lqQk5pU0Y1bHlBUUVZZ1RxeEsvZFMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzYxMDM0NjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQTNkIn0======" // session id here
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
