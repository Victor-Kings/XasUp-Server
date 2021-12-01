import MQTT from 'sp-react-native-mqtt';
var cli = null;

class MqttConnection {
    init(props, updateMsg, setVisualizedMsg) {
        console.log(MQTT);
        MQTT.createClient({
            uri: 'mqtt://192.168.0.103:1883',
            clientId: "id"+ Math.random().toString(16).substr(2, 8),
        }).then(client => {
            client.on('message', msg => {
                const message = JSON.parse(msg.data);   
                if(message.data==`${message.originTopic}_Visualized`) {
                    setVisualizedMsg(message.originTopic.toString())
                }else {
                    var currentTime = new Date();
                    currentTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
                    const newMsg = {
                        user: 1,
                        time: currentTime,
                        content: message.data,
                        name: message.originName
                    }
                    updateMsg(
                        message.originTopic.toString(),
                        newMsg,
                        message.originTopic.toString().includes("_GROUP") ? true : false
                    )
                }
            });
            client.on('connect', function () {
                console.log('connected');
                client.subscribe(props.topic, 0);
                cli = client;
            });
            client.connect();
        })
    }   

  sendMessage(topic, message) {
    console.log('payload', JSON.stringify(message));
    cli.publish(topic, JSON.stringify(message), 0, true);
  }
}

var MqttController = new MqttConnection();

export default MqttController;