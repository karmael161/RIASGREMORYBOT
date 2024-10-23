//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/rVcLl4A.jpeg";
global.devs = "237694722989";
global.sudo = process.env.SUDO || "237694722989";
global.owner = process.env.OWNER_NUMBER || "237694722989";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/rVcLl4A.jpeg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "{"noiseKey":{"private":{"type":"Buffer","data":"WEUBALJHbEnkz3j+SOy6WC2+4CUN7aw+Sf46UF/Y81s="},"public":{"type":"Buffer","data":"9MSTC5svV3c1WGUnCVR5uycZEGoWDbFMjxCmlmk6QC0="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"uPiX61SGfRh8KxuhOK2MLN9Eh4I7/XMkNe2aLCPzS1E="},"public":{"type":"Buffer","data":"5sOYbBpRazawiwNDQ1Eu7WK1h/ggCSJEjXDFc8Xrsyo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"+IjFONjFTwFd6WDaMUPjPbGVBKdYCygaIPrKJaoV0Ws="},"public":{"type":"Buffer","data":"89mMFit6X0O3fwoVdYwsoTxkWnqY814WrLPet0T47WI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"SMg9ynhslJCKOc2Wbl0dVRxuaBfb3MRIPTMm81N8Gm4="},"public":{"type":"Buffer","data":"DNckEAYRqOtDWFdx2kTDm9zBJIPFfUjSSmxlSnbZkh0="}},"signature":{"type":"Buffer","data":"YHpiYgtHfE0iB9a4IH5pgd/Nm+6iJH+abU/eP6DFsHSXo+uNMH0v5PnYniJphMZlzW3yxhNGBLtAAzdoe11QjA=="},"keyId":1},"registrationId":86,"advSecretKey":"vcNmiWA9JJbI58t9GOVyIiEMD2k0iZlgQC22kVk8hkM=","processedHistoryMessages":[{"key":{"remoteJid":"237694722989@s.whatsapp.net","fromMe":true,"id":"E929177A25E00296C0C2D427662A280A"},"messageTimestamp":1729674518},{"key":{"remoteJid":"237694722989@s.whatsapp.net","fromMe":true,"id":"3C70CAF59A0C8F72C4E8DDE5E97288C6"},"messageTimestamp":1729674521}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"PQBRzVPmTUuks248UeITPw","phoneId":"8c54617b-ef2f-4bdc-8cc2-7badabed7e03","identityId":{"type":"Buffer","data":"TVvwKwPZ+yfvJwTI/hjgW8ZBgbo="},"registered":true,"backupToken":{"type":"Buffer","data":"ux7Npum1Ovdj0FsnaKS2YQ7f7u8="},"registration":{},"pairingCode":"K6CJPXF8","me":{"id":"237694722989:7@s.whatsapp.net","lid":"110956705259734:7@lid","name":"𓆩ᬼ⃟𝑲𝑨𝑹𝑴𝑨𝑬𝑳⛃⃟༄ 亗𝐓𝐘𝐑𝐀𝐍𝐓亗࿐"},"account":{"details":"CLb2pv8FEIz64rgGGAQgACgA","accountSignatureKey":"GMGHbI5qKq8fS0uIMtQXHWS9B71/YbNp70FwRlnP+RQ=","accountSignature":"O4y6MrZTbhpkxeV1rddz9QO6Nge367+s8QJGlEhVbTNT0Z62EpoPcLknwq5rcKw/fLwndAG2rk8Oo+JSPt+GBg==","deviceSignature":"q+wri7p/7MFgFQHd6FLA8TDWQoV4D06kn/dGTU3sAJdo+shmVr0FQ3AxpoDs6Qi0eX5XOjFy7JUK8EVV5mrniw=="},"signalIdentities":[{"identifier":{"name":"237694722989:7@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRjBh2yOaiqvH0tLiDLUFx1kvQe9f2Gzae9BcEZZz/kU"}}],"platform":"android","lastAccountSyncTimestamp":1729674512,"myAppStateKeyId":"AAAAAA8T"}"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "L'ANGE DECHU ",
  ownername: process.env.OWNER_NAME || "𝑲𝑨𝑹𝑴𝑨𝑬𝑳 𝑺𝑨𝑺𝑨𝑲𝑰",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
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
