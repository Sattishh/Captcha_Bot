const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
    console.log("Ready!");
    client.user.setStatus('dnd');
    client.user.setActivity(';help | ;invite', { type :3});
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Your bot is in ${client.guilds.size} servers!`)
    
    
})

client.on('message', message => {

})
client.login()
