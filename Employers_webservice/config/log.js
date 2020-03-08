var winston = require('winston');
var Logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)
      ({ filename: 'views/pages/employer_logs.ejs', level: 'info' }),
    new (winston.transports.Console)
      ({
        level: 'debug',
        colorize: true
      })
  ]
})

module.exports.log = {
  custom: Logger,
  level: 'info',
};
