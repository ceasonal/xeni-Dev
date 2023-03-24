const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kiss')
		.setDescription('kiss someone!')
        .addUserOption(option => option.setName("target").setDescription("The user mentioned")),

	async execute(interaction) {

            kissLinks = [ 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzczMmFiYjdlOWNlOTdjMmY1OWE4YmQwZjRkMzI4OTcwMDcxYmQzYyZjdD1n/G3va31oEEnIkM/giphy.gif',
                'https://media.tenor.com/6N4fuTkgpRIAAAAC/enage-kiss-anime-kiss.gif',
                'https://media.tenor.com/lfKCNuFHfCsAAAAC/anime-kiss.gif',
                'https://media.tenor.com/8ZcxRredX44AAAAC/kiss-anime.gif',
                'https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-10.gif',
                'https://media.tenor.com/UX4wztDOm8wAAAAC/anime-kiss.gif',
                'https://animesher.com/orig/0/84/848/8485/animesher.com_kiss-gif-otp-848572.gif',
         ]
            
            const randomNum = Math.floor(Math.random() * Math.floor(kissLinks.length))

            const user = interaction.options.getUser("target")

            if (user != interaction.user && user != null){
                const userEmbed = new EmbedBuilder()
                    .setTitle(`${user.username} you have been kissed by ${interaction.user.username} <3`)
                    .setImage(kissLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")
             

                await interaction.reply({ embeds: [userEmbed]})
            }
            else if(user == interaction.user){
                const userEmbed = new EmbedBuilder()
                    .setTitle(`Aww, I see you are lonely, take a kiss <3!`)
                    .setImage(kissLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")
               

                await interaction.reply({ embeds: [userEmbed]})
            }
            
            else {
                const userEmbed1 = new EmbedBuilder()
                    .setTitle(`${interaction.user.username} sends kisses to all <3`)
                    .setImage(kissLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")

                await interaction.reply({ embeds: [userEmbed1]})
            }
	},
};
