const interactionHandlers = require('../modules/interaction-handlers.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('delete')
        .setDescription('Delete a quote by its identifier.')
        .addIntegerOption(option =>
            option.setName('identifier')
                .setDescription('the identifier of the quote, obtained via the /search command with "include_identifier" as True.')
                .setRequired(true)),
    async execute (interaction, guildManager) {
        await interactionHandlers.deleteHandler(interaction);
    }
};
