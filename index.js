const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {
  console.log('준비됐다');
  client.user.setActivity('ㄴ 도움말')
});

client.on('message', message => {
  if (message.content === 'ㄴ 도움말') {
    message.channel.send('ㄴ (대화말) | ㄴ 개발자 | ㄴ 대화말 보기');
  }
  if (message.content === 'ㄴ 개발자') {
    message.channel.send('봇 개발자 : 네즈')
  }
  if (message.content === 'ㄴ 대화말 보기') {
    message.channel.send('(접두사: ㄴ) 안녕 | 넌 누구야? | 놀아줘 | 추가예정')
  }
  if (message.content === 'ㄴ 안녕') {
    message.channel.reply('안녕하세요!')
  }
  if (message.content === 'ㄴ 넌 누구야?') {
    message.channel.send('네즈님이 만드신 봇이에요. 삐리. 삐리릭.')
  }
    if (message.content === 'ㄴ 놀아줘') {
      message.channel.send('싫은데')
  }
});

client.login('NzQyNjI4OTQ5NzEyMDQ0MDcy.XzI5Gg.oyX6g976UjGoIpUWFXGpv4KARKI');
