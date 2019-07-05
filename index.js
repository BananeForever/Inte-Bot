const discord = require("discord.js")
const client = new discord.Client()
const embed = new discord.RichEmbed()
const config = require("./config.json")
let prefix = "/"
const bot = new discord.Client()
const { get } = require ("snekfetch")





client.login(config.token)

client.on("ready", () => {
    console.log("Connecté !")
    client.user.setStatus("dnd")
    client.user.setActivity("Karma Simulator", {type: "PLAYING"})

})

bot.on('message', function (message) {
    let commandUsed =
    Play.parse(message)
})













client.on("message", message => {
    if(message.content === "Bonjour") {
    message.channel.send("Bonjour Madame")
    }
    if(message.content === "Je suis plus fort que toi") {
        let embed = new discord.RichEmbed()
        .setTitle("Jte prouve le contraire !")
        .setColor("RANDOM")
        .setTimestamp()
        .addField("Je le sais c'est tout :)")
        message.channel.send(embed)
    }
    if(message.content === "bonjour") {
        message.channel.send("Aurevoir")
    }
    if(message.content === prefix + "thugette") {
        message.channel.send("wilmew là plu phorte dût Warfare , qui nique ce cochon de Pandwag")
    }
    
})


client.on("message", message => {
    if(message.content === prefix + "ntm") {
    message.channel.send("Merci mais j'ai déjà nettoyé ta maison")
    }
})

client.on("message", message => {
    if(message.content === prefix + "boot") {
    message.channel.send("Je suis en train de hack son pc patiente et tu auras tous ses cheat instalé sur son pc ! Maître je suis trop forte !! Tien : 88.3.188.166")
    }
    if(message.content === prefix + "pd") {
    message.channel.send("Merci mais je suis un pedo beer pas un pd :)")
    }
    if(message.content === prefix + "pc") {
    let embed = new discord.RichEmbed()
    .setTitle("Scky a déjà mangé toute ses pc !?!")
    .setColor("RANDOM")
    .setTimestamp()
    .addField("Il doit déjà en racheté 3 stack lol")
    message.channel.send(embed)
    }
    if(message.content === prefix + "boot jetho") {
        message.channel.send("BOOT en cours... étape n°1 réussi... étape n°2 réussi étape n°3 réussi ! Bon courage !")
        }
})

client.on("message", message => {
    if(message.content === "fdp") {
    message.reply("Nous ne sommes pas toi ^^")
    }
    
})

client.on("message", message => {
    if(message.content === prefix + "help") {
    let embed = new discord.RichEmbed()
    .setTitle("Voici les différente commandes :")
    .setColor("RANDOM")
    .setTimestamp()
    .addField("Il y a le /help")
    .setFooter("Banane")
    .addField("Il y a le /boot")
    message.channel.send(embed)

    }
})

client.on("message", message => {
    if(message.content === "slt") {
    message.reply("ben a+ alors")
    }
    if(message.content === prefix + "profile pandwag") {
        message.channel.send("https://rinaorc.com/player/PanDwaG")
    }

    if(message.content === prefix + "profile happy210") {
        message.channel.send("https://rinaorc.com/player/happy210")
    }
    
    if(message.content === "neko") {
        message.channel.send("https://images.discordapp.net/avatars/333388886732701696/cde6bb781ec3280b9efa66da7fda331c.png?size=512")

    }
    if(message.content === "zaka") {
        message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUhGkxKz7nF5M8mVL8NHYWl7TOJhzktjFs5O2u4Mv85E3lIDY")

    }
})

client.on("message", message => {
    if(message.content === "a+")
    message.reply("A jamais !")

})

client.on("message", message => {
    if(message.content === "ah"){
    message.channel.send("https://i.kym-cdn.com/photos/images/newsfeed/001/305/803/48d.png")
    }
    if(message.content === "aurevoir") {
        message.channel.send("Bye Bye bro")
    }
    if(message.content === "Aurevoir") {
        message.channel.send("Bye Moucheron !")
    }
    if(message.content === "Bienvenue") {
        message.channel.send("Bienvenue sur Daison zōjiki")
    }
    if(message.content === "Qui est la plus kawaii ?") {
        message.channel.send("https://wall.alphacoders.com/big.php?i=638263")
    }
    if(message.content === "Discord") {
        message.channel.send("https://discord.gg/EXyDbzS")
    }
    if(message.content === prefix + "boot happy210") {
        message.reply("désolé, cette action est inpossible car sa protection est impénétrable il a résussi a retourné le boot cont... m...  (Inteligent bot was Disconnected)")

    }
    
})

client.on("message", message => {
    if(message.content === "ping") {
        message.channel.send("Pong !")
    }
})




