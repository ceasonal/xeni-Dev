const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Hug someone!')
        .addUserOption(option => option.setName("target").setDescription("The user mentioned")),

	async execute(interaction) {

            hugLinks = [ 'https://33.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif',
                'https://media.tenor.com/kCZjTqCKiggAAAAC/hug.gif',
                'https://i.gifer.com/2QEa.gif',
                'https://i.pinimg.com/originals/6d/b5/4c/6db54c4d6dad5f1f2863d878cfb2d8df.gif',
                'https://aniyuki.com/wp-content/uploads/2022/06/anime-hugs-aniyuki-56.gif',
                'https://media.discordapp.net/attachments/815280862105960508/1088834387321290843/64f03bf7bf87ac3f.gif',
                'https://images-ext-2.discordapp.net/external/Tnl3YyHsl13FgxUQ3ggqZhlypdr7eaUbZdF7UeEnm4g/https/cdn.weeb.sh/images/BJ0sOOmDZ.gif'
         ]
            
            const randomNum = Math.floor(Math.random() * Math.floor(hugLinks.length))

            const user = interaction.options.getUser("target")

            if (user != interaction.user && user != null){
                const userEmbed = new EmbedBuilder()
                    .setTitle(`${user.username} you have been hugged by ${interaction.user.username} <3`)
                    .setImage(hugLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")
             

                await interaction.reply({ embeds: [userEmbed]})
            }
            else if(user == interaction.user){
                const userEmbed = new EmbedBuilder()
                    .setTitle(`Aww, I see you are lonely, take a hug <3!`)
                    .setImage(hugLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")
               

                await interaction.reply({ embeds: [userEmbed]})
            }
            
            else {
                const userEmbed1 = new EmbedBuilder()
                    .setTitle(`${interaction.user.username} opens arms to hug <3`)
                    .setImage(hugLinks[randomNum])
                    .setTimestamp()
                    .setColor("#A020F0")

                await interaction.reply({ embeds: [userEmbed1]})
            }
	},
};