# 원티드 프리온보딩 인턴십 프론트엔드 과제 - Week 3

## 🔨 이름: 이재호

## 🔨 프로젝트 실행 방법

### 1. Git clone 및 폴더 이동

[제이든 - 원티드 프리온보딩 인턴십 프론트엔드 사전과제 repo](https://github.com/JaydenLee1116/wanted-internship-w3)로 이동하여 `clone` 합니다.

```shell
# Code - HTTPS clone 예시
git clone https://github.com/JaydenLee1116/wanted-internship-w3.git
# 폴더 이동
cd wanted-internship-w3
```

### 2. 패키지 설치 및 실행

```shell
# 패키지 설치
npm install
# 실행
npm start
```

> 🔑 참고: MSW를 사용하여 `http://localhost:4000`에서 API를 제공합니다. 따로 서버를 실행할 필요없이 위의 과정대로 `npm start`를 실행하면 됩니다.

## 🔨 프로젝트 구현 핵심 내용

### 1. API 호출에 대한 캐싱 처리 + expired time 설정

1. cache와 cache를 update하기 위한 함수를 분리하고 각각을 Context API를 사용하여 전역에서 공유토록 하였습니다.
2. 이 때, cache는 `Map`을 사용하여 key-value 형태로 저장하였습니다.
   1. 프로젝트 특성상, 검색어에 따른 GET 요청만 존재하여, 쿼리 파라미터인 `검색어`를 key로 하고 응답받은 데이터를 value로 하였습니다.
3. 또한, cache는 직접적으로 UI 렌더링과 관련되지 않으면서 그 값을 유지해야하므로 `useRef`를 사용하여 저장하였습니다.
4. updateCache 함수의 인자로 `expired time`을 받고, 이를 `setTimeout`과 Map의 `delete` 메서드를 사용하여 주어진 시간 이후에 cache를 삭제하도록 하여 stale cache를 방지하였습니다.

> 참고: `/src/context/CacheContext`와 `/src/hooks/useGetQuery`

### 2. 검색어 입력마다 API가 호출되지 않도록 debounce 처리

1. 처음엔 utils 폴더에 debounce 함수를 구현하여 데이터를 fetch하는 함수를 debounce 처리하였습니다.
   1. 하지만, fetch 함수 자체가 비동기 함수인 만큼 debounce 함수를 사용하여도 비동기 함수가 호출되는 것을 막을 수 없었습니다.(이미 데이터 요청에 대한 비동기 이벤트가 발생한 상태이므로)
2. 고민하던 중, `useGetQuery` 함수 자체에서 캐싱되지 않고 api 요청으로 넘어가는 경우에만 데이터를 fetch하는 함수를 `setTimeout`으로 일정 시간 뒤에 실행시키고 cleanup 함수로 `clearTimeout`을 호출하여 debounce 기능을 구현하였습니다.

> 참고: `/src/hooks/useGetQuery` (아래는 해당 부분의 코드입니다.)

```ts
const timeOutId = setTimeout(async () => {
  await getData();
}, DEBOUNCE_DELAY);

return () => {
  clearTimeout(timeOutId);
};
```

### 3. 키보드만으로 추천 검색어 이동

- 구현 및 작성 예정입니다.
