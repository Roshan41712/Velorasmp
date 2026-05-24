
const mineflayer = require('mineflayer')

function startBot() {

const bot = mineflayer.createBot({
host: 'Velorasmptemp.aternos.me',
port: 16037,
username: 'AashaBot'
})

bot.on('spawn', () => {
console.log('Bot online')
})

bot.on('playerJoined', (player) => {
if (player.username === bot.username) return

setTimeout(() => {
bot.chat(`Welcome to VeloraSMP ❤️🫂 ${player.username}`)
}, 2000)
})

bot.on('end', () => {
console.log('Reconnect...')

setTimeout(() => {
startBot()
}, 5000)
})

bot.on('error', console.log)

}

startBot()
