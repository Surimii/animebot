const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("_")

bot.on('ready', function(){
    bot.user.setGame("with master|_help");
    console.log("Connected");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Commands list: \n _help \n waifu \n Who are you? \n _info");
    }

    if (message.content === "waifu"){
        message.reply("you're already my waifu <3");
    }
    
    if (message.content === "Who are you?"){
        message.channel.sendMessage("I'm AnimeBot, nice to meet you ! ^^");
    }
    
    if (message.content === prefix + "info"){
        var embed = new Discord.RichEmbed()
        .setDescription("Information du Discord")
        .addField("Server's name", message.guild.name)
        .addField("Create at", message.guild.createAt)
        .addField("Joined at", message.member.joinedAt)
        .addField("Users on the server", message.guild.memberCount)
        .setColor("0xFF459F")
    message.channel.sendEmbed(embed)
    }
    
});
