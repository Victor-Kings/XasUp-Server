# XasUp
#### Chat mobile com comunicação via mqtt

## Requisitos

- node -> https://nodejs.org/en/
- docker -> https://docs.docker.com/desktop/windows/install/
- vm device -> (recomendação) https://developer.android.com/studio
- (caso esteja em linux) docker-compose -> https://docs.docker.com/compose/install/#install-compose-on-linux-systems

## Executando

Vamos começar configurando o broker mqtt e o kafka.

Dentro do diretorio ```/backend``` rode o seguinte comando para subir o docker:

```sh
docker-compose up
```

Vamos configurar o kafka-connect, entrando no CLI do kafka-connect rode o seguinte comando:

```sh
confluent-hub install confluentinc/kafka-connect-mqtt:1.5.1
```
e siga o passo a passo de instalação.

No caminho onde se encontra o download: ```/usr/share/confluent-hub-components/lib```, faça a copia dos arquivos .jars para o seguinte diretorio ```/etc/kafka-connect/jars```.

E agora reiniciaremos o container do kafka-connect, então execute o comando:
```sh
 docker restart kafka-connect
 ```
 
 Agora vamos connectar o mosquitto a um topico do kafka, então dentro do diretorio ```/backend```, execute a seguinte curl:
 ```sh
 curl -d @configmqtt.json -H "Content-Type: application/json" -X POST http://localhost:8083/connectors
 ```

Também teremos que trocar o IP para o da máquina em questão, em qualquer terminal execute:
```sh
ipconfig
 ```
     Adaptador Ethernet Ethernet:                                                                                                                                                     Sufixo DNS específico de conexão. . . . . . : ------
    Endereço IPv6 de link local . . . . . . . . : ------
    Endereço IPv4. . . . . . . .  . . . . . . . : 192.168.0.109
    Máscara de Sub-rede . . . . . . . . . . . . : ------   
    Gateway Padrão. . . . . . . . . . . . . . . : ------      
 
Então pegue o endereço IPv4 e substitua nos seguintes arquivos:

- backend/kafkaClient.js 

Vamos aproveitar e substituir em todos arquivos necessários, incluindo do frontend, então também substitua em:
- frontend/mobile/src/services/mqttController.js
- frontend/mobile/src/services/User/UserService.js
- frontend/mobile/src/services/GroupService/GroupService.js
- frontend/mobile/src/services/FriendService/FriendService.js 
- frontend/mobile/src/services/Delete/Delete.js

Agora vamos rodar nossa api em node para isso precisamos antes subir um banco postgres, novamente dentro de ```/backend```, execute:
```sh
docker-compose up -f postgress.yml
```

Novamente dentro de ```/backend``` instalaremos as dependecias, então rode:
```sh
npm i
```

E finalmente em ```/backend``` vamos rodar:
```sh
node server.js && node kafkaClient.js
```

Pronto estamos com nosso backend rodando, vamos para o front agora:

Vamos instalar as dependencias do react-native então em ```/frontend```:
```sh
npm i
```

Com um emulador já executando, também em ```/frontend``` rode:
```sh
npx react-native start
```
**Ferramentas úteis e que foram utilizadas pra testes durante o desenvolvimento**
 - https://mqttx.app/
 - https://mosquitto.org/download/
 - https://kafka.apache.org/downloads

**Referências**
 - https://www.baeldung.com/kafka-connect-mqtt-mongodb
 - https://github.com/SudoPlz/sp-react-native-mqtt
 - https://mosquitto.org/

### Authors
- [Chistopher de Oliveira Souza](https://github.com/Christopher-OSouza)
- [Hiago da Silva](https://github.com/hiagomoa)
- [Leonardo Sanavio](https://github.com/LeoSanavio)
- [Murilo de Paula Araujo](https://www.github.com/murilodepa)
- [Victor Reis](https://github.com/Victor-Kings)

