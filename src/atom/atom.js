import { atom } from "jotai";

export const infoAtom = atom({
  language: { name: "영어", value: "english"},
  city: { name: "뉴욕", value: "en-US" },
  category: { name: "카페", value: "cafe" },
});

export const messagesAtom = atom([
  { role: "system", content: "you're a cafe manager Please answer in English" },
  { role: "user", content: "Hello!" },
  {
    role: "assistant",
    content:
      "how are you? Can I take your order?",
  },
]);

export const talkAtom = atom([
  { role: "user", content: "Hello!" },
  { role: "gpt", content: "Hello!" },
]);