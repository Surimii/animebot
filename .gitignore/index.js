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
        var embed = new Discord.RichEmbed()
        .setTitle("HELP")
        .setDescription("Commands list:")
        .addField("_help","Print this message", true)
        .addField("_serverinfo","Print a resume of the server", true)
        .addField("_poll","AnimeBot-chan create a poll for you", true)
        .addField("waifu","Reveals AnimeBot-chan's true feelings", true)
        .addField("Who are you?","AnimeBot-chan presents herserlf", true)
    message.channel.sendEmbed
    }

    if (message.content === "waifu"){
        message.reply("you're already my waifu <3");
    }
    
    if (message.content === "Who are you?"){
        message.channel.sendMessage("I'm AnimeBot, nice to meet you ! ^^");
    }
    
    if (message.content === prefix + "serverinfo"){
        var embed = new Discord.RichEmbed()
            .setDescription("Server's info")
            .addField("Server's name", message.guild.name)
            .addField("Server owner", message.guild.owner)
            .addField("Server region", message.guild.region)
            .addField('Server created at:')
            .setTimestamp(message.guild.createdAt)
            .addField("Joined at", message.member.joinedAt)
            .addField("Users on the server (with bots)", message.guild.memberCount)
            .setColor("0xFF459F")
    message.channel.sendEmbed(embed)
    }
    
    if (message.content.startWith(prefix + "poll")){
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
            .setdescription("Poll")
            .addField(thingToEcho, "Answer with :white_check_mark: or :negative_squared_cross_mark:")
            .setColor("0xFF459F")
            .setTimestamp()
        message.guild.channels.find("name", "poll").sendEmbed(embed)
        .then(function (message) {
            message.react(":white_check_mark:")
            message.react(":negative_squared_cross_mark:")
        }).catch(function() {
        });
        
});
