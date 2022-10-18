# wanted_pre_onboarding

Notion Link : https://www.notion.so/Nodejs-622a7ecd3aca40b3978663c90d0a6f33

- Nodejs with typescript

1. 프로젝트 셋팅
[Node.js + TypeScript 프로젝트 만들기](https://offbyone.tistory.com/m/445)

1. 에러
- typeerror: _a.getmetadata is not a function
→ route쪽 Container.get에서 발생하는 에러로,


import "reflect-metadata";

reflect-metadata 추가로 해결

1. routes-controllers-services 패턴 서비스 테스트

1. swagger에서 post메소드 request body로 넘기는데 백엔드에서 req.body가 undefined임 postDataAsync
2. DB 컬럼명 컨벤션? 테이블명_컬럼명으로 하는게 맞나? 아니면 해당 컬럼의 이름만 하나?
3. sequelize쓸때 include 문에서 해당 Model의 조건문 받을 때, 첫 조회 Model에서 해당하는 id의 데이터를 조회 어떻게하지? getSearchedListAsync
4. 채용공고 상세페이지에서 채용공고 id 리스트 표시해주기? getDetailPostingAsync쪽에서 id를 list로 어떻게 가져올까
5. 사용자 채용공고 지원하기 개발 필요, 주석 작성 필요
