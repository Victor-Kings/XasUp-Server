import MQTT from 'sp-react-native-mqtt';
import AsyncStorage from '@react-native-async-storage/async-storage';
var cli = null;

class MqttConnection {
    init(props, updateMsg, setVisualizedMsg, setNewFriend, attGroups) {
        console.log(MQTT);
        MQTT.createClient({
            uri: 'mqtt://192.168.5.108:1883',
            clientId: "id"+ Math.random().toString(16).substr(2, 8),
        }).then(client => {
            client.on('message', async(msg) => {
                const message = JSON.parse(msg.data);   
                console.log("CHEGOU NA LINHA 13", message)

                if(message.data.toString().includes("NEWGROUP_")){

                    const data = message.data.split("_")[1].split("+")
                    console.log(data);
                    attGroups(data[0], data[1])
                }else if(message.data=="NEW_FRIEND"){
                    setNewFriend({
                        originTopic: message.originTopic,
                        originName: message.originName
                    })
                }else if(message.data==`${message.originTopic}_Visualized`) {
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