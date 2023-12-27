# :runner: Be health

#### **<a href="https://behealth-bcab3.web.app/" target="_blank">:point_right:<u>배포페이지 바로가기</u></a>**
사람은 그 존재만으로도 거대한 데이터를 가지고 있는 존재입니다. 신체 데이터, 다양한 분야의 취향, 습관 등 각 개인의 행동에 따라 수많은 데이터가 쌓이게 됩니다.

이번 프로젝트에서는 그 정보 들 중 <b>건강</b>이란 주제에 맞춰, 초점을 맞춰, 운동 시간 관리, 근처 병원·약국 정보, 복용 약의 부작용 등의 관련 정보를 전달하는 웹 사이트를 제작했습니다.

Be health는 Firebase를 이용해 회원가입과 로그인 기능을 구현하여, 개인화 된 데이터를 관리합니다. 추가적으로, 일반적인 정보를 제공하기 위해 공공데이터 포털에서 제공하는 open API를 활용했습니다.

## :link:목차

- [개요](#개요)
- [사용된 기술](#사용된-기술)
- [프로젝트 규칙](#프로젝트-규칙)
- [주요 기능](#주요-기능)
- [후기](#후기)

## 📂개요

- 프로젝트: Be health :running:
- 제작기간: 23.11.28 - 23.12.24
- 기여도: 팀작업 / 70%
<table>
  <tbody>
    <tr>
      <td><a href="https://github.com/saemii-24"><img src="https://github.com/saemii-24/BeHealth/assets/139088277/87e1f0d8-e840-44cd-8763-4b02c0a602ff" style="height: 150px; width:150px" alt=""/><br /><sub><b>FE 팀장 : @saemii-24</b></sub></a><br /></td>
      <td><a href="https://github.com/nuunnunn"><img src="https://github.com/saemii-24/BeHealth/assets/139088277/71cea4fe-5817-4df7-b4fc-6100413b8798" style=" height: 150px;width:150px"alt=""/><br /><sub><b>FE 팀원 : @nuunnunn </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

## ⚙️사용된 기술

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/AXIOS-5A29E4?style=for-the-badge&logo=AXIOS&logoColor=white" > <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">

## 💻주요 기능

<table style="width:100%">
  <tr>
    <th style="width:300px">회원가입, 로그인</th>
    <th style="width:300px">근처 병원 찾기</th>
    <th style="width:300px">약 부작용 검색</th>
    <th style="width:300px">관련 건강 정보</th>
  </tr>
  <tr>
    <td><img src="https://github.com/saemii-24/BeHealth/assets/139088277/d7a980c7-4eee-4898-bf49-6ecb256e75f1" alt="회원가입, 로그인" width="300px"></td>
    <td><img src="https://github.com/saemii-24/BeHealth/assets/139088277/8ac0d973-1a06-4d01-90ca-830039d52af8" alt="근처 병원 찾기" width="300px"></td>
    <td><img src="https://github.com/saemii-24/BeHealth/assets/139088277/ffb61534-9332-44dd-8449-f83403037d61" alt="약 부작용 검색" width="300px"></td>
    <td><img src="https://github.com/saemii-24/BeHealth/assets/139088277/1d2ecbef-09d0-4e80-99ab-9df786a0d4dc" alt="관련 건강 정보" width="300px"></td>
  </tr>
</table>

<table style="width:100%">
  <tr>
    <th style="width:300px">일정 추가</th>
    <th style="width:300px">해당 날짜의 일정 표시</th>
    <th style="width:300px">프로필 추가</th>
    <th style="width:300px">BMI 계산</th>
  </tr>
  <tr>
    <td><img src="https://github.com/saemii-24/BeHealth/assets/139088277/856ba8ee-6411-4642-af5c-5fae795b6de0" alt="일정 추가" width="300px"></td>
    <td><img src="https://github.com/saemii-24/BeHealth/assets/139088277/6b17ef20-253d-4b7c-9d04-f411d731a984" alt="해당 날짜의 일정 표시" width="300px"></td>
    <td><img src="https://github.com/saemii-24/BeHealth/assets/139088277/0da2d331-7b1a-430d-9f46-818cac1b27b5" alt="프로필 추가" width="300px"></td>
    <td><img src="https://github.com/saemii-24/BeHealth/assets/139088277/eb87b29a-c528-4a56-9a23-d0100d32a871" alt="BMI 계산" width="300px"></td>
  </tr>
</table>

## 🗂️프로젝트 규칙

### 📌Commit Convention

#### ✅Header

<table>
  <tr>
    <th>Type</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>Init</td>
    <td>프로젝트 초기 생성</td>
  </tr>
  <tr>
    <td>Feat</td>
    <td>새로운 기능 추가</td>
  </tr>
  <tr>
    <td>Fix</td>
    <td>오류 수정</td>
  </tr>
  <tr>
    <td>Design</td>
    <td>CSS 수정</td>
  </tr>
  <tr>
    <td>Style</td>
    <td>기능이 아닌 코드 포맷팅, 세미콜론 수정 등</td>
  </tr>
    <td>Rename</td>
    <td>파일·폴더 이름 수정, 위치 변경</td>
  </tr>
  <tr>
    <td>Remove</td>
    <td>파일 삭제</td>
  </tr>
  <tr>
    <td>Chore</td>
    <td>그 외의 변경사항</td>
  </tr>
</table>

#### ✅Footer

<table>
  <tr>
    <th>Issue Tracker</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>Fixes</td>
    <td>이슈 수정 중</td>
  </tr>
  <tr>
    <td>Resolves</td>
    <td>이슈 해결 완료</td>
  </tr>
  <tr>
    <td>Ref</td>
    <td>참조할 이슈</td>
  </tr>
  <tr>
    <td>Related to</td>
    <td>연관된 이슈</td>
  </tr>
</table>

### 📌Git Flow

<table>
  <tr>
    <th>branch name</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>main</td>
    <td>출시 단계의 최종 브랜치</td>
  </tr>
  <tr>
    <td>develop</td>
    <td>버전 개발 브랜치</td>
  </tr>
  <tr>
    <td>feature</td>
    <td>기능별 브랜치</td>
  </tr>
</table>

## 📝후기
이번 프로젝트는 크게, <u>**Firebase, openAPI활용, git Flow와 github의 협업 기능**</u>을 공부할 수 있는 프로젝트 였습니다.

1. **Firebase**
   사용자의 이메일 주소를 이용해 간단히 회원가입 기능을 구현할 수 있었습니다. Firestore에서 제공하는 DB를 통해, 개별 uid로 구별되는 사용자의 정보를 개인화 하고, 사용자가 업데이트 한 정보를 실시간으로 받아와 렌더링 할 수 있었습니다.
2. **Open API**
   공공데이터 포털의 Open API와 Axios를 통해 데이터를 요청하고 응답받을 수 있었습니다. 응답받은 데이터를 렌더링 하는 과정에서 발생할 수 있는 다양한 예외사항을 고려하고, 각 상황에서 사용자에게 '정보가 없음', 또는 '로딩 중' 등 적절한 내용을 표시할 수 있었습니다.
3. **협업**
   정해진 규칙을 준수하며 협업하자 서로 어떤 작업을 했었는지 쉽게 파악할 수 있었고, 충돌이 발생하는 일이 줄었으며, 원활하게 하나의 프로젝트를 완성할 수 있었습니다.
