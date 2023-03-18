const quiz = require('./onepiece.json');
const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('onepiece')
		.setDescription('Test your knowledge!'),
	async execute(interaction) {
		const item = quiz[Math.floor(Math.random() * quiz.length)];
		const filter = response => {
			return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
		};
		const embed = new EmbedBuilder()
			.setImage(item.question)
			.setTimestamp()
			.setColor('#A020F0');
			await interaction.reply({ embeds: [embed] });
			interaction.channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] })			
					.then(collected => {
						const embed = new EmbedBuilder()
						.setDescription(`${collected.first().author} got the correct answer!`)
			            .setTimestamp()
			            .setColor('#A020F0');
						interaction.followUp({ embeds: [embed] });
					})
					.catch(collected => {
						const embed = new EmbedBuilder()
						.setDescription(`Looks like nobody got the answer this time. it was ${item.answers}`)
			            .setTimestamp()
			            .setColor('#A020F0');
						interaction.followUp({ embeds: [embed] });
					});			
	},
};
