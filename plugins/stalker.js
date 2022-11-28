let fetch = require('node-fetch') 
let split = '|'
 let handler = async (m, { conn, usedPrefix: _p, text: txt, args, command }) => { 
    let dude = 'emror?'
let [text, ...text2] = txt.replace(dude, '').trimStart().split(split)
  text2 = text2.join(split)
if (!text) throw `Masukkan Teks
Contoh : ${_p}${command} id ml`
if (!text2) throw `Masukkan Teks
Contoh : ${_p}${command} server id ml`
   m.reply('_Proses..._') 
   let res = `https://saipulanuar.ga/api/stalk/ml?id=${text}&server=${text}&apikey=xfoifVT7` 
   conn.sendFile(m.chat, res, `${command}`, wm3, m, false) 
 } 
 handler.help = ['mlstalk'].map(v => v + ' <id>|<server>') 
 handler.tags = ['textpro'] 
 handler.command = /^(mlstalk)$/i 
  
 module.exports = handler
