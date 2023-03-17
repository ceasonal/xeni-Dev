const { SlashCommandBuilder,  EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
		async execute(interaction) {
			const embed = new EmbedBuilder()
			.setDescription(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`)
			.setTimestamp()
			.setColor('#A020F0');
			await interaction.reply({ embeds: [embed] });
		}
};
