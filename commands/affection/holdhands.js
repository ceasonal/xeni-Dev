const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('holdhands')
		.setDescription('hold hands with someone!')
        .addUserOption(option => option.setName("target").setDescription("The user mentioned")),

	async execute(interaction) {

            holdhandsLinks = [
                'https://media.tenor.com/WUZAwo5KFdMAAAAC/love-holding-hands.gif',
                'https://media.tenor.com/BPJqBueNYdoAAAAC/couple-anime.gif',
                'https://media.tenor.com/58PKyK5xlIoAAAAC/anime.gif',
                'https://i.kym-cdn.com/photos/images/original/001/216/390/133.gif',
                'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGMwMmIxOTAwMjZhN2QwNDI1Y2FhNGViN2VmMmM3NGMwMmIxYzBmZiZjdD1n/iMJwjtL5GLxPYWMob3/giphy.gif',
                'https://giffiles.alphacoders.com/178/178659.gif',
         ]
            
            const randomNum = Math.floor(Math.random() * Math.floor(holdhandsLinks.length))

            const user = interaction.options.getUser("target")

            if (user != interaction.user && user != null){
                const userEmbed = new EmbedBuilder()
                    .setTitle(`${user.username} and ${interaction.user.username} hold hands <3`)
                    .setImage(holdhandsLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")
             

                await interaction.reply({ embeds: [userEmbed]})
            }
            else if(user == interaction.user){
                const userEmbed = new EmbedBuilder()
                    .setTitle(`Aww, I see you are lonely, lets hold hands <3`)
                    .setImage(holdhandsLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")
               

                await interaction.reply({ embeds: [userEmbed]})
            }
            
            else {
                const userEmbed1 = new EmbedBuilder()
                    .setTitle(`${interaction.user.username} holds your hands`)
                    .setImage(holdhandsLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")

                await interaction.reply({ embeds: [userEmbed1]})
            }
	},
};