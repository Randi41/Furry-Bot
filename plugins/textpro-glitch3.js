let fetch = require('node-fetch') 
let split = '|'
 let handler = async (m, { conn, usedPrefix: _p, text: txt, args, command }) => { 
    let dude = 'emror?'
let [text, ...text2] = txt.replace(dude, '').trimStart().split(split)
  text2 = text2.join(split)
if (!text) throw `Masukkan Teks
Contoh : ${_p}${command} Ziv San|Fory`
if (!text2) throw `Masukkan Teks
Contoh : ${_p}${command} Ziv San|Fory`
   m.reply('_Proses..._') 
   let res = `https://saipulanuar.ga/api/textpro/logo-wolf2?text=${text}&text2=${text}&apikey=xfoifVT7` 
   conn.sendFile(m.chat, res, `${command}`, wm3, m, false) 
 } 
 handler.help = ['logowolf'].map(v => v + '<text>') 
 handler.tags = ['textpro'] 
 handler.command = /^(logowolf)$/i 
  
 module.exports = handler
