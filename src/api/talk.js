import { instance } from ".";

const callGPTAPI = (payload, place) => {
    console.log("callGPTAPI >>>>>>>>>> ", payload, place)
    var last_payload = {
      'message' : payload,
      'place' : place
    }
    return instance.post(`api/v1/gpt`, last_payload, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
}

const callTTSAPI = (payload) => {
  console.log("callTTSAPI >>>>>>>>>> ", payload)
    return instance.post(`api/v1/tts`, payload, {
      responseType: "arraybuffer", // responseType 설정 추가
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
};

export { callGPTAPI, callTTSAPI };