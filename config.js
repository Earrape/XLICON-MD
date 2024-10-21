const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "16582148118"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'dontayemulgraveoffical@gmail.com'
global.github = 'https://github.com/Earrape/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/dontayekp/' // add your username
global.sudo = process.env.SUDO || '16582148118' 
global.devs = '923184070915';
global.website = 'https://github.com/Earrape/XLICON-MD' //wa.me/+16582148118
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0d5TFoxUm5OZ0hZZTUwZlhtWnVNNzY1MVBqeVd0SG1LR2MzUURHSk1sYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0VvYVlsNGZoc2JmZDNTVFhFTWlERVhnQTMwNnlKTHBTZjJtTEwrdG9XYz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSXNOUk9WbGVaNlZzTkN6S2tpUGo3cVFST3R1RkJVTC9LUVc1RGZSem04PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5WG9najJsa3IzbGNkS3FQV2FKNG1aQ2hwWG90Y1FEZEY5VlJNRkR3M1hNPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdBbzdMKzh1c3NhbE9ROFhwMmZaeTlJVDRQc3p4WmJmdGdLTUpMRmxrVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJoV3FBRjFkNHlBbjNZN1VKR2Mranl1UW5zZXVtQktaL0R5SmtVSitNMk09In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqYW5RWVJWQW90d0Q1UUVHMjVBRE5oaTNZS2FyRXU0S3IxaHhwR25IcEVhdmpJSFkrVFpMQjZ5aWVUSkVlNHJTeTlybmZNRTg1N1JRamdIUW9oWXpBUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjYsImFkdlNlY3JldEtleSI6IjFSL2RSTkFNa29nSzUya294TkgyYzBQRURTYmdvaTJwRGx6dXNhYWdFTVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InhNQlB3Y3JpU29POHRta3NlMkRtWkEiLCJwaG9uZUlkIjoiNzljMTBmZDktMGE5MS00YzNlLTk1YjEtZDdiOWU3MjkyYzQ1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii90aU5vZHF5NVpxZjY2QkVOMFloMDljRVVkND0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTRCaUZmMDQ0N2h3SzkzR0J4dmNNUWliSGRrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDYxd3RNR0VJWHUxcmdHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSVdxb21BNnk5aEZGMVM4NDEvSndlUkxpUmE0dUViWExZS281c1ZyRC9qaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS1psQWJzMDZVdHRBMnRqSWp4bi9Kd1liSWd3NlFkUmlvOCtpMmJUNEdIakM3UlFmbENBQ1gxcUMvWXVwS3RETXBZdy9QV2UzSVFidWw2NzMrK3hPQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IlpManlnbDRzQTh1eFd1V2xTSUNaZ2VNRU8yeVYrbGU2RXlYWkdWV2dMUjZBRGJrNXM5VjloV0ZvYmIwNzJRd0FqZFkyV2lJMDlMNTlMMHdpK0hNTEJ3PT0ifSwibWUiOnsiaWQiOiIxNjU4MjE0ODExODo1MUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNjU4MjE0ODExODo1MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTRnFxSmdPc3ZZUlJkVXZPTmZ5Y0hrUzRrV3VMaEcxeTJDcU9iRmF3LzQ1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5NDc2MzYwfQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'XLICON-MD',
  packname:  process.env.PACK_NAME || 'XLICON-MD',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DONTAYE' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Successfully Connected' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
