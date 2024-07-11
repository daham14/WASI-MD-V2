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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFRaDF2Q1ZUeUlycmhkcUR1cURHeS9TcHh4MzBYZkViSCtjUVhPbW9tOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkxCYnVieFBKcHd0T29sclRxYlh0bkpiU2Rrb2JVMXRKZFJzTTlxQngwaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNREQ2WHNZcGxERlIzc3NkdEFLcG5XRHdMU0lYemNIMlN2L09MNURoKzBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWSUhXV1prOW1kNlNzdEY5VThvV0w5eTB2QUhTQWgyL04vNVVnUlFDMmdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJTDRaalRiV0JwQjI4NW1XaVR5ZEVPbU95YWJlYjh5UHRhWmxDMFNQVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijgzd25PUk9ySUNrakMxK3IwRkE5OU91eWRtZkxWclZqclpKUE1zWEtHeFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0JGTFN0TjZ6bjFML1R3cVBSdlAvYkl6bzFyckI2TVZPWjdxcmpmMnBIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTlaV2YzL2tuZC9GbmtBTHlUb2JVOWI2aHg5bmp2SnBtYUJDTk1oTk1tZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpZTm9YeHlLaDZady9idUYyWjRjMnpNVThZSGVOL1h0a01aMmtBN3FZUWRMSElLeFFDS1M0ZmxZU3NOQ1VJakVvcXBobkpOOXB0U2pXWTB0UmJYSGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzYsImFkdlNlY3JldEtleSI6InVDUGRPaFMvaUVXajZYWkNsUkh2akFhZEx0dDZVZUhZdm02SEJVaVp2NFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZISWp4NVlBUTVDY3A1bTJGMHpua2ciLCJwaG9uZUlkIjoiMTQ4YjhlNDktNTcyZi00NWFjLTkxMDctNDc5ZWY5MjcyNjZhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRTS2gzMDU5TnhxcGJKMHlSMTI1R1drelE2MD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q2FJa0JNWXJDQkZ4YWtYNERLc1UvT1VTQVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQkU2RTdKSEQiLCJtZSI6eyJpZCI6Ijk0NzA1NTAwMDcyOjIwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLdWptNVVCRU1MbHZMUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4cG40L0xjS0JSRG8xa21LU2hTMVBmeEhBRk5iZVdzdDZtZ1o2YmluaG13PSIsImFjY291bnRTaWduYXR1cmUiOiJDTmsybVRJbERwVFBVUTMxT3Y3c3pBazBiQnBhc1plaGNDWFhyd0Y0VVJ6SHFYWXI5Q3UxR0lBOXZKMW9iWnFsRnQweUxYRGZ1TzRNTUplUE9lR0RCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNFNKVi9YWmV1S1pOUndYZkdCK2xIekEwTGw5eUVpY245djJNeXd5UjkzMC80U0VqdnI1R21EYmdiYnJLazloQUNtYmtrdDk2VVIzUVhtZ1M2dTJJZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwNTUwMDA3MjoyMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjYVorUHkzQ2dVUTZOWkppa29VdFQzOFJ3QlRXM2xyTGVwb0dlbTRwNFpzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNjYwNjg2fQ=="
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
