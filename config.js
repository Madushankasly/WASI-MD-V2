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
global.owner = process.env.OWNER_NUMBER || "94 71 678 7803";
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
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0cyWDRmbkJEMkRNaitBRkdOcjJMZk03blZIMm1zTEFTQURKdEFqWjQwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzRFdEF3T2VrNEx4Q1hMcWdlVFlvSElaNTJ5aU5uU2hpYzFnZ2RoUUVocz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RjZjakszaDlyNmNDTWV1SlI4dXNxSkZDVThRTmc0ZEVxL3JqbDYzc0ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhL295TXFPTmwzNnFUQndaWTBzcEV6N1JYVDRtVC9jZCtkYnQ3TUxCVmhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtIbElKeVk1WWlBbTRlMUp1Z0ovNTV4R0VKM0xMZHFRUkRKNEx4U3d3bm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZWS2ZSbTB3N1licnNockN6NEZwWGo5bmJlSTNxK21vYmhWVXlLcFVCUXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdua1BNYW9jZnY1QThYZ0hBWHBZNGhKc3hEM2RlajAzOURQdVYwZ1pHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFNqaEFnbUY3MCt0WE4xcUY2aFFudUJoRzg5eGlQaUdiQnM4RklidXFVbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1wZmJVT0ZRUmR6WlRnWUUxVXpBaDNRMVVidXltSlc4Ull6SnloN1g3UG5QOHkxVXZnMVhWMDQwdFV0YnE4bHlUTmQzMk9zQjc5UWFyWDdsc0N5b0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJhK09wa3VEVHFpVlloWTFmZHZRNGkwRjlkdFZad1pNMzZZMWtTN0kvYVA0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE2Nzg3ODAzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk1MkFENjExRThGRjQwREU2NDlGQUE1Rjk0MkREQTI2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAxMjczOTN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE2Nzg3ODAzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVFMDM3MEYyRjhBODUyNEIwMjk3N0UzRjY0MTExRThFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAxMjczOTR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE2Nzg3ODAzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk0OENEOTdDMDZERTJGOUE0MTJFNkQyQzQ2MUUwMzc2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAxMjczOTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE2Nzg3ODAzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJFRTYzNEM0Qzg4MUM4MTdDNTk5OEZERDdCM0EwODk3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAxMjczOTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImNjSlB2LTdGVHN1MTJQeVNqWDZRd1EiLCJwaG9uZUlkIjoiYWRjYWU5M2MtZjc0OC00MzkxLTlhNzMtMzhiZmZhMWYwNDkxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJZeXV2Z1BvTGVJdFl1TXYvakZvKzQ0QzMvND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPcTVmS2xiUUptQzkvTEhIUXVreHQ0bnpESE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0wyM05SUEgiLCJtZSI6eyJpZCI6Ijk0NzE2Nzg3ODAzOjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+ZgiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUENoL05rQkVKU2ZuTFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZy9HVlJwc0Q5QVQ5NFFoS3dSeC9Fa1YyVUI2eWR2emNhNG1jNWdsSU9EOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoieDRQMEMrVTNyS3lRSkorTEVFSUtCa0IxN2Z3enJLeXlYa29XelB4d01meEhUczhVVk1MaXM0Yk1mS1Z2SjRCQ2p0UHNOalBxbzRPMnl0T1h4ekhwRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik52Y3R1MU5ubEVvM0NzWngzeEJsZHdmdjhsVTVQM1JsN1dKemQ3QU9TZ1NBU29qUEM1b0hNcDhneXM0eXJSMjZBbTFTN2I2SGR2NU5oVTYrRXR1b0RBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTY3ODc4MDM6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZUHhsVWFiQS9RRS9lRUlTc0VjZnhKRmRsQWVzbmI4M0d1Sm5PWUpTRGcvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMTI3MzkyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUs3aiJ9"
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
