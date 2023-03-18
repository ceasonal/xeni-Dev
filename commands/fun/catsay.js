const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("catsay")
    .setDescription("Sends a cat image with text on it.")
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("The text you want to put on the cat image.")
        .setRequired(true)
    ),
  async execute(interaction) {
    const text = interaction.options.getString("text");
    const link = `https://cataas.com/cat/cute/says/${text}`;
    const embed = new EmbedBuilder()
      .setImage(link)
      .setTimestamp()
      .setColor("#A020F0");
    await interaction.reply({ embeds: [embed] });
  },
};
