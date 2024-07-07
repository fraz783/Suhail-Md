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
global.caption = process.env.CAPTION || global.caption || "MALIK MEHTAB " 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923065120485";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_29_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk5LFxuICAgICAgICA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU5LFxuICAgICAgICA5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICA5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NixcbiAgICAgICAgODUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIxLFxuICAgICAgICA4OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDUxLFxuICAgICAgICA2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllVY3lyRTFwQ1pOQzV2d1JFUEM3bk0rb1FTem9tSHgrcGFqd0dJbVpYNW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDY1MTIwNDg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NUQwNzJEQzY3NThDNEY1RTE4QjJCNkU0RTc3NkE2RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzNTUzNjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNjUxMjA0ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEzNzY2NDI3MzM2M0MxOEQxM0U5QUEyNzczMEFFNjA5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM1NTM2N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0dFFJbWx2R1JUaWZoRVBqcXIzbUlBXCIsXG4gIFwicGhvbmVJZFwiOiBcImM4OWJhMTdmLTUxYWYtNDMzZS05MTJmLTg1YWE1Njg1YmYyZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgOTAsXG4gICAgICA0NCxcbiAgICAgIDIwOSxcbiAgICAgIDIwMixcbiAgICAgIDEwMCxcbiAgICAgIDAsXG4gICAgICA2OSxcbiAgICAgIDE0MCxcbiAgICAgIDY2LFxuICAgICAgMTcsXG4gICAgICAyMjYsXG4gICAgICAyNSxcbiAgICAgIDIyMCxcbiAgICAgIDE0MyxcbiAgICAgIDEwMixcbiAgICAgIDIzMCxcbiAgICAgIDExMixcbiAgICAgIDE3MCxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDQsXG4gICAgICAyMzksXG4gICAgICAxMzcsXG4gICAgICAyMTAsXG4gICAgICAxMTMsXG4gICAgICAxNTQsXG4gICAgICAyMDYsXG4gICAgICAyMCxcbiAgICAgIDExLFxuICAgICAgOTgsXG4gICAgICAxMTgsXG4gICAgICAxNjksXG4gICAgICAxMDEsXG4gICAgICAxMTgsXG4gICAgICAyMzEsXG4gICAgICAxNjMsXG4gICAgICA2OCxcbiAgICAgIDQsXG4gICAgICAxOTgsXG4gICAgICAxMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEpOWlhRRkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA2NTEyMDQ4NToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTY4NzQ3NTk1NDQ5NTc6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZXp3ZElGRUp5VXFyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVOSTdoZTFoM0NOd1hkcE11K1RWcFg0Tjh5VURiN1lsZHVKN2FZYWtMUlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSzN0YUx4QVZldFExNkN4dmUxbVBIbzkwNnprWlFIWjV1TXlBa1hyMVY4dWttZDdRSDNBekx0UXlmVjRDM3BueWdBYVNGV3pQcGFiNUNyRHlIZGNhQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTS9UblE2d2EyZFU3VFdsa3BOdlVYT254TDBtYStnRzRRdDFHY2JMaVJIc29XblNEa1JDYk9jN3JCelphcEtnbm5DTHFud2RyWUFJZjNzSHlZR2dLaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDY1MTIwNDg1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNTUzNjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBQ2FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFDYS5qc29uIjogIntcImtleURhdGFcIjpcImx6dWJib0dtSlJXZUJOSmJNZGNzWkZmZUtPRlgrSkxKQm5FRnNRY3dndk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUxNTIxNTI4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMzU1MzYyODQ2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Sarfraz bot",
  ownername:process.env.OWNER_NAME|| "malik sarfraz malana💝",


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
