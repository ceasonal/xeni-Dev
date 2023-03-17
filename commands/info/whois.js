const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.')
		.addUserOption(option => option.setName('user').setDescription('The user\'s information to display')),
	async execute(interaction) {
		const user = interaction.options.getUser('user') || interaction.user;
		const embed = new EmbedBuilder()
		.setTitle(`${user.username}'s information`)
		.setDescription(`**Username:** ${user.username}\n**Discriminator:**${user.discriminator}\n
		                **ID:** ${user.id}\n**Avatar:** [Link to avatar](${user.displayAvatarURL({ dynamic: true })})\n
						**Created at:** ${user.createdAt}\n**Joined at:** ${interaction.guild.members.cache.get(user.id).joinedAt}\n
						**Bot:** ${user.bot}\n`)
		.setThumbnail(user.displayAvatarURL({ dynamic: true }))
		.setTimestamp()
		.setColor('#A020F0');
		await interaction.reply({ embeds: [embed] });
	}
}

