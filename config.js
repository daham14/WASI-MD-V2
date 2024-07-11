//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMko3R0wzSlpDdGg2NDZ5Yzd4SlZ5Ym9aTXFLRW15ZEJnaDBRSzFCRHhYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHpvN3R0d0l2Q2pucW5aRC9Oc3Arbm53VGNTMHozRUl4M0c0QlNVZmNVVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0R1UwT1liTElFbXNnVWFhelBZWWFwcUdXUm4veFd4NEcxY0c0dktlTVVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzOTVncWxhTjlJR3dYZk9vUTlxVXI1SXF4UE12eUJuL1B2cWRFT0VsdFg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtPV3o5dkQ3Um83UkFVZURyM3NIL1NEWlhVS3hIRW92VzRXNlFQVkkrRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQxOE1lQXdUdmtzbFJTU1NIVXpZWWdaMHlLdDJkWVhsdjhmTE1LeitWMFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RXL21TKy9jUUQ2MksvS2VNWFVrNXNCbXR6Yko5d0hXcVJwRVE2S2luUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXdlT0dmTXJCQlJNS3hQYlVVTHBSS01kaGJYMjJKN0tVWXZ6cllUNWp5VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdPcTd0VXgzaUhPeDFLN2IvcUhhUC9kMGQzbmZ5SHZUeGdmS0VNWUwvdU0wTkRJRklyTmZBNkx4bXRGblMrczlFVGhjdVdpRUcvaUFLdklWNk5qamlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiI4MGg4WGxuSnFGaHZtb3djbThBOG1JTGVQUjFCdVZaU21IZFBQVk9yUVAwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGX3NlcEpVUFJ6LVA3SllUSHlOdTBRIiwicGhvbmVJZCI6Ijg1YzE1NWI5LWY5YjYtNDg3Yi05NGIxLWM5NjgzYTkyMjg0YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2OVNFbEs4V3ZYbHJwVHJ3clhpVmIrYk1YYkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTRZSllQazhRWGdpWWc2TWpsamZxVXQwZWtjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVaREJGS0RCIiwibWUiOnsiaWQiOiI5NDcwNTUwMDA3MjoxOEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS21qbTVVQkVJenh1clFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieHBuNC9MY0tCUkRvMWttS1NoUzFQZnhIQUZOYmVXc3Q2bWdaNmJpbmhtdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicSs1Mkh6cEJvZEZlY3V2U1NLUkZOcXl0LzBoZWlNbWMxTy9tb0w4S0VLNFl0c0xxNlBrYzF1MnRFaVdMSDZqY0ZubWZsVlVBZm9LTytYNjBaV2h3Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjNZZXZmakJjSzdXT3BUZUVZREhBMjA0QTFZOWw2THZaWWRLYllOWUlDVW50MU95U256dDNzcURVTUJqVlNVdG1oOU9TcUF2WE9VSHN3ZXpSNkM3cmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDU1MDAwNzI6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2FaK1B5M0NnVVE2TlpKaWtvVXRUMzhSd0JUVzNsckxlcG9HZW00cDRacyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDYyOTQwMH0=|
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0I1UTJUVmUzQktucjdNdUN3U2o4RGI1S3ppL2ZBTnhuNXlTZldDL1FrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGhOczVHYUtTVThhazdlWXAzdTdlMXM4YnJ1cWNFVHk5VXhuUERMWHRnbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSzgwUm9CRXE0Qk1OdEtzNEk2UnlVc3ZiRE1WSTN5T0YzOE5ZTVc2ZjN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwaFdnY21xbmJrMUpiTEp6UGxJelBndm9QbDRlVXJ1ZFlpQjE3Z0ZvNEc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKbjF1Q2dhaXJUd05YNXVoNzNtdEZLQUVGbkRiSUR3VGg5b1RLNG5Va2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg2M1RhWGFXTTU3ZmJ3bjNQc25qaFdzQ1RzZFdnMktuWGc2Nm5HOENtemc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0gybzdkTTFxUUpHdTZWSHNKcmFyMXpZWTh4Ulk4c3VqQzY2M3htMjRsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVNQWXZhdW1zSDF1YkR1K1ZJV1hTeEttQU5GSzVlRFRVbzE1cnY0V0hUZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZWb0hCRGtqd1R6L0NndXh2Q3VpcTY0ZkxrNndFc1Ryd1NFb3NrelczUnd4YjltWnFJMmhYS2NnVTZzMXp3ZjBCcXhlSk1SMTZPTjFuQ1lkVDRrM0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJVZHpseEtmN0QyWTFJdmpJa1lxZ2ZKcHk5WEV1VE5jb2szYjhJSGwzQUxRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLTVFRRXpEdlRENkVTRHB4TjJ2X2ZBIiwicGhvbmVJZCI6IjY1NzRjMjcyLWNkN2UtNDA0Mi05ZmZiLTk2YTNmODFlNjljZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNVng0M1JtVHZNTUtBdDhVa1J1MzRtVWh2cFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVNBZnBTQWxGaDFSay91bGoyVzhWdkJ1cTRJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhIMUs4NzM5IiwibWUiOnsiaWQiOiI5NDcwNTUwMDA3MjoxOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3FqbTVVQkVOTDd1clFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieHBuNC9MY0tCUkRvMWttS1NoUzFQZnhIQUZOYmVXc3Q2bWdaNmJpbmhtdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMDRMaDY2Ry9GalI5dGY1alNYNHBFK3FzRS9DK2F1SWVQcEx0RllOSHF5Q1lVbDVibWpkWUR2amdERTZ5NTRoVzROUXpHdGtCa2lFYzBSL0ZCK0NFQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkI5RmxvRGI1RkdkUmwza2dCd1plTWF2anNCK1JVRkRJeVNkRS9URXNFRTV0Um1oRGZwN3NzbWt6U2JxZnZIS05JdFpjaTBDd2duWkZock1HdVRSMUFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDU1MDAwNzI6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2FaK1B5M0NnVVE2TlpKaWtvVXRUMzhSd0JUVzNsckxlcG9HZW00cDRacyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDYzMDc1MH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
