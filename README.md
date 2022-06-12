### 📌 할 일 관리(ToDoList) App

### 배포 사이트

https://dashing-blini-dd93ce.netlify.app/

https://user-images.githubusercontent.com/102017296/173235680-f214cfbc-f3b9-48e5-a010-2671ebbf389a.mov


#### 구현 기능

- 할 일 목록(list)을 조회(Read)할 수 있다.
- 할 일 항목(item)을 추가(Create)할 수 있다.
- 할 일 항목을 수정(Update)할 수 있다.
- 할 일 항목을 삭제(Delete)할 할 수 있다.
- 할 일을 완료하지 않은 항목과 완료한 항목을 탭별로 구분할 수 있다.

### 사용 기술 스택

- HTML
- CSS
- JavaScript


### 사용한 API

- 요청 주소(Endpoint): `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`

모든 API 요청(Request) `headers`에 아래 정보가 꼭 포함돼야 합니다!<br>
`username`은 `KDT2_ParkYoungWoong`와 같이 본명으로 만들어야 합니다!<br>
확인할 수 없는 사용자의 DB 정보는 임의로 삭제할 수 있습니다!<br>

```json
{
  "content-type": "application/json",
  "apikey": "FcKdtJs202204",
  "username": "<YOUR_NAME>"
}
```

### 목록 조회

전체 할 일 목록을 조회합니다.

```curl
curl -X 'GET' \
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
```

```plaintext
@return {Object[]} - 조회된 나의 할 일 목록
```

요청 데이터 예시:

```js
undefined;
```

응답 데이터 예시:

```json
[
  {
    "id": "mnIwaAPIAE1ayQmqekiR",
    "order": 0,
    "title": "JS 공부하기",
    "done": false,
    "createdAt": "2021-10-28T05:18:51.868Z",
    "updatedAt": "2021-10-28T05:18:51.868Z"
  },
  {
    "id": "tMzPImGoWtRdJ6yyVv2y",
    "order": 1,
    "title": "과제 PullRequest(PR) 생성",
    "done": true,
    "createdAt": "2021-10-28T04:16:53.980Z",
    "updatedAt": "2021-10-28T09:40:17.955Z"
  },
  {
    "id": "Rq8BebKihCgteHHhMIRS",
    "order": 2,
    "title": "API 스터디",
    "done": false,
    "createdAt": "2021-10-28T04:17:02.510Z",
    "updatedAt": "2021-10-28T04:17:02.510Z"
  }
]
```

### 목록 순서 변경

할 일 목록의 순서를 변경합니다.

```curl
curl -X 'PUT' \
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/reorder
```

```plaintext
@param {String[]} todoIds - 변경할 순서의 할 일 항목의 ID 배열 (필수)
@return {Boolean} - 순서 변경 여부
```

요청 데이터 예시:

```json
{
  "todoIds": [
    "mnIwaAPIAE1ayQmqekiR",
    "tMzPImGoWtRdJ6yyVv2y",
    "GHrvr3LaPx1g7y2sNuaC",
    "Rq8BebKihCgteHHhMIRS"
  ]
}
```

응답 데이터 예시:

```json
true
```

### 항목 추가

할 일 항목을 새롭게 추가합니다.

```curl
curl -X 'POST' \
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
```

```plaintext
@param {String} title - 할 일의 제목 (필수)
@param {Number} order - 할 일의 순서
@return {Object} - 생성된 할 일 항목 객체
```

요청 데이터 예시:

```json
{
  "title": "KDT 과정 설계 미팅",
  "order": 2
}
```

응답 데이터 예시:

```json
{
  "id": "7P8dOM4voAv8a8cfoeKZ",
  "order": 0,
  "title": "KDT 과정 설계 미팅",
  "done": false,
  "createdAt": "2021-10-29T07:20:02.749Z",
  "updatedAt": "2021-10-29T07:20:02.749Z"
}
```

### 항목 수정

특정 할 일 항목을 수정합니다.

```curl
curl -X 'PUT' \
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
```

```plaintext
@param {String} title - 할 일의 제목 (필수)
@param {Boolean} done - 할 일의 완료 여부 (필수)
@param {Number} order - 할 일의 순서 (필수)
@return {Object} - 수정된 할 일 항목 객체
```

요청 데이터 예시:

```json
{
  "title": "Bootstrap 스타일 추가",
  "done": false,
  "order": 2
}
```

응답 데이터 예시:

```json
{
  "id": "7P8dOM4voAv8a8cfoeKZ",
  "title": "Bootstrap 스타일 추가",
  "done": false,
  "order": 2,
  "createdAt": "2021-10-29T07:20:02.749Z",
  "updatedAt": "2021-10-29T07:20:02.749Z"
}
```

### 항목 삭제

특정 할 일 항목을 삭제합니다.

```curl
curl -X 'DELETE' \
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
```

```plaintext
@return {Boolean} - 할 일 항목의 삭제 여부
```

요청 데이터 예시:

```js
undefined;
```

응답 데이터 예시:

```json
true
```
