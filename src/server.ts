import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { CronJob } from 'cron'
import dotenv from 'dotenv'
dotenv.config()

const token = process.env.TOKEN_TELEGRAM
// @ts-ignore
const bot = new Telegraf(token)

const job = new CronJob(
  '0 * * * * *', // cronTime
  sendMessage, // onTick
  null, // onComplete
  true, // start
)

async function sendMessage() {
  // @ts-ignore
  bot.telegram.sendMessage(process.env.CHAT_ID, 'Hello World')
  // bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
}
