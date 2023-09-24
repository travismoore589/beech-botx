module.exports = {
    INVALID_FORMATTING: 'Your command had invalid formatting!',
    AUTHOR_ARG_REQUIRED: 'You must specify an author to list quotes from.',
    ADD_SUCCESS: 'Your quote was saved successfully.',
    DELETE_SUCCESS: 'The quote was successfully removed.',
    NOTHING_DELETED: 'There is no quote with that identifier, so nothing was deleted.',
    DUPLICATE_QUOTE: 'Too slow, an identical quote by this person has already been saved!',
    GENERIC_ERROR: 'There was a problem saving your quote. Please try again later!',
    GENERIC_RETRIEVAL_ERROR: 'There was a problem retrieving the specified quotes.',
    INCORRECT_AUTHOR_SYNTAX: "Invalid command. The author's name can only contain letters and spaces.",
    QUOTE_COUNT_0: 'There are no quotes saved!',
    GENERIC_ERROR_COUNT_COMMAND: 'There was a problem getting the number of quotes. Please try again later!',
    NO_QUOTES_BY_AUTHOR: 'There are no quotes stored by that author!',
    RANDOM_QUOTE_GENERIC_ERROR: 'There was a problem getting a quote. Please try again later!',
    EMPTY_QUERY: 'There were no quotes found matching your search.',
    QUERY_TOO_GENERAL: 'Your search returned more than ' + require('./constants.js').MAX_SEARCH_RESULTS + ' results. Try narrowing your search.',
    SEARCH_RESULT_TOO_LONG: 'Your search returned results, but returning them all would exceed Discord\'s 2000 character limit for messages.' +
    ' You can either narrow your search, or you can always download saved quotes using the `/download` command.',
    GENERIC_INTERACTION_ERROR: 'There was an error while executing this command!',
    HELP_MESSAGE: '**About:**\n\nThis is a bot for adding quotes and revisiting them later. Save a quote with `/save`.' +
        ' The author can be a mention of a user in the server (e.g. @leosmmmv) or simply a name (Leo). The quotation can be ' +
        'entered as it is - there is NO NEED to wrap it in quotation marks.\n\n' +
        'Find quotes with `/search`. You can enter a word or phrase, and the bot will give you the quotes that match. ' +
        'This is not case-sensitive. There is an option called `include_identifier` which, if sent as true, will return a numerical' +
        ' ID for each quote. This is used with the `/delete` command to remove a quote from those saved. You can then resave that quote in the case that there was a typo (@kovuscar).\n\n' +
        'Pull random quotes with `/quote`.\n\n' +
        'You can receive all the quotes you have saved at any time using `/download`.\n\n' +
        'To delete a quote, you must first search for it with the `include_identifier` ' +
        'option as `true`. This will return an integer ID for the quote. Then, provide that ID to the `/delete` command.\n\n' +
        'You can also generate a "wordcloud" type visualization of quotes said by everyone using `/tosssalad`.\n\n' +
        '**Privacy Policy:**\n\n' +
        'Quotes added in a particular server can only be retrieved by users in that server. ' +
        'The bot uses an SSL connection to store your quotes in a password-protected database. Only the bot and its ' +
        'creator have access. Quotes (but not the names of their authors) are stored with encryption. The data is only' +
        ' used for this bot and its associated commands.'
};
