const pool = require('./db');

module.exports = {

    fetchAllQuotes: (guildId) => {
        return query({
            text: `SELECT
                     id,
                     author,
                     said_at
                   FROM quotes WHERE guild_id = $2;`,
            values: [guildId]
        });
    },

    addQuote: (
        quote,
        author,
        guildId,
        saidAt = (() => {
            const now = new Date(Date.now());
            return (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
        })()
    ) => {
        return query({
            text: `INSERT INTO quotes VALUES (
                DEFAULT,
                $1,
                $2,
                $3,
                $4
            ) RETURNING
                id,
                quotation,
                author,
                said_at;`,
            values: [
                quote,
                author,
                saidAt,
                guildId,
                guildId.toLowerCase() + quote.toLowerCase() + author.toLowerCase()
            ]
        });
    },

    fetchUniqueAuthors: (guildId) => {
        return query({
            text: `SELECT DISTINCT author FROM quotes WHERE guild_id = $1;`,
            values: [
                guildId
            ]
        });
    },

    getQuotesFromAuthor: (author, guildId) => {
        return query({
            text: `SELECT
                     id,
                     quotation,
                     author,
                     said_at
                   FROM quotes WHERE author = $2 AND guild_id = $3;`,
            values: [
                author,
                guildId
            ]
        });
    },

    fetchQuoteCount: (guildId) => {
        return query({
            text: 'SELECT COUNT(*) FROM quotes WHERE guild_id = $1;',
            values: [guildId]
        });
    },

    fetchQuoteCountByAuthor: (author, guildId) => {
        return query({
            text: 'SELECT COUNT(*) FROM quotes WHERE author = $1 AND guild_id = $2;',
            values: [author, guildId]
        });
    },

    fetchQuotesBySearchString: (searchString, guildId) => {
        return query({
            text: `SELECT
                      id,
                      quotation,
                      author,
                      said_at FROM quotes
                   WHERE LOWER($2) LIKE LOWER($3) AND guild_id = $4;`,
            values: [
                '%' + searchString + '%',
                guildId
            ]
        });
    },

    deleteQuoteById: (id, guildId) => {
        return query({
            text: `DELETE FROM quotes WHERE id = $1 AND guild_id = $2 RETURNING
                     id,
                     quotation,
                     author,
                     said_at;`,
            values: [id, guildId]
        });
    }

};

function query (queryParams) {
    return new Promise((resolve, reject) => {
        pool.connect().then((client) => client.query(queryParams, (err, res) => {
            if (err) {
                client.release();
                reject(err);
            } else {
                client.release();
                resolve(res.rows);
            }
        })).catch((e) => {
            console.error(e);
            reject(new Error('The bot could not complete your request due to connection issues.'));
        });
    });
}
