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
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUF0T1puM3FWaW5zb1pvVnRiZTJrUzlBMTF3eldNYkhmR2hwamZsM0dWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWlPblNEY2dmWmxvZU9oNDlBWkxtRDg3bGhyalJmVTBaN0pSWDk5ZnMyST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBS1M4VlJqcWljT2FaYzZISnlxdFZaQmJ0ZStHSzVicU9Ta0IyanlsWlZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTZGZIWHUzK0ltaGVON1F4dWZ3b3YwWGNsVkRtbTlJekhCWWt5a2UyNWo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhGTkVsWGpWSHpQTW1XUmlIUXZNdlpLbWFwVXI4ZWtzZUdtQ0N4NE5UMm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9Pc1A3eVlvdGpab2JnVzVJQnJ3aGRNa09VMm1Nb1N3WTdKNmdGVXowQ009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lyekF3TFBxSFZSbEtBSjU0Tm9XS1k1Q1pyZzZpR1dqL2xYT1NqZlRsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmN3Z1BUM3NqUmd6M1VrL1lVZzRZUm92akFxSXVic3kyNUpKeTRrTEF3ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJkblJWbERUK2k2YVpQVlJTMTMrRllqVVRVaDBPR0RqaXVQNzlqUElwMStZYVdkemZNaFdwMzNEeDRJeUY1TEFVb25lWFpjZDhKRlNJQ2FQU2V1TUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6IkNNL0VCOVNUSERqYWw1QXNtbDlocUNWQlZXa1Yxck9lcitVSHd5bFNQTW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyNDI1Mjc0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0RkM3M0UzODcyQUZCNTBFRDgyRTkyQTBGREEwNjI3MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNTAyNzU5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTI0MjUyNzQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZFMDQyMkM2QkVDODU1NzU2MUY2ODMzMEU5MEU3NEUzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA1MDI3NTl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjQyNTI3NDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0IzQzFBRjNDQTkwRjJERUY4NjdERTY3RUZCMkU3RjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDUwMjc2Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyNDI1Mjc0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRTc2QkFDNEQ2QzQxNDlCMkIzMDJFNjAwMDAxMENCNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNTAyNzYyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuQkI3S1ZzQVFJNmtERGlwTVpaLU53IiwicGhvbmVJZCI6Ijg2MjJhMzIyLTk4YzgtNGYzNS1iODBiLTNlYWE0ZWMxNjU0NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSNHFQVGlWY3FNRWh2a2ZVd3RETFExRWNrVTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVl4T1V4QmxMczM5M2xXSlVBT0Z2SzFkYmFNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJIR1M1OURUIiwibWUiOnsiaWQiOiIyMzQ5MTI0MjUyNzQ0OjMwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfmKoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ppbzJJNEhFTm5BbGJrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRSVE5sOUFpQ1NQUXY5ajN2N1p6c2lNRTJKSVhtWElCQVJpQk9yRXI5MUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVJMjN6SEtzZ2x4ZlVyQ0tzR2s0UFExNkQ2dXQxSFFReExxdDBlcmUwRFFzdDdpZktJdGFFQ0tPL1RFVElnK2I2YmNPV3Y2NzRaa0NNalF1RkpRMUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVUDZyUkorSC9xT1c1ZGdGTThJb2xESXNiaG0wclFiTVluam1BOStQMWVWczhPajlmbUx0Y0VrVXVFQWpXUTY1emcvNXpsT0QwelJUK1lwdFdyMzBCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMjQyNTI3NDQ6MzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUVVelpmUUlna2owTC9ZOTcrMmM3SWpCTmlTRjVseUFRRVlnVHF4Sy9kUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDUwMjc1OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHcjMifQ====" // session id here
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
