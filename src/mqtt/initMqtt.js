import mqtt from "mqtt/dist/mqtt";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const useMqttConnection = () => {
  const deviceInfo = useSelector((state) => state.user.targetDevice);
  const [client, setClient] = useState(false);
  const [connectStatus, setConnectStatus] = useState("");
  const [payload, setPayload] = useState("");

  const { host, port, endpoint, clientId, ...options } = {
    clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8),
    host: "panel.ema.co.ir",
    port: 15676,
    clean: true, // Reserved session
    protocolId: "MQTT",
    protocol: "mqtts",
    connectTimeout: 4000, // Time out
    reconnectPeriod: 4000, // Reconnection interval
    username: deviceInfo.mqtt_user,
    password: deviceInfo.mqtt_pass,
  };

  const urlMqtt = `wss://${host}:${port}/ws`;

  const mqttConnect = (host=urlMqtt, mqttOption=options) => {
    setConnectStatus("Connecting");
    setClient(mqtt.connect(urlMqtt, options));
  };

  useEffect(() => {
    mqttConnect();
  }, []);


  useEffect(() => {
    if (client) {
      console.log(client)
      client.on('connect', () => {
        setConnectStatus('Connected');
      });
      client.on('error', (err) => {
        console.error('Connection error: ', err);
        client.end();
      });
      client.on('reconnect', () => {
        setConnectStatus('Reconnecting');
      });
      client.on('message', (topic, message) => {
        const payload = { topic, message: message.toString() };
        setPayload(payload);
      });
    }
  }, [client]);

//   export const createConnection = () => {
//     const client = mqtt.connect(urlMqtt);
//     console.log(client);
//     client.on("connect", () => {
//       console.log("mqtt conected");
//     });
//     client.on("message", (topic, payload, packet) => {
//       console.log(topic, packet, payload);
//     });
//   };

return [client, connectStatus, payload ];
};

export default useMqttConnection;
