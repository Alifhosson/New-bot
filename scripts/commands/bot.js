const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "goibot",
  prefix: false,
  category: "noprifix",
  usages: "noprifix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["ржмрзЗрж╢рж┐ bot Bot ржХрж░рж▓рзЗ leave ржирж┐ржмрзЛ ржХрж┐ржирзНрждрзБЁЯШТЁЯШТ " , "рж╢рзБржиржмрзЛ ржирж╛ЁЯШ╝рждрзБржорж┐ ржЖржорж╛ржХрзЗ ржкрзНрж░рзЗржо ржХрж░рж╛ржЗ ржжрж╛ржУ ржирж╛ржЗЁЯе║ржкржЪрж╛ рждрзБржорж┐ЁЯе║" , "ржЖржорж┐ ржЖржмрж╛рж▓ ржжрзЗрж░ рж╕рж╛ржерзЗ ржХржерж╛ ржмрж▓рж┐ ржирж╛,okЁЯШТ" , "ржПрждрзЛ ржбрзЗржХрзЛ ржирж╛,ржкрзНрж░рзЗржо ржП ржкрж░рзЗ ржпрж╛ржмрзЛ рждрзЛЁЯЩИ" , "Bolo Babu, рждрзБржорж┐ ржХрж┐ ржЖржорж╛ржХрзЗ ржнрж╛рж▓рзЛржмрж╛рж╕рзЛ? ЁЯЩИЁЯТЛ " , "ржмрж╛рж░ ржмрж╛рж░ ржбрж╛ржХрж▓рзЗ ржорж╛ржерж╛ ржЧрж░ржо рж╣ржпрж╝рзЗ ржпрж╛ржпрж╝ ржХрж┐ржирзНрждрзБЁЯШС", "рж╣рзНржпрж╛ ржмрж▓рзЛЁЯШТ, рждрзЛржорж╛рж░ ржЬржирзНржп ржХрж┐ ржХрж░рждрзЗ ржкрж╛рж░рж┐ЁЯШРЁЯШС?" , "ржПрждрзЛ ржбрж╛ржХржЫрж┐рж╕ ржХрзЗржи?ржЧрж╛рж▓рж┐ рж╢рзБржиржмрж┐ ржирж╛ржХрж┐? ЁЯдм" , "I love you januЁЯе░" , "ржЖрж░рзЗ Bolo ржЖржорж╛рж░ ржЬрж╛ржи ,ржХрзЗржоржи ржЖржЫрзЛ?ЁЯШЪ " , "Bot ржмрж▓рзЗ ржЕрж╕ржорзНржорж╛ржи ржХрж░ржЫрж┐,ЁЯШ░ЁЯШ┐" , "Hop bedaЁЯШ╛,Boss ржмрж▓ bossЁЯШ╝" , "ржЪрзБржк ржерж╛ржХ ,ржирж╛ржЗ рждрзЛ рждрзЛрж░ ржжрж╛ржд ржнрзЗржЧрзЗ ржжрж┐ржмрзЛ ржХрж┐ржирзНрждрзБ" , "Bot ржирж╛ , ржЬрж╛ржирзБ ржмрж▓ ржЬрж╛ржирзБ ЁЯШШ " , "ржмрж╛рж░ ржмрж╛рж░ Disturb ржХрж░ржЫрж┐рж╕ ржХрзЛржирзЛЁЯШ╛,ржЖржорж╛рж░ ржЬрж╛ржирзБрж░ рж╕рж╛ржерзЗ ржмрзНржпрж╛рж╕рзНржд ржЖржЫрж┐ЁЯШЛ" , "ржжрзВрж░рзЗ ржпрж╛ рждрзБржЗ рзнржжрж┐ржи ржзрж░рзЗ ржЧрзЛрж╕рж▓ ржХрж░ржЫ ржирж╛ЁЯШ╖" , "ржЖржорж╛ржХрзЗ ржбрж╛ржХрж▓рзЗ ,ржЖржорж┐ ржХрж┐ржирзНрждрзБ ржХрж┐рж╕ ржХрж░рзЗ ржжрж┐ржмрзЛЁЯШШ " , "ржЖржорж╛рж░рзЗ ржПрждрзЛ ржбрж╛ржХрж┐рж╕ ржирж╛ ржЖржорж┐ ржоржЬрж╛ ржХрж░рж╛рж░ mood ржП ржирж╛ржЗ ржПржЦржиЁЯШТ" , "рж╣рзНржпрж╛ржБ ржЬрж╛ржирзБ , ржПржЗржжрж┐ржХ ржП ржЖрж╕рзЛ ржХрж┐рж╕ ржжрзЗржЗЁЯдн ЁЯШШ" , "ржжрзВрж░рзЗ ржпрж╛, рждрзЛрж░ ржХрзЛржирзЛ ржХрж╛ржЬ ржирж╛ржЗ, рж╢рзБржзрзБ bot bot ржХрж░рж┐рж╕  ЁЯШЙЁЯШЛЁЯдг" , "рждрзЛрж░ ржХржерж╛ рждрзЛрж░ ржмрж╛ржбрж╝рж┐ ржХрзЗржЙ рж╢рзБржирзЗ ржирж╛ ,рждрзЛ ржЖржорж┐ ржХрзЛржирзЛ рж╢рзБржиржмрзЛ ?ЁЯдФЁЯШВ " , "ржЖржорж╛ржХрзЗ ржбрзЗржХрзЛ ржирж╛,ржЖржорж┐ ржмрзНржпрж╛рж╕рзНржд ржЖржЫрж┐" , "ржХрж┐ рж╣рж▓рзЛ , ржорж┐рж╕рзНржЯрзЗржХ ржХрж░ржЪрзНржЫрж┐рж╕ ржирж╛ржХрж┐ЁЯдг" , "ржмрж▓рзЛ ржХрж┐ ржмрж▓ржмрж╛, рж╕ржмрж╛рж░ рж╕рж╛ржоржирзЗ ржмрж▓ржмрж╛ ржирж╛ржХрж┐?ЁЯднЁЯдП" , "ржХрж╛рж▓ржХрзЗ ржжрзЗржЦрж╛ ржХрж░рж┐рж╕ рждрзЛ ржПржХржЯрзБ ЁЯШИ" , "рж╣рж╛ ржмрж▓рзЛ, рж╢рзБржиржЫрж┐ ржЖржорж┐ ЁЯШП" , "ржЖрж░ ржХржд ржмрж╛рж░ ржбрж╛ржХржмрж┐ ,рж╢рзБржиржЫрж┐ рждрзЛ" , "рж╣рзБржо ржмрж▓рзЛ ржХрж┐ ржмрж▓ржмрзЗЁЯШТ" , "ржмрж▓рзЛ ржХрж┐ ржХрж░рждрзЗ ржкрж╛рж░рж┐ рждрзЛржорж╛рж░ ржЬржирзНржп" , "ржЖржорж┐ рждрзЛ ржЕржирзНржз ржХрж┐ржЫрзБ ржжрзЗржЦрж┐ ржирж╛ЁЯР╕ ЁЯШО" , "Bot ржирж╛ ржЬрж╛ржирзБ,ржмрж▓ ЁЯШМ" , "ржмрж▓рзЛ ржЬрж╛ржирзБ ЁЯМЪ" , "рждрзЛрж░ ржХрж┐ ржЪрзЛржЦрзЗ ржкржбрж╝рзЗ ржирж╛ ржЖржорж┐ ржмрзНржпрж╛рж╕рзНржд ржЖржЫрж┐ЁЯШТ","ржЬрж╛ржи рждрзЛржорж╛рж░ ржПржХржЯрж╛ ржкрж┐ржХ ржжрзЗржУ рж╕рзНржЯрзЛрж░рж┐рждрзЗ ржжрж┐ржорзБЁЯШСЁЯШШ" , "рждрзБржорж┐ ржУ ржЖржорж╛ржХрзЗ рж╕ржмрж╛рж░ ржорждржи bot ржмрж▓рзЗ ржбрж╛ржХрзЛЁЯШЮ jan ржмрж▓рзЗ ржбрж╛ржХржмрж╛ЁЯШТЁЯШЩ" , " jang hanga korbaЁЯШТЁЯШм" , "рж╣рзБржо ржЬрж╛ржи рждрзЛржорж╛рж░ ржЕржЗржЦрж╛ржирзЗ ржЙржорзНржоржорж╛рж╣ЁЯШ╖ЁЯШШ" , "ржЖрж╕рж╕рж╛рж▓рж╛ржорзБ ржЖрж▓рж╛ржЗржХрзБржо ржмрж▓рзЗржи ржЖржкржирж╛рж░ ржЬржирзНржп ржХрж┐ ржХрж░рждрзЗ ржкрж╛рж░рж┐..!ЁЯе░" , "ржЖржорж╛ржХрзЗ ржПрждрзЛ ржирж╛ ржбрзЗржХрзЗ ржмрж╕ рж╕рзЛрж╣рж╛ржЧ ржХрзЗ ржПржХржЯрж╛ Gf ржжрзЗ ЁЯЩД" , "ржпрзЗ ржЫрзЗрзЬрзЗ ржЧрзЗржЫрзЗ-ЁЯШФ-рждрж╛ржХрзЗ ржнрзБрж▓рзЗ ржпрж╛ржУ-ЁЯЩВ-ржЖржорж╛рж░ ржмрж╕ рж╕рзЛрж╣рж╛ржЧ ржПрж░ рж╕рж╛ржерзЗ  ржкрзНрж░рзЗржо ржХрж░рзЗ рждрж╛ржХрзЗ ржжрзЗржЦрж┐рзЯрзЗ ржжрж╛ржУ-ЁЯЩИЁЯР╕ЁЯдЧ" , "ржЖржорж╛ржХрзЗ ржПрждрзЛ ржирж╛ ржбрзЗржХржЫ ржХрзЗржи ржнрж▓рзЛ ржЯрж╛рж▓рзЛ ржмрж╛рж╕рзЛ ржирж╛ржХрж┐ЁЯднЁЯЩИ" , " ржЬрж╛ржи рждрзЛржорж╛рж░ ржирж╛ржирж┐'рж░рзЗ ржЖржорж╛рж░ рж╣рж╛рждрзЗ рждрзБрж▓рзЗ ржжрж┐ржмрж╛-ЁЯЩКЁЯЩЖтАНтЩВ",];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "miss you bot") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<ржЖржорж┐ рждрзЛржорж╛ржХрзЗ рж░рж╛ржЗрждрзЗ ржорж┐рж╕ ржЦрж╛ржЗЁЯе╣ЁЯдЦЁЯСЕ/ЁЯСЕ-тЬШ  : ) ЁЯОА ЁЯНТ:))", threadID);
   };

    if ((event.body.toLowerCase() == "ЁЯШШ") || (event.body.toLowerCase() == "ЁЯШ╜")) {
     return api.sendMessage("ржХрж┐рж╕ ржжрж┐рж╕ ржирж╛ рждрзЛрж░ ржорзБржЦрзЗ ржжрзВрж░ ржЧржирзНржз ржХржпрж╝ржжрж┐ржи ржзрж░рзЗ ржжрж╛ржБржд ржмрзНрж░рж╛рж╢ ржХрж░рж┐рж╕ ржирж╛ржЗЁЯдм", threadID);
   };
   
    if ((event.body.toLowerCase() == "ЁЯСНЁЯП╝") || (event.body.toLowerCase() == "ЁЯСН")) {
     return api.sendMessage("рж╕рж░ ржПржЦрж╛ржи ржерзЗржХрзЗ рж▓рж╛ржЗржХрж╛рж░ ржЖржмрж╛рж▓..!ЁЯР╕ЁЯдгЁЯСНтЫПя╕П", threadID);
   };
  
   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kya Tera Bap LagaYega? Pehle Prefix Laga Fir Likh Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("assalamu alikumЁЯЦдЁЯеА", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOUЁЯШК ", threadID);
   };

   if ((event.body.toLowerCase() == "pro") || (event.body.toLowerCase() == "lol")) {
     return api.sendMessage("Khud k0o KYa LeGend SmJhTi Hai ЁЯШВ", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING ржжрж╛ржд ржмрзНрж░рж╛рж╢ ржХрж░рзЗ ржЦрзЗрзЯрзЗ ржирзЗржУЁЯШЪ", threadID);
   };

   if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ рждрзЛржорж╛рж░ ржмрж╛рж▓ ржЙржарзЗ ржирж╛ржЗ ржирж╛ржХрж┐ рждрзЛржорж╛рж░?? ЁЯдЦ", threadID);
   };

  if ((event.body.toLowerCase() == "sohag vai") || (event.body.toLowerCase() == "рж╕рзЛрж╣рж╛ржЧ ржнрж╛ржЗ") || (event.body.toLowerCase() == "рж╕рзЛрж╣рж╛ржЧ") || (event.body.toLowerCase() == "sohag")) {
     return api.sendMessage("ржЙржирж┐ ржПржЦржи ржХрж╛ржЬрзЗ ржмрж┐ржЬрж┐ ржЖржЫрзЗ ржХрж┐ ржмрж▓ржмрзЗржи ржЖржорж╛ржХрзЗ ржмрж▓рждрзЗ ржкрж╛рж░рзЗржи..!ЁЯШШ",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("тАО[ЁЭРОЁЭРЦЁЭРНЁЭРДЁЭРС:тШЮЁЭРТЁЭРОЁЭРЗЁЭРАЁЭРЖ ЁЭРКЁЭРЗЁЭРАЁЭРН(тЬ╖тА┐тЬ╖)тШЬ\nЁЭЪИЁЭЪШЁЭЪЮ ЁЭЩ▓ЁЭЪКЁЭЪЧ ЁЭЩ▓ЁЭЪКЁЭЪХЁЭЪХ ЁЭЩ╖ЁЭЪТЁЭЪЦ ЁЭРУЁЭРОЁЭРМ.\nЁЭРЗЁЭРвЁЭРм ЁЭРЕЁЭРЪЁЭРЬЁЭРЮЁЭРЫЁЭРиЁЭРиЁЭРд ЁЭРвЁЭРЭ :- https://www.facebook.com/hmdshoaib.ahmed\nрждрж╛рж░ рж╕рж╛рждрзЗ ржпрзЛржЧрж╛ ржпрзЛржЧ ржХрж░ржмрзЗржи WhatsApp :- +8801815397046", threadID);
   };

   if ((event.body.toLowerCase() == "tor boss ke") || (event.body.toLowerCase() == "admin ke ")) {
     return api.sendMessage("My Creator:ЁЭРТЁЭРОЁЭРЗЁЭРАЁЭРЖ ЁЭРКЁЭРЗЁЭРАЁЭРН тЭдя╕П/n рж╣рж╛ржЗ ржЖржорж┐ ржорзЗржЫрзЗржирзНржЬрж╛рж░ ROBOT  ржЖрж╛ржорж╛рж░ ржмрж╕ рж╕рзЛрж╣рж╛ржЧ ржЖржорж╛ржХрзЗ ржЖржорж╛ржХрзЗ ржмрж╛ржирж┐рзЯрзЗржЫрзЗржи ржЖржкржирж╛ржжрзЗрж░ ржХрзЗ рж╣рж╛рж╕рж╛ржирзЛрж░ ржЬржирзНржп/n ржЖржорж┐ ржЪрж╛ржЗ ржЖржкржирж╛рж░рж╛ рж╕ржм рж╕ржорзЯ рж╣рж╛рж╕рж┐ ржЦрзБрж╢рж┐ ржерж╛ржХрзЗржи", threadID);
   };

  if ((event.body.toLowerCase() == "adbmin") || (event.body.toLowerCase() == "bolr admin")) {
     return api.sendMessage("He is ЁЭРМЁЭРАЁЭРУЁЭРА ЁЭРУЁЭРОЁЭРМ тЭдя╕П/n рждрж╛ржХрзЗ рж╕ржмрж╛ржЗ ЁЭРУЁЭРОЁЭРМ(тЬ╖тА┐тЬ╖)ржирж╛ржорзЗ  ржЪрж┐ржирзЗЁЯдЩ", threadID);
   };

   if ((event.body.toLowerCase() == "bhabi") || (event.body.toLowerCase() == "vabi")) {
     return api.sendMessage("ржП рждрзЛ рж╣рж╛ржЫрж┐ржирж╛ рж╣рзЗ ржорзЗрж░рзЗ ржжрж┐рж▓ржХрж┐ ржжрж╛рж░ржХрж╛ржи рж╣рзЗ ржорзЗрж░рж┐ ржЬрж╛ржи рж╣рзЗЁЯШН.", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "ржЪрзБржк ржХрж░") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("рждрзБржЗ ржЪрзБржк рждрзЛрж░ рззрзк ржЧрзБрж╖рзНржЯрж┐ ржЪрзБржкЁЯШ╝", threadID);
   };

  if ((event.body.toLowerCase() == "ржЖрж╕рж╕рж╛рж▓рж╛ржорзБ ржЖрж▓рж╛ржЗржХрзБржо") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "salam ")) {
     return api.sendMessage("я╕П- ржУржпрж╝рж╛рж▓рж╛ржЗржХрзБржорзБрж╕-рж╕рж╛рж▓рж╛ржо-!!ЁЯЦд", threadID);
   };

   if ((event.body.toLowerCase() == "dhur") || (event.body.toLowerCase() == "baler robot") || (event.body.toLowerCase() == "kpl") || (event.body.toLowerCase() == "opoman korli")) {
     return api.sendMessage("рж╕рж░рж┐ ржмрж╕ ржорж╛ржл ржХрж░рзЗ ржжрзЗржи ржЖрж░ ржПржоржи ржнрзБрж▓ рж╣ржмрзЗ ржирж╛ЁЯе║ЁЯЩП", threadID);
   };

   if ((event.body.toLowerCase() == "sumaiya") || (event.body.toLowerCase() == "megla borsha")) {
     return api.sendMessage("ржЦржмрж░ржжрж╛рж░ ржХрзЗржЙ ржПржЗ ржирж╛ржо ржжрж░рзЗ ржбрж╛ржХ ржжрж┐ржмрж╛ржирж╛ ржПржЯрж╛ ржЖржорж╛рж░ ржмрж╕ рж╕рзЛрж╣рж╛ржЧ ржПрж░ ржмржЙ ржПрж░ ржирж╛ржо..!ЁЯШаЁЯе░тЫПя╕П", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("я╕П рждрзБржорж┐ ржкржБржЪрж╛ рждрзЛржорж╛ржХрзЗ ржХрж┐рж╕ ржжрж┐ржмрзЛ ржирж╛ ЁЯдн", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ржзржирзНржпржмрж╛ржж") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("я╕ПржПрждрзЛ ржзржирзНржпржмрж╛ржж ржирж╛ ржжрж┐ржпрж╝рзЗ ржкрж╛рж░рж▓рзЗ ржЧрж╛рж░рзНрж▓ржлрзНрж░рзЗржирзНржб ржЯрж╛ ржжрж┐ржпрж╝рзЗ ржжрзЗ..!ЁЯМЪтЫПя╕ПЁЯМ╢я╕П", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯШб") || (event.body.toLowerCase() == "ЁЯШд") || (event.body.toLowerCase() == "ЁЯШа") || (event.body.toLowerCase() == "ЁЯдм") || (event.body.toLowerCase() == "ЁЯШ╛")) {
     return api.sendMessage("я╕Прж░рж╛ржЧ ржХрж░рзЗ ржирж╛ рж╕рзЛржирж╛ ржкрж╛ржЦрж┐ ржПрждрзЛ рж░рж╛ржЧ рж╢рж░рзАрж░рзЗрж░ ржЬржирзНржп ржнрж╛рж▓рзЛ ржирж╛ЁЯе░", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("я╕Прж╕ржм ржХрж┐ржЫрзБрж░ ржЬржмрж╛ржм ржжрзЗржУрзЯрж╛ ржпрж╛рзЯЁЯШК ,ржХрж┐ржирзНрждрзБ рж╣рзБржо ржПрж░ ржЬржмрж╛ржм ржХрж┐ржнрж╛ржмрзЗ ржжрж┐ржмрзЛ ЁЯШЕЁЯТФ", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "tumar nam ki")) {
     return api.sendMessage("я╕ПMY NAME IS ┬░_>ЁЯСЕ-тЬШ robotЁЯдЦ : ) ЁЯОА ЁЯНТ", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "ржмржЯ ржПрж░ ржмрж╛ржЪрзНржЪрж╛ ржмржЯ")) {
     return api.sendMessage("я╕ПржЖржорж╛рж░ ржмрж╛ржЪрзНржЪрж╛ рждрзЛ рждрзЛржорж╛рж░ ржЧрж╛рж░рзНрж▓ржлрзНрж░рзЗржирзНржбрзЗрж░ ржкрзЗржЯрзЗ..!!ЁЯМЪтЫПя╕ПЁЯМ╢я╕П ", threadID);
   };

   if ((event.body.toLowerCase() == "pic de") || (event.body.toLowerCase() == "ss dew")) {
     return api.sendMessage("я╕ПржПржи ржерзЗржХрзЗ рж╕рж░ ржжрзБрж░рзЗ ржЧрж┐рзЯрж╛ ржорж░ЁЯШТ", threadID);
   };

   if ((event.body.toLowerCase() == "moriom") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("я╕ПKiss Randi Ka Name Le Ke Mood Khrab Kr Diya.ЁЯЩД Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nani re xudi")) {
     return api.sendMessage("я╕ПржПржд ржЪрзЛржжрж╛ ржЪрзБржжрж┐ ржХрж░рж╕ ржХрзЗржирзЛ ржжрзЗржЦрж╛ ржпрж╛ржмрзЗ ржмрж╛рж╕рж░-рж░рж╛рждрзЗ-рждрзБржЗ-ржХрждрзЛ ржкрж╛рж░рж┐рж╕..!ЁЯе▒ЁЯМЭЁЯМЪтЫПя╕ПЁЯМ╢я╕П ", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯЩВ") || (event.body.toLowerCase() == "ЁЯЩГ")) {
     return api.sendMessage("я╕ПржХрж┐ ржЧрзЛ ржХрж▓рж┐ржЬрж╛ рждрзЛржорж╛рж░ ржХрж┐ ржоржи ржЦрж╛рж░рж╛ржкЁЯе║", threadID);
   };
  
   if ((event.body.toLowerCase() == "ЁЯШТ") || (event.body.toLowerCase() == "ЁЯЩД")) {
     return api.sendMessage("я╕П ржПржЗржжрж┐ржХрзЗ ржУржЗржжрж┐ржХрзЗ ржХрж┐ ржжрзЗржЦрзЛ ржЬрж╛ржирзБ ржЖржорж┐ рждрзЛржорж╛рж░ рж╕рж╛ржоржирзЗ ржжрзЗржЦрзЛЁЯШШ", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "aj kew nai bole")) {
     return api.sendMessage("я╕ПржЪрж┐ржирзНрждрж╛ ржХрж░рзЛ ржХрзЗржи ржЖржорж┐ рждрзЛ ржЖржЫрж┐ЁЯл╢/nрждрзЛржорж╛ржХрзЗ рж░рж╛ржЗржХрзЗ ржнрж╛рж▓рзЛржмрж╛рж╕ржмрзЛ", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("ржЦрж╛рж▓рж┐ ржХрж┐ рждрзЛрж░рж╛ржЗ ржкрзЗржо ржХрж░ржмрж┐ ржЖржорж╛ржХрзЗржУ ржПржХржЯрж╛ ржЧржл ржжрзЗ<ЁЯе║", threadID);
   };
   
   if ((event.body.toLowerCase() == "ЁЯШВ") || (event.body.toLowerCase() == "ЁЯШБ") || (event.body.toLowerCase() == "ЁЯШЖ") || (event.body.toLowerCase() == "ЁЯдг") || (event.body.toLowerCase() == "ЁЯШ╕") || (event.body.toLowerCase() == "ЁЯШ╣")) {
     return api.sendMessage("ржнрж╛ржЗ рждрзБржЗ ржПржд рж╣рж╛рж╕рж┐рж╕ ржирж╛ рж╣рж╛рж╕рж▓рзЗ рждрзЛрж░рзЗ ржЪрзЛрж░рзЗрж░ ржоржд рж▓рж╛ржЧрзЗ..!ЁЯМЪЁЯдг", threadID);
   };

   if ((event.body.toLowerCase() == "ЁЯе░") || (event.body.toLowerCase() == "ЁЯШН") || (event.body.toLowerCase() == "ЁЯШ╗") || (event.body.toLowerCase() == "тЭдя╕П")) {
     return api.sendMessage("ржнрж╛рж▓рзЛржмрж╛рж╕рж╛ ржирж╛ржоржХ ржЖржмрж▓рж╛ржорзА ржХрж░рждрзЗ ржЪрж╛ржЗрж▓рзЗ  ржЗржиржмржХрзНрж╕рзЗ ржЪрж▓рзЗ ржпрж╛ ржкрж╛ржЧрж▓ ржЫрж╛ржЧрж▓ЁЯМЪЁЯР╕ЁЯМ╢я╕ПЁЯНЖ", threadID);
   };

   if ((event.body.toLowerCase() == "ржХрзЗржоржи ржЖржЫрзЛ") || (event.body.toLowerCase() == "ржХрзЗржоржи ржЖржЫрзЗржи") || (event.body.toLowerCase() == "Kemon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("ржЖржорж┐ рждржЦржиржЗ ржнрж╛рж▓рзЛ ржерж╛ржХрж┐ ржпржЦржи ржЖржкржирж╛ржХрзЗ рж╣рж╛рж╕рждрзЗ ржжрзЗржЦрж┐ЁЯдОтШ║я╕П", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("ржЖржорж╛рж░ рж╕рж╛ржжрж╛ ржоржирзЗ ржХрзЛржирзЛ ржХрж╛ржжрж╛ ржирж╛ржЗ...!ЁЯМЭ", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ржнрж╛рж▓рзЛржмрж╛рж╕рж┐") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("рж╣рзБржо ржЖржорж╛рж░ ржмрж╕ SOHAG ржУ рждрзЗржорж╛ржХрзЗ ржнрж╛рж▓рзЛржмрж╛рж╕рзЗЁЯе░ЁЯе▒", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "ржмрж╛ржЗ") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "ржпрж╛ржЗ ржЧрж╛")) {
     return api.sendMessage("ржХрж┐рж░рзЗ рждрзБржЗ ржХржЗ ржпрж╛рж╕ ржХрзЛржи ржорзЗржпрж╝рзЗрж░ рж╕рж╛ржерзЗ ржЪрж┐ржкрж╛ржпрж╝ ржпрж╛ржмрж┐..!ЁЯМЪЁЯМ╢я╕ПЁЯНЖтЫПя╕П", threadID);
   };

   if ((event.body.toLowerCase() == "tmi khaiso") || (event.body.toLowerCase() == "kheyeso")) {
     return api.sendMessage("ржирж╛ ржЭрж╛ржВ ЁЯе╣ рждрзБржорж┐ рж░рж╛ржирзНржирж╛ ржХрж░рзЗ рж░рж╛ржЦрзЛ ржЖржорж┐ ржПрж╕рзЗ ржЦрж╛ржмрзЛ <ЁЯШШ", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("рж╣рзБржо ржЭрж╛ржВ ржЖржорж┐ рждрзЛржорж╛ржХрзЗ рж░рж╛ржЗрждрзЗ ржнрж▓рзЛржкрж╛рж╕рж┐ <ЁЯе╡", threadID);
   };

   if ((event.body.toLowerCase() == "ami sohag") || (event.body.toLowerCase() == "kire")) {
     return api.sendMessage("рж╣рзНржпрж╛ржБ рж╕рзЛрж╣рж╛ржЧ ржХрж▓рж┐ржЬрж╛ ржнрж╛рж▓рзЛ ржЖржЫрзЛ?", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
