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
        message.channel.sendMessage("Liste des commandes: \n _help \n waifu \n Who are you?");
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
        .addField("Nom du discord", message.guild.name)
        .addField("Crée le", message.guild.createAt)
        .addField("Tu as rejoins le", message.member.joinedAt)
        .addField("Utilisateurs sur le discord", message.guild.memberCount)
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)
    }
    
});
