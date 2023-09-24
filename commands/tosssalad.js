const interactionHandlers = require('../modules/interaction-handlers.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tosssalad')
        .setDescription('Generate a tossed salad from everyone\'s quotes!')
        .addIntegerOption(option =>
            option.setName('size')
                .setDescription('size of the salad - 1 (small), 2 (medium), or 3 (large)')
                .setMinValue(1)
                .setMaxValue(3)
                .setRequired(false)
        )
        .addStringOption(option =>
            option.setName('author')
                .setDescription('the author\'s salad who needs tossed.')
                .setRequired(false)),
    async execute (interaction, guildManager) {
        await interactionHandlers.wordcloudHandler(interaction);
    }
};
