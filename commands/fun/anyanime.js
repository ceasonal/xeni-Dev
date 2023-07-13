const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const anyanime = require("anyanime");
anyanime.checkUpdate(true);
module.exports = {
  data: new SlashCommandBuilder()
    .setName("anyanime")
    .setDescription("Search for an anime image or gif")
    .addStringOption((option) =>
        option
            .setName("type")
            .setDescription("Type of image/gif")
            .setRequired(true)
            .addChoices({
                name: "Image",
                value: "image",  
            })
            .addChoices({
                name: "Gif",
                value: "gif",
            })
        ),
    async execute(interaction) {
        const type = interaction.options.getString("type");
        if(type === "image"){
            const image = await anyanime.anime();
            const embed = new EmbedBuilder()
            .setTitle("Anime Image")
            .setImage(image)
            .setTimestamp()
            .setColor("#A020F0");
            await interaction.reply({ embeds: [embed] });
        }
        else if(type === "gif"){
            const gif = await anyanime.animeGif();
            const embed = new EmbedBuilder()
            .setTitle("Anime Gif")
            .setImage(gif)
            .setTimestamp()
            .setColor("#A020F0");
            await interaction.reply({ embeds: [embed] });
        }
    },
};
