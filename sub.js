/*
 Sistema de votação em duas fases

 Fase 1: envio do id da votação, informando sua intenção de votar
 Fase 2: confirmação por meio do id da votação

 OBS: o mapa de votos precisa ser periodicamente limpo, sob risco de um
 ataque na votação visando esgotar os recursos do servidor
*/

// mqtt://test.mosquitto.org
const mqtt = require('mqtt');

// implemente um subscriber mqtt
const sub = mqtt.connect('mqtt://test.mosquitto.org');

const bd = {
    qtVotos: 0,
    votosMap: {},
};

sub.on('connect', () => {
    sub.subscribe('votosId', (err) => {
        if (!err) {
            console.log('Escutando mensagens no tópico "votosId"!');
        }
    });

    sub.subscribe('votos', (err) => {
        if (!err) {
            console.log('Escutando mensagens no tópico "votos"!');
        }
    }); 
});

sub.on('message', (topic, message) => {
    let idVotacao;

    switch (topic) {
        case 'votosId':
            idVotacao = message.toString();

            bd.votosMap[idVotacao] = true;

            console.log("checkout do id de votação:" + idVotacao);
            break;

        case 'votos':
            idVotacao = message.toString();

            // se não for nulo, a pessoa já mandou a msg na fase 1
            if (bd.votosMap[idVotacao] != null) {
                bd.votosMap[idVotacao] = null;
                bd.qtVotos++;
                console.log(`${bd.qtVotos} votos recebidos`);
            } else {
                console.log(`Voto não confirmado: ${idVotacao}`);
            }

            break;

        default:
            console.log("por que mesmo eu recebi essa mensagem???");
    }
});
