const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('high-five')
		.setDescription('high-five someone!')
        .addUserOption(option => option.setName("target").setDescription("The user mentioned")),

	async execute(interaction) {

            highfiveLinks = [
                'https://gifdb.com/images/high/gon-and-killua-high-five-wlegdw1egx7o840n.gif',
                'https://media.tenor.com/TLs2q6CGdu4AAAAC/haikyu-hinata.gif',
                'https://media.tenor.com/Ajl4l3PWf8sAAAAC/high-five-anime.gif',
                'https://media.tenor.com/JBBZ9mQntx8AAAAC/anime-high-five.gif',
                'https://1.bp.blogspot.com/-zCYOY8ef-Ro/WfUW-iO8Y5I/AAAAAAAA-MM/uQYRw57PmYM_pjl8kJQDAs1EKLB_-2CKgCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BLove%2BLive%2521%2BSunshine%2521%2521%2BS2%2B-%2BEpisode%2B4%2B-%2BYoshiko%2BMari%2BHigh%2BFive.gif',
                'https://i.pinimg.com/originals/fc/b1/44/fcb1446b74166b0860ace50ed8b33686.gif',
         ]
            
            const randomNum = Math.floor(Math.random() * Math.floor(highfiveLinks.length))

            const user = interaction.options.getUser("target")

            if (user != interaction.user && user != null){
                const userEmbed = new EmbedBuilder()
                    .setTitle(`${user.username} you have been high-fived by ${interaction.user.username} !`)
                    .setImage(highfiveLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")
             

                await interaction.reply({ embeds: [userEmbed]})
            }
            else if(user == interaction.user){
                const userEmbed = new EmbedBuilder()
                    .setTitle(`Aww, I see you are lonely, here have a high-five <3`)
                    .setImage(highfiveLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")
               

                await interaction.reply({ embeds: [userEmbed]})
            }
            
            else {
                const userEmbed1 = new EmbedBuilder()
                    .setTitle(`${interaction.user.username} high-fived all !`)
                    .setImage(highfiveLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")

                await interaction.reply({ embeds: [userEmbed1]})
            }
	},
};