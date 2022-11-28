let fetch = require('node-fetch') 
let split = '|'
 let handler = async (m, { conn, usedPrefix: _p, text: txt, args, command }) => { 
    let dude = 'emror?'
let [text, ...text2] = txt.replace(dude, '').trimStart().split(split)
  text2 = text2.join(split)
if (!text) throw `Masukkan Teks
Contoh : ${_p}${command} .spam 62857.......`
   m.reply('_Proses..._') 
   let res = `https://saipulanuar.ga/api/hack/sms?query=${number}&apikey=xfoifVT7` 
   conn.sendFile(m.chat, res, `${command}`, wm3, m, false) 
 } 
 handler.help = ['spam'].map(v => v + '<nomor>') 
 handler.tags = ['random'] 
 handler.command = /^(spam)$/i 
  
 module.exports = handler
