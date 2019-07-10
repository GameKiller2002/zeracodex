const commando = require('discord.js-commando');
const bot = new commando.Client({
    commandPrefix: "!!"
});

bot.on("ready", function(){
    bot.user.setPresence({
        game: {
            name: 'Music',
            type: 'PLAYING'
        },
        status: 'online'
    });
    console.log("bot is online");
});

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('general', 'General');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = [];

bot.login(process.env.NDY2OTk1NTc0MTc3MDA1NTgy.XSXFHg.JqpAoC4AK28ICK071PwxJny9XxM);