import axios from "axios";
const useTextToSpeech = async ({
  ssml = '<speak> <voice name="en-GB-Wavenet-A">This your <emphasis level="moderate">coffee.</emphasis></voice> <break time="1s"/>Enjoy it! <prosody rate="slow" pitch="-2st">Take your time</prosody> </speak>',
  lang_code = "en-US",
  pitch = 0,
  volume = 10.0,
  speaking_rate = 1,
}) =>
  await axios.post(
    "https://api.just-say.net/api/v1/tts",
    {
      ssml,
      lang_code,
      pitch,
      volume,
      speaking_rate,
    },
    {
      responseType: "arraybuffer", // responseType 설정 추가
      'Access-Control-Allow-Origin': "*"
    }
  );

export default useTextToSpeech;
