const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('slap')
		.setDescription('slap someone!')
        .addUserOption(option => option.setName("target").setDescription("The user mentioned")),

	async execute(interaction) {

            slapLinks = [
                'https://media.tenor.com/XiYuU9h44-AAAAAC/anime-slap-mad.gif',
                'https://media.tenor.com/CvBTA0GyrogAAAAC/anime-slap.gif',
                'https://64.media.tumblr.com/1f24b0df1789bc346c97bfb765fa06cf/tumblr_psab9sW3IC1sk6fb9_1280.gif',
                'https://media.tenor.com/OuYAPinRFYgAAAAC/anime-slap.gif',
                'https://steamuserimages-a.akamaihd.net/ugc/800989528960924082/A32CD34F8A49C54E82624B395E49D8AC980188D0/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
                'https://reallifeanime.files.wordpress.com/2014/06/akari-slap.gif?w=640',
         ]
            
            const randomNum = Math.floor(Math.random() * Math.floor(slapLinks.length))

            const user = interaction.options.getUser("target")

            if (user != interaction.user && user != null){
                const userEmbed = new EmbedBuilder()
                    .setTitle(`${user.username} you have been slaped by ${interaction.user.username} :( `)
                    .setImage(slapLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")
             

                await interaction.reply({ embeds: [userEmbed]})
            }
            else if(user == interaction.user){
                const userEmbed = new EmbedBuilder()
                    .setTitle(`Aww, why did you slap yourself? :( `)
                    .setImage(slapLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")
               

                await interaction.reply({ embeds: [userEmbed]})
            }
            
            else {
                const userEmbed1 = new EmbedBuilder()
                    .setTitle(`${interaction.user.username} slapped all :( `)
                    .setImage(slapLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")

                await interaction.reply({ embeds: [userEmbed1]})
            }
	},
};
