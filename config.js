const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "16582148118"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://dontaye:dontayemulgrave@cluster0.kbglu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port= process.env.PORT || 5000
global.email = 'dontayemulgraveoffical@gmail.com'
global.github = 'https://github.com/Earrape/XLICON-MD'
global.location = 'Mandeville MAnchester Jamaica'
global.gurl = 'https://instagram.com/dontayekp/' // add your username
global.sudo = process.env.SUDO || '16582148118' 
global.devs = '16582148118';
global.website = 'https://github.com/Earrape/XLICON-MD' //wa.me/+16582148118
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUV3MFVDVzRvVGgvU25mclFZQ0s2aDl5ZnpnUXdmMFZBcUtaSk1HNjFHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWC9wZFhkVHRZZDFZTGk1VE5CTHJqVFRZRTVKS2xNajFiTk1IaFJzQ1N3ST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSDR6eE1rZkl0OXVjbjNsK0UxVHQxcXFidHZZS1JsdHhDN0FQVk1ESEhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnZkJQeTQ1Z0J0SS9qbjFGNkNhTURpSG8vejJhRXR4RXRKQ25acm1IUkRzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCS21NTVNDY3M3UWdRMjhUdzd2bmQvbEc2ejlBdG9wWUdxNTRqNUFuR1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJBZEtIR3F6NERrNU5JckFlc0hscjB5NjFsbnN6S09SL0NJQmJJUTQ4MEE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1cWRGYmhQN3BRYS9PampWZWE5VWNySDhybk92Ni92cVcrMDhDb1dTbHZyNDFMZWY1WU12bk14L2VPVkRpRnRrSlVsNGNMYXA0VUJwMU1MRUw0anJDQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIzOSwiYWR2U2VjcmV0S2V5Ijoiek0xb1lSbWpPcXlOWkFwaGxNd0dsUWlCekEwN2ZkM1pSMENzbUdJNCtFMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSnlRa0ZxVUVUeXF5dnk1cExqNWdkZyIsInBob25lSWQiOiIyNGIyMGM0OS0wODBmLTQyYTgtYjU1ZC01MTI5MjRiODA4YjAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTNHZlVXSTBNY0prNllCanN4aWZxSHh2SGJBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSbTZGMWl3UUJ3YW9nSnczZ2JZdW9FVzJOREE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNclZsNWNDRU11aCtMa0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCeFJ0RmVmbmR5YWViTnNCbDNPS0xWa3g3OHhwUSszMjREVHNaZGFvSEE4PSIsImFjY291bnRTaWduYXR1cmUiOiJCM2lqQzNoUGViTFFVSUdaNkFKTG5iN2Y3WVlrWVZOS0ZkN1JLWnpSNXJyOXlmQUIyTFhoOU5SN0Z3MTFxaVJYK2tFZWdEcU53TGpSWFB6N0tlMEZEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSDNqSVJxUFNGdGdyMXRyOWdhS0RMQW1wUm5WWlF1dHlIYmI4ZEVvbDVIR2gydU4yRXRQekxkRHg2ekFEOFZvVHJ3aGhVY2F6UmF6RVRpd1JNY05ERGc9PSJ9LCJtZSI6eyJpZCI6IjE4NzY1OTYxNzgwOjIyQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE4NzY1OTYxNzgwOjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFjVWJSWG41M2Ntbm16YkFaZHppaTFaTWUvTWFVUHQ5dUEwN0dYV3FCd1AifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzIxMjA3ODJ9",  //PUT Session Id Here, 
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
