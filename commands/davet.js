const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["invite"],
  description: "Yardım Komutu",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("Nota Music İnvite ")
      .setDescription( "[Beni Sunucuna Almak İçin Tıkla](https://discord.com/oauth2/authorize?client_id=761942960685711380&scope=bot&permissions=8)")
      .setColor("#F8AA2A");
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};

