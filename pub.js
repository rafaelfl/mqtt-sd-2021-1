const mqtt = require('mqtt');

const pub = mqtt.connect('mqtt://test.mosquitto.org');

pub.on('connect', () => {
    const meuVotoId = Date.now().toString();

    pub.publish('votosId', meuVotoId);
    // pub.publish('votos', meuVotoId);

    pub.end();
});
