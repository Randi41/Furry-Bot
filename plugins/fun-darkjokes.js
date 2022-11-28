let handler = async (m, { conn, usedPrefix, command }) => {
    let res = 'https://saipulanuar.ga/api/darkjoke?apikey=xfoifVT7'
conn.sendButtonVid(m.chat, vid, 'kurang gelap?', wm, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['asupan']
handler.tags = ['fun']

handler.command = /^(asupan)$/i

module.exports = handler