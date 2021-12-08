const Kafka = require('no-kafka');
const mqtt = require('mqtt')
const axios = require('axios')
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
    console.log("CHEGOU NA LINHA 19 DO KAFKA")
    messageSet.forEach(async function (m) {
        const message = JSON.parse(m.message.value.toString('utf8'))
        console.log(message);
        console.log(`${message.topic}`);
        console.log(message.data);

        const payload = {
            originTopic: message.originTopic,
            data: message.data,
            originName: message.originName
        }

        console.log("message.topic: ", message.topic)
        if(message.topic.includes('_GROUP')){
            const newTopic = message.topic.split("_")[0]
            console.log("newTopic", newTopic);
            const {data} = await axios.get(`http://192.168.5.108:3333/group/findUserInGroup/${newTopic}`)
            console.log("Data", data);
            
            const payload = {
                originTopic: message.topic,
                data: message.data,
                originName: message.originName
            }
            
            data.forEach((element)=>{
                if(element.id!= message.originTopic){
                    client.publish(`${element.id}`,JSON.stringify(payload), { qos: 0, retain: false }, (error) => {
                        if (error) {
                            console.error(error)
                        }
                    })
                }
            })
        } else {
            client.publish(`${message.topic}`,JSON.stringify(payload), { qos: 0, retain: false }, (error) => {
                if (error) {
                    console.error(error)
                }
            })
        }

    });
};

return consumer.init().then(function () {
    return consumer.subscribe('connect-custom', data);
});