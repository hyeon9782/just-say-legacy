import axios from "axios";

const useTextToSpeech = async ({
  ssml = "This your coffee. Enjoy it! Take your time",
  lang_code = "en-US",
  voice_name = "en-GB-Wavenet-A",
  feeling = "happy", // normal/sad/angry/happy 중 하나. 기본값은 normal
  volume = 10.0,
  speaking_rate = 1,
}) =>
  await axios.post(
    "https://api.just-say.net/api/v1/tts",
    {
      ssml,
      lang_code,
      voice_name,
      feeling,
      volume,
      speaking_rate,
    },
    {
      // responseType: "arraybuffer", // responseType 설정 추가 테스트를 위해 잠시 삭제
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    }
  );

export default useTextToSpeech;
