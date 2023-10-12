# Just say

## 새로운 기술 스택으로 리팩토링 & 마이그레이션 진행 중입니다. (<a href="https://github.com/hyeon9782/just-say">링크</a>)

## Project Description
- AI와 대화하며 회화 연습을 하는 웹입니다.

## Directory Structure
```
src
 ┣ api
 ┃ ┣ common
 ┃ ┃ ┗ interceptors.js
 ┃ ┣ index.js
 ┃ ┗ talk.js
 ┣ assets
 ┃ ┣ cafe.json
 ┃ ┣ language-backup.json
 ┃ ┣ language.json
 ┃ ┗ react.svg
 ┣ atom
 ┃ ┗ atom.js
 ┣ components
 ┃ ┣ common
 ┃ ┃ ┣ Back.jsx
 ┃ ┃ ┣ Container.jsx
 ┃ ┃ ┣ Dialog.jsx
 ┃ ┃ ┣ Loading.jsx
 ┃ ┃ ┣ SuggestedAnswersPanel.jsx
 ┃ ┃ ┣ Toast.jsx
 ┃ ┃ ┗ tooltip.jsx
 ┃ ┣ dialog
 ┃ ┃ ┣ EndDialog.jsx
 ┃ ┃ ┣ MenuDialog.jsx
 ┃ ┃ ┗ TalkDialog.jsx
 ┃ ┣ TalkButton.jsx
 ┃ ┗ TTS.jsx
 ┣ hooks
 ┃ ┣ useFetchPrompt.js
 ┃ ┣ useSpeechToText.js
 ┃ ┗ useTextToSpeech.js
 ┣ pages
 ┃ ┣ CityPage.jsx
 ┃ ┣ LanguagePage.jsx
 ┃ ┣ LoadingPage.jsx
 ┃ ┣ MainPage.jsx
 ┃ ┣ ReadyPage.jsx
 ┃ ┣ ResultPage.jsx
 ┃ ┣ SituationPage.jsx
 ┃ ┗ TalkPage.jsx
 ┣ App.jsx
 ┣ index.css
 ┗ main.jsx
```

## Project Information
## Getting Started / Installation
### Install Dependencies
```
npm install
```

### Run in Development Environment
```
npm run dev
```

## Tech Stack
### Client
- JavaScript
- React
- Vite
- react-router-dom
- Recoil
- Styled-components

### Server
- Python
- FastAPI

## Project Results
- 마이크 테스트 기능
- AI와 영어로 대화하는 기능
- 대화 내용 다시보기 기능
- 답변 추천 기능
