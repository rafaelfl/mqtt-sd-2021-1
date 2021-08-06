# mqtt-sd-2021-1

- MQTT
  - *Message Queuing Telemetry Transport*
  - Protocolo de mensagens leve para sensores e pequenos dispositivos móveis, otimizado para redes TCP/IP
  - Padrão OASIS
  - Protocolo de mensagens para Internet das Coisas (IoT)
  - *Middleware* Publish/Subscribe
  - Projetado em cima de um protocolo de mensagens extremamente leve sob o paradigma pub/sub
  - Lista de *brokers* MQTT públicos: [Lista de Brokers](https://github.com/mqtt/mqtt.org/wiki/public_brokers)
  - Diferentes níveis de QoS:
    Mais infos: [Quality of Service 0,1 & 2 - MQTT Essentials](https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels/)
    - At most once (0)
    ![QoS0](https://www.hivemq.com/img/blog/qos-levels_qos0.svg)

    - At least once (1)
    ![QoS1](https://www.hivemq.com/img/blog/qos-levels_qos1.svg)

    - Exactly once (2)
    ![QoS2](https://www.hivemq.com/img/blog/qos-levels_qos2.svg)

  - Segurança do protocolo:
    - plain MQTT
    - MQTT over TLS
    - MQTT over TLS (with client certificate)
    - MQTT over WebSockets
    - MQTT over WebSockets with TLS

  - Implementações (*broker* e bibliotecas clientes)
    - [MQTT Software](https://mqtt.org/software/)

  ![Arquitetura MQTT](https://upload.wikimedia.org/wikipedia/commons/6/63/Estrutura_padr%C3%A3o_publish-subscriber.png)
