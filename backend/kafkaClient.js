const Kafka = require('no-kafka');
const mqtt = require('mqtt')
const host = 'localhost'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  reconnectPeriod: 1000,
})

const consumer = new Kafka.SimpleConsumer({"connectionString":"127.0.0.1:29092"})
var data = function (messageSet) {
    messageSet.forEach(function (m) {
        const message = JSON.parse(m.message.value.toString('utf8'))
        console.log(message);
        console.log(`${message.topic}`);
        console.log(message.data);
        const payload = {
            originTopic: message.originTopic,
            data: message.data,
            originName: message.originName
        }
        client.publish(`${message.topic}`,JSON.stringify(payload), { qos: 0, retain: false }, (error) => {
            if (error) {
                console.error(error)
            }
        })
    });
};

return consumer.init().then(function () {
    return consumer.subscribe('connect-custom', data);
});