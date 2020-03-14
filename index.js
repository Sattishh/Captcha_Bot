const Discord = require("discord.js");
const client = new Discord.Client();




client.on("ready", () => {
    let guild = client.users.size
    console.log(guild)
let statuses = ['In Development 🚧',';help | ;invite'];
    setInterval(function(){
        let status = statuses[Math.floor(Math.random()*statuses.length)];
        // using setPresence()
        client.user.setPresence({ game: { name:status},status: 'dnd' });
        // client.user.setPresence({ activity: { name: status }, status:'online' });

    }, 5000) // Runs interval every 5 seconds
});

client.on('message', message => {
        if (message.content.startsWith(';dm')) {
         message.author.send("You\'re a chicken buddy")
         message.channel.send("Sent you something :smirk:")
        }
        if (message.content === '95inb') {
            // Send "pong" to the same channel
            message.channel.send('Congratulations, that\'s the correct captcha. You will soon get the server role!');
            message.ch.send(';role')
        } 
        const ch = member.guild.channels.cache.find(ch => ch.name === 'join-channel');
        if (!ch) return;


    
});

client.on('guildMemberAdd', member => {
    member.send("Please fill this captcha to access the server");
    member.send("https://i.imgur.com/vyAxtWU.png")
  
     var role = message.guild.roles.find(role => role.id === "598880700074033212");
    
    message.member.addRole(role);

});
client.login(process.env.token)
