let fetch = require('node-fetch') 
let split = '|'
 let handler = async (m, { conn, usedPrefix: _p, text: txt, args, command }) => { 
    let dude = 'emror?'
let [text] = txt.replace(dude, '').trimStart().split(split)
  text2 = text2.join(split)
if (!text) throw `Masukkan Teks
Contoh : ${_p}${command} Ziv San|Fory`
   m.reply('_Proses..._') 
   let res = `https://saipulanuar.ga/api/maker/kiriko-banner?text=${text}&apikey=xfoifVT7` 
   conn.sendFile(m.chat, res, `${command}`, wm3, m, false) 
 } 
 handler.help = ['naruto'].map(v => v + '<text>') 
 handler.tags = ['textpro'] 
 handler.command = /^(naruto)$/i 
  
 module.exports = handler
