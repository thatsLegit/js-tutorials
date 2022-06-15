const moment = require('moment');

exports.formatMessage = (userName, text) => (
    {
        userName,
        text,
        date: moment().format('h:mm a')
    }
);