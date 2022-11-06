# wanted_pre_onboarding
Notion Link : https://www.notion.so/Nodejs-622a7ecd3aca40b3978663c90d0a6f33

## 1. 백엔드 프로젝트 구성

1-1) 서버 : Nodejs with typescript

[Node.js + TypeScript 프로젝트 만들기](https://offbyone.tistory.com/m/445)

1-2) DB : PostgreSQL

1-3) ORM : Sequelize ORM

1-4) Unit Test : Swagger 활용
![image](https://user-images.githubusercontent.com/90499822/196594661-dfdd7eb7-b617-44bf-a9a7-1e8d2f93c09c.png)


## 2. 에러 트러블 슈팅

- typeerror: _a.getmetadata is not a function
→ route쪽 Container.get에서 발생하는 에러로,

import "reflect-metadata";

reflect-metadata 추가로 해결

## 3. 개발 및 테스트 건

1) routes-controllers-services 패턴 서비스 테스트

2) swagger에서 post메소드 request body로 넘기는 부분 재확인

3) DB 컬럼명 Convention 확인

4) sequelize쓸때 include 문에서 해당 Model의 조건문 받을 때, 첫 조회 Model에서 해당하는 id의 데이터를 조회하는 부분 재확인? getSearchedListAsync

5) 공고 상세페이지에서 공고 id 리스트 표시해주기? getDetailPostingAsync쪽에서 id를 list로 가져오는 방법 확인

6) 사용자 공고 지원하기 개발 필요

