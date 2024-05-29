const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349122782766";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_31_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMixcbiAgICAgICAgMTI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDc0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5LFxuICAgICAgICA5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2LFxuICAgICAgICAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDksXG4gICAgICAgIDI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExLFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAzLFxuICAgICAgICAzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIndZNUdLMmVZUlExRlJObkNPTFl1anlTc3l5aUlkNjNQNVU2VTFHTm1mTkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyMjc4Mjc2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzk3NzkwRDg5M0ZCRjRBNjYwMUI0RTRDQTY4OTk0NDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2OTY0Mjk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyMjc4Mjc2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTIyNkU0NDg3RUUwOUFCNEEwNTM2RjMyQjZGREZFQjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2OTY0Mjk5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBuNm52UXo5VFgtelNnNnE4ZzlCRHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDdhNDQ3MzgtMmJlMS00MDM2LTk1OTgtODg5NGU1OTAxZDQ2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgNjYsXG4gICAgICAyNDQsXG4gICAgICAzNCxcbiAgICAgIDE1LFxuICAgICAgNjAsXG4gICAgICAxNzksXG4gICAgICAxMTgsXG4gICAgICAyNDIsXG4gICAgICAyNTAsXG4gICAgICA4MSxcbiAgICAgIDE3MCxcbiAgICAgIDI0NSxcbiAgICAgIDEyNixcbiAgICAgIDgwLFxuICAgICAgMjIwLFxuICAgICAgODQsXG4gICAgICAxODIsXG4gICAgICAxMjIsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMjIxLFxuICAgICAgNTIsXG4gICAgICA1MCxcbiAgICAgIDEyMixcbiAgICAgIDE0MyxcbiAgICAgIDcsXG4gICAgICA5OCxcbiAgICAgIDIyMSxcbiAgICAgIDE5OCxcbiAgICAgIDE0MCxcbiAgICAgIDE1OSxcbiAgICAgIDIwMyxcbiAgICAgIDIxOCxcbiAgICAgIDI1MyxcbiAgICAgIDE1LFxuICAgICAgMTAsXG4gICAgICAzNSxcbiAgICAgIDE3LFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxZQlcySEU5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTIyNzgyNzY2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNaWNoYWVsXCIsXG4gICAgXCJsaWRcIjogXCIyMjAxMzg1OTkxMTY4NDY6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVEM4SW9DRU1TWDI3SUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBCVC9kMmJuNXpSa3Y5RHhrbWhVY0NWOWNmVWZ5b1FmclJyNVJ5ZE5MakU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaTNuM1RYaTdLMFVMSVhVTjBRUGpncktibENnS0c1VWlMYUZjejltUGgrTHd5eTJZRnlzWDMwWlVLeUhSd2tLUlNpTm5kQ1FtRERoTzNERnh0dnI5QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib1F1RTVObG1GY0FzVkcxaHlkaHhzVktnQy9kQTcxYnZYTVZXcWt2Y2QyQ1dRblFVZkF4UkcrUFZSUGhLem8ycGJENEpMNEJ1OFpsaHlHTDVkUUlBQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyMjc4Mjc2NjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTY0Mjk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS3QzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLdDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3aEhZeGRPUFFMUUxiUW05NGxReFQzbU1DUEQrejhCVFdoL044Um9kUmp3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU1OTY4NTk0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2OTY0Mjk3MTk4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
