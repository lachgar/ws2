var server = require('ws').Server;
var s = new server({port: 5002});
s.on('connection', function (ws) {
    try {
        ws.on('message', function (msg) {
            var tab = JSON.parse(msg);
            console.log(tab);
            while (tab.includes(0)) {
                var index = Math.floor((Math.random() * 10) + 1) - 1;
                console.log(index);
                if (tab[index] === 0) {
                    tab[index] = 2;
                    break;
                }
            }
            console.log(tab);
            ws.send(JSON.stringify(tab));
        });
    } catch (e) {
        console.log(e);
    }
});


