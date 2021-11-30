import MQTT from 'sp-react-native-mqtt';
var cli = null;

class MqttConnection {
    init(props, updateMsg , userMsg) {
        console.log(MQTT);
        MQTT.createClient({
            uri: 'mqtt://192.168.0.103:1883',
            clientId: "id"+ Math.random().toString(16).substr(2, 8),
        }).then(client => {
            client.on('message', msg => {
                const message = JSON.parse(msg.data);   
                console.log("messageaaaaa",message,message.data);
                var currentTime = new Date();
                currentTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
                const newMsg = {
                    user: 1,
                    time: currentTime,
                    content: message.data,
                }
                console.log("\n\n\nAUICHEGOU SIM \n\n\n", `${message.originTopic}`,newMsg);
                console.log(userMsg)
                updateMsg(
                    message.originTopic.toString(),
                    newMsg
                )
            });
            client.on('connect', function () {
                console.log('connected');
                client.subscribe(props.topic, 0);
                cli = client;
            });
            client.connect();
        }).finally(()=>{console.log(".....................:", userMsg)});
    }   

  sendMessage(topic, message) {
    console.log('payload', JSON.stringify(message));
    cli.publish(topic, JSON.stringify(message), 0, true);
  }
}

var MqttController = new MqttConnection();

export default MqttController;