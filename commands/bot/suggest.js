const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggest')
        .setDescription('send a seggestion for the bot to the bot owner.')
        .addStringOption(option => option.setName('suggest').setDescription('The suggestion you want to suggest.').setRequired(true)),
    async execute(interaction) {
        const suggest = interaction.options.getString('suggest');
        const embed = new EmbedBuilder()
            .setTitle('Suggestion')
            .setDescription(`Your suggestion has been recorded successfully!`)
            .setTimestamp()
            .setColor('#A020F0');
        await interaction.reply({ embeds: [embed] });
        const channel = interaction.client.channels.cache.get("enter channel ID");
        const embed2 = new EmbedBuilder()
            .setTitle('Suggestion')
            .setDescription(`${suggest}`)
            .setTimestamp()
            .setColor('#A020F0');
        await channel.send({ embeds: [embed2] });
    }
};
