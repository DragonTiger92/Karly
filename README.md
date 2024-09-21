# Project 'Karly'

## 개요

[Market Kurly](https://www.kurly.com/main)를 레퍼런스로 제작한 Market Karly의 피그마 시안을 바탕으로 Vanilla JS 기술만을 이용해서 제품을 제작하는 프로젝트

## 특징

- JavaScript 뿐만 아니라 CSS도 **보조 라이브러리 사용 X**

- **Semantic mark-up** 및 WEI-ARIA 등을 이용한 **웹 접근성** 고려

- `스크럼 프로세스`를 차용하여 프로젝트 진행

## 기술 스택

`Vite`, `Git`, `GitHub`, `HTML5`, `CSS3`, `JavaScript`, `PocketBase`, `Visual Studio`, `GitHub Pages`

## 팀 구성

멋쟁이사자처럼 프론트엔드 스쿨 8기 수강생 4명으로 구성

### 송현규

- 역할 : **팀장**

- 담당 업무 : 회원가입 페이지, 로그인 페이지 제작

### 김용범

- 역할 : **스크럼 마스터**

- 담당 업무 : 제품 목록 페이지 및 제품 상세 페이지 제작, 발표 자료 컨텐츠 제작, 발표

### 박예진

- 역할 : **서기**

- 담당 업무 : 노션 관리, 헤더 컴포넌트 및 메인 페이지 제작, 발표 PPT 제작

### 조유나

- 역할 : **총무**

- 담당 업무 : 푸터 컴포넌트와 장바구니 페이지 제작, README 작성

## 프로젝트 자료

### 배포 링크

- :rocket: [https://dragontiger92.github.io/Karly/](https://dragontiger92.github.io/Karly/)

  - `Test ID`: water222, `pw`: 123456!

### 기타

- :file_folder: **[기능 정의서](https://docs.google.com/spreadsheets/d/1u4vWIQy6U2TnrtsBtA_hJqDMsRjy-KHzLwP8ZNa05DE/edit?usp=sharing)**

## 프로젝트 협업 툴

- [GitHub](https://github.com/FRONTENDSCHOOL8/Karly)

  - `Issues & Milestones` : 일정 관리 및 백로그 생성

  - `Pull Requests`

    - Template를 만들어 PR 품질 향상 제고

  - `Projects`

    - Table을 생성하여 backlog 관리

  - `Wiki` : 데일리 스크럼 등 회의 내용 관리

- **Discord**

  - 보이스 채널을 사용하여 실시간 소통

  - `Webhooks` 기능을 이용하여 GitHub issue, PR 생성 등의 업데이트 사항을 실시간으로 공유

- [Notion](https://www.notion.so/Vanilla-Project-Karly-10335633cd8c80b99ae6f526752d06ef?pvs=4) : 프로젝트 목표 및 트러블 슈팅 방법, 기능 정의서 등을 올려놓아 쉽게 필요한 자료에 접근할 수 있도록 운용

## 컨벤션

### 코딩 컨벤션

#### HTML

- Naming convention : `Snake Case`

- `XHTML 1.0` 문법

- Chrome extension `Web Developer`로 HTML validation

- `headingsMap`으로 mark-up의 추상 체계 및 접근성 관점에서의 headings 적절성 여부 점검

- `Indentation`: 2 spaces

#### JavaScript

- Naming convention : `camelCase`

- 설정한 `Prettier` 규칙을 통해 formatting

- 설정한 `ESLint` 규칙을 통해 linting

### 커밋 컨벤션

- `Prefix`로 커밋의 종류 명기

  - `[add]` : 추가

  - `[modify]` : 수정

  - `[complete]` : 완료

- Prefix를 제외한 commit message는 `한글`로 작성

### GitHub 이슈 라벨 컨벤션

- `bug` : 버그 이슈

- `documentation` : 문서 작업과 관련된 이슈

- `duplicate` : 중복된 이슈

- `enhancement` : 기존 기능 향상

- `feature` : 새로운 기능 추가

- `in progress` : 현재 진행 중인 작업

- `invalid` : 유효하지 않은 이슈

- `needs review` : 리뷰가 필요한 상태

- `on hold` : 작업 중지 상태

## 제품 소개

### 헤더 및 메인 페이지

- **박예진** 담당

|                                                        헤더                                                        |
| :----------------------------------------------------------------------------------------------------------------: |
| ![a220b1cc15bda619](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/90678356-2517-434d-9dc3-f3f579b2dc03) |

- 최상단 배너 닫기

- `고객센터` hover 시 버블 나타내기

- Scroll 시 fixed nav 나타내기

- 카테고리 영역 scroll bar 나타내기

|                                                        메인                                                        |
| :----------------------------------------------------------------------------------------------------------------: |
| ![a220b1cc15bda619](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/de349f73-2246-4b9f-af69-fff307d4e7f8) |

|                                              배너 캐러셀                                               |
| :----------------------------------------------------------------------------------------------------: |
| ![메인](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/4a90a96e-f308-4d98-b9be-cf32cd4d99a6) |

|                                         상품 캐러셀 타입 1                                          |
| :-------------------------------------------------------------------------------------------------: |
| ![3](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/71a8dfbe-b1eb-4f2a-8988-f8dc07a0dd1b) |

|                                           상품 캐러셀 타입 2                                            |                                               최근본상품                                                |
| :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| ![메인2](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/f3d056e9-c4a9-4beb-af34-00fbcb0b7cb6) | ![메인4](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/983b57b9-b5cb-44c7-96b6-cfbd6a675d9e) |

### 로그인, 회원가입 페이지

- **송현규** 담당

|                                       로그인 - 아이디 유효성 검사                                        |                                      로그인 - 비밀번호 유효성 검사                                       |
| :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
| ![login1](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/10b8d4fe-9294-441b-a712-081ce9f8fb0e) | ![login7](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/8150f15c-3949-40b0-8afc-d75180d065d4) |

|                                               로그인 기능                                                |                                       회원가입 - 이메일 중복 검사                                        |
| :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
| ![login6](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/24b99a26-6db1-4497-b760-e8f936f1251e) | ![login4](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/32702723-b1d2-4947-b413-638edf35decb) |

|                                             새로운 회원 생성                                             |                        회원가입 - 아이디 유효성 검사, 회원가입 - 아이디 중복 검사                        |
| :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
| ![login2](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/edfe5408-63e7-4474-9aef-998234e832f9) | ![login3](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/14139e2a-dc55-4352-b804-cdb826d6fad7) |

### 제품 목록 및 상세 페이지

- **김용범** 담당

|                                           제품 목록 페이지                                            |
| :---------------------------------------------------------------------------------------------------: |
| ![productListScreen](https://github.com/user-attachments/assets/9c69518d-2b07-4d64-8aac-a0ef4e6e893c) |

|                                                        제품 상세 페이지                                                        |
| :----------------------------------------------------------------------------------------------------------------------------: |
| ![Honeycam_2024-01-15_19-52-31](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/62c5c164-386a-4ae5-a552-ac486c4a152c) |

### 장바구니 페이지

- **조유나** 담당

|                                        장바구니 페이지                                         |
| :--------------------------------------------------------------------------------------------: |
| ![cartScreen](https://github.com/user-attachments/assets/79d8f566-9b09-4edd-b7a7-6e3a82d3b2b1) |

## 제작 일정

- **2024.1.4 ~ 2024.1.16**

|   일정    |           개발기간            |                 진행내용                 |
| :-------: | :---------------------------: | :--------------------------------------: |
|    1차    | 2024. 01. 04. ~ 2024. 01. 08. |   킥오프, HTML 마크업 및 CSS 스타일링    |
| 중간 점검 |         2024. 01. 09.         |             진행 내용 피드백             |
|    2차    | 2024. 01. 10. ~ 2024. 01. 15. | JS 작업 및 re-factoring, 배포, 발표 준비 |
| 데모 데이 |         2024. 01. 16.         |                   발표                   |

## 기타 사항

### 발표 자료

[![Project 'Karly' 발표 자료](https://github.com/FRONTENDSCHOOL8/Karly/assets/50475140/6b30bdb5-e9fe-4ecc-8cc2-d3d5c2c108ae)](https://docs.google.com/presentation/d/1DKqTBBRs951pF0c6P9nZ5QtY9kifBoBgmeiXymnqGH0/edit#slide=id.p1)

- 링크: [https://docs.google.com/presentation/d/1DKqTBBRs951pF0c6P9nZ5QtY9kifBoBgmeiXymnqGH0/edit#slide=id.p1](https://docs.google.com/presentation/d/1DKqTBBRs951pF0c6P9nZ5QtY9kifBoBgmeiXymnqGH0/edit#slide=id.p1)

### 의뢰인 요구 사항

- 슬라이드가 필요한 ui에서는 [**swiper.js**](https://swiperjs.com/)를 사용해주세요.

  - 각 슬라이드를 데이터로 받아 동적으로 렌더링 되도록 만들어주세요.

  - 슬라이드의 `prev`, `next` 버튼도 구현해주세요.

  - 키보드 키로도 작동되도록 구현해주세요.

- [localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)를 사용하여 “최근 본 항목”의 UI를 구성해주세요.

- “마이크로 애니메이션”이 필요하다면 추가해주세요.

- “회원가입 기능”을 구현해주세요.

  - 최소한 이메일, 비밀번호 입력 필드(`input`), 제출 버튼(`button`)을 가지도록 구성해주세요.

- 이메일과 비밀번호의 유효성을 확인합니다.

  - 이메일 조건 : 최소 `@`, `.` 포함

  - 비밀번호 조건 : 특수문자 포함 최소 6자 - 최대 16자

  - 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 구현해주세요.

- 회원가입을 통해 사용자(user)를 생성하고 관리합니다.

  - 데이터 통신을 통해 유저를 생성하고 관리해주세요

  - 유저의 회원을 탈퇴할 수 있는 기능을 구현해주세요

  - 로그인된 유저를 인식하여 UI를 다르게 랜더링해주세요

  - 로그인되지 않은 사용자면 회원가입 페이지로 리디렉션 시켜주세요

  - 회원가입시 중복된 유저가 있는지 체크해주세요

- 장바구니 기능을 구현해 주세요

  - 사용자가 장바구니에 항목을 담으면 장바구니 페이지에 랜더링이 되도록 구현해 주세요.
