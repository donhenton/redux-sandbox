


var uuid = require('uuid4');
module.exports =
        {
            

            clone: function (r)
            {
                return JSON.parse(JSON.stringify(r));
            },

            generateTempQueueName: function ()
            {
                return 'tq-' + uuid();
            },

            getRandomInt: function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },

           




        }