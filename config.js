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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474177,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_08_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NixcbiAgICAgICAgMzksXG4gICAgICAgIDU3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1OCxcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxLFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcwLFxuICAgICAgICAzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicXBERkwrUGpORW1lVGk3U0w5cGc1a2JuY2dRcStMUWlrakJjRzJzMk1MTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVmtURGpUT01UMmlPc2RVMkFtLTdNQVwiLFxuICBcInBob25lSWRcIjogXCJkMWE5N2U3OC0wYjlhLTQwYjYtYWFmNS1kYmU4MDMwNTEyMGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTgsXG4gICAgICAzMSxcbiAgICAgIDIyOCxcbiAgICAgIDIwMCxcbiAgICAgIDc1LFxuICAgICAgMTEwLFxuICAgICAgODYsXG4gICAgICAxNjUsXG4gICAgICA5OCxcbiAgICAgIDYwLFxuICAgICAgMCxcbiAgICAgIDE2MixcbiAgICAgIDEyOSxcbiAgICAgIDExNyxcbiAgICAgIDI0MSxcbiAgICAgIDIxNSxcbiAgICAgIDExMSxcbiAgICAgIDE2MixcbiAgICAgIDksXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDU2LFxuICAgICAgMTIwLFxuICAgICAgNjAsXG4gICAgICAxNDksXG4gICAgICAxNTMsXG4gICAgICAxMzksXG4gICAgICAxNDQsXG4gICAgICAxNzYsXG4gICAgICA2OCxcbiAgICAgIDE5NyxcbiAgICAgIDEzNyxcbiAgICAgIDIzMCxcbiAgICAgIDIwNCxcbiAgICAgIDI0NyxcbiAgICAgIDg2LFxuICAgICAgNDcsXG4gICAgICAxOTMsXG4gICAgICAxNjcsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOQ1FNUk1WOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMzM4MjU2Nzo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlTDs3hpxI1Cw7jDv1wiLFxuICAgIFwibGlkXCI6IFwiOTY0OTk1NDMzMTg1NTE6NTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmZzbXFnRkVLaVJyN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwdnhBdnBMVHpiMzlLTkNPOENONE92a25MTm1Dcy9mV0dXN1Q2MGdoRzFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhITHNHS2JibW0wcWxZdVlOZ3kvWTQ0RkNKNEo5a25TVUc4Y2ZTZFhZYUdwck54VEdlVmNMWFB1dkpUYUpsck1CQVFza3JLbk5BSXhzM3g3MWltL2dnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVnWkF5VGdmaTI5SFFqNlRER2cxSVJiWGRVWTlIaUkwRyt5YVB5cllNcW13dDFJOHpFN0F6aUQ5eTlvMmplNll2YllkckNTTjZUNXFsUThlaDNDSWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjMzODI1Njc6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDM2OTA4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
