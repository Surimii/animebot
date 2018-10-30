const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("_")

bot.on('ready', function(){
    bot.user.setGame("with master");
    console.log("Connected");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n _help");
    }

    if (message.content === "waifu"){
        message.reply("Nadeko, no doubt");
    }
    
    if (message.content === "who are you?"){
        message.channel.sendMessage("I'm AnimeBot, nice to meet you ! ^^");
    }
});
