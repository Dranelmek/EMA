const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embedtest")
    .setDescription("Returns an embed"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`This is an embed`)
      .setDescription("description of the embed")
      .setColor(0xb00b69)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: `https://www.twitch.tv/lentimez`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag
      })
      .setURL(`https://www.patreon.com/devdrane`)
      .addFields([
        {
            name: `Field 1`,
            value: `Field value 1`,
            inline: true
        },
        {
            name: `Field 2`,
            value: `Field value 2`,
            inline: true
        }
      ]);

      await interaction.reply({
        embeds: [embed]
      })
  },
};
