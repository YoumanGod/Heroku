const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const express = require('express')
const app = express()
const port = 3000
const prefix = '$';
var botonline = false

//Enter Your Bot Token
const token = 'MTAzODMzNjY1OTQyMDM2ODkwNg.Gq7-5t.ayKr1GgnGr-1iHLzVFqlfQOgsfpZ9KKeC635n8';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase()

    //message array

    const messageArray = message.content.split(' ');
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //test
    if (command == 'test'){
        message.channel.send('Bot is working')
    }

    //start bot
    if (command == 'start'){
        botonline = true;
        message.channel.send('Bot Started')
    }

    //stop bot
    if (command == 'stop'){
        botonline = false;
        message.channel.send('Bot Stopped')
    }
})

// Express js 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/statusbot', (req, res) => {
  if(botonline){
    res.send("Online")
  }else{
    res.send("Offline")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

client.login(token);