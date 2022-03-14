---
    date: "2021-05-01"
    category: "프로젝트"
    title: "신상마켓"
    description: "nuxt와 nest를 이용한 쇼핑몰 구현"
    image: "/project/nuxtStore/resize2.png"
---

<!-- #### 사이트 주소 -->
<img class="image" width="100%" src="/project/nuxtStore/project.png" style="border: 1px solid lightgray;">
<사이트 주소>
<h3>Frontend</h3>
<a style="color:blue;" href="https://nuxt-ecommerce-web.vercel.app/">https://nuxt-ecommerce-web.vercel.app/</a>
무료 백엔드 배포 사이트인 헤로쿠는 장시간 백엔드 서버를 이용하지 않을 경우 슬립 모드에 들어가 타임 아웃 문제가 발생할 수 있습니다.
그럴 경우 페이지 새로 고침이 필요합니다.

<h3>Backnd End Point</h3>
<a style="color:blue;" href="https://clotheapi123.herokuapp.com/">https://clotheapi123.herokuapp.com/</a>

백엔드를 통해서 의류 상품의 CRUD를 처리할 수 있습니다.
(Heroku에서 local storage를 지원하지 않아서 이미지 관련 저장을 추가로 적용할 계획입니다.)

## 이 사이트를 만든 이유
nuxt와 nest를 이용한 풀 스택으로 사이트를 개발하고 배포까지 어떻게 유지할 지 구현을 통해서 하고 싶었다.

### 개선할 점

composition api 를 적용해서 클린하게 구분되도록 작성

### 사용된 기술
- frontend : nuxtjs, vuex, scss
- backend : nestjs, mongoose
- database : mongodb

### 배포
- frontend : vercel
- backend : heroku
- database : mongo atlas


## 반응형 레이아웃

<div>스마트폰 사이즈</div>
<!-- <div class="image-container"> -->
<img class="image" width="50%" src="/project/nuxtStore/resize1.png" style="border: 1px solid lightgray;">
<!-- </div> -->

<div>타블렛 사이즈</div>
<img class="image" width="50%" src="/project/nuxtStore/resize2.png" style="border: 1px solid lightgray;">
    <!-- <img width="110%" src="/project/nuxtStore/project.png" style="border: 1px solid lightgray;"> -->

defulat layout의 flex 방향을 column으로 설정하고 device size가 확장됨에 따라 row로 변경하는 방법으로 구현했습니다.

## 간편 회원 가입 시스템
<img class="image" width="50%" style="object-fit:cover; height: 300px;" src="/project/nuxtStore/login.png">

oaouth2와 passport를 통해 각 사이트(구글/네이버/카카오)를 통한 회원 가입 기능을 구현 했습니다.
프론트 엔드에서 API 서버와 driect로 주고 받는 게 아니라 secret id는 백엔드가 관리하고
backend에서 access token을 발급하는 three legged flow를 통해 보안을 강화했습니다.

### 카테 고리별 정렬
상품은 크게 상의와 하의로 기본적으로 나뉘어지고, 카테고리로 세분적으로 나눠지며 상품마다 연관된 상품을 랜덤으로 4가지 추천해 줍니다. 

### 장바구니에 담기
vuex와 sestion storage를 통해서 새로고침을 해도 장바구니 리스트를 담도록 구현했습니다.
<img class="image" width="100%" src="/project/nuxtStore/cart.png" style="border: 1px solid lightgray;">
### 왜 이렇게 만드셨나요?
MEAN STACK 처럼 JAVASCRIPT만으로 프로젝트를 구현하므로써



<style>
    .image-container {
        /* position: */
        /* width: 60vw; */
        /* height: 40em; */
        /* border: 1px solid; */
        /* overflow: scroll; */
        display: flex;
        flex-wrap: wrap;
        /* gap: 0.4em; */
        justify-content: center;
    }
    .image {
        flex: 1 0 250px;
        margin: 0.4em;
        object-fit: contain;
    }
</style>