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
   let res = `https://api.vhtear.com/logoml?hero=${text}&text=${text}&apikey=xfoifVT7` 
   conn.sendFile(m.chat, res, `${command}`, wm3, m, false) 
 } 
 handler.help = ['ml'].map(v => v + ' <hero>|<text>') 
 handler.tags = ['textpro'] 
 handler.command = /^(ml)$/i 
  
 module.exports = handler
