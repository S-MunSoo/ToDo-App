### π ν  μΌ κ΄λ¦¬(ToDoList) App

### λ°°ν¬ μ¬μ΄νΈ

https://dashing-blini-dd93ce.netlify.app/

https://user-images.githubusercontent.com/102017296/173235680-f214cfbc-f3b9-48e5-a010-2671ebbf389a.mov


#### κ΅¬ν κΈ°λ₯

- ν  μΌ λͺ©λ‘(list)μ μ‘°ν(Read)ν  μ μλ€.
- ν  μΌ ν­λͺ©(item)μ μΆκ°(Create)ν  μ μλ€.
- ν  μΌ ν­λͺ©μ μμ (Update)ν  μ μλ€.
- ν  μΌ ν­λͺ©μ μ­μ (Delete)ν  ν  μ μλ€.
- ν  μΌμ μλ£νμ§ μμ ν­λͺ©κ³Ό μλ£ν ν­λͺ©μ ν­λ³λ‘ κ΅¬λΆν  μ μλ€.

### μ¬μ© κΈ°μ  μ€ν

- HTML
- CSS
- JavaScript


### μ¬μ©ν API

- μμ²­ μ£Όμ(Endpoint): `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`

λͺ¨λ  API μμ²­(Request) `headers`μ μλ μ λ³΄κ° κΌ­ ν¬ν¨λΌμΌ ν©λλ€!<br>
`username`μ `KDT2_ParkYoungWoong`μ κ°μ΄ λ³ΈλͺμΌλ‘ λ§λ€μ΄μΌ ν©λλ€!<br>
νμΈν  μ μλ μ¬μ©μμ DB μ λ³΄λ μμλ‘ μ­μ ν  μ μμ΅λλ€!<br>

```json
{
  "content-type": "application/json",
  "apikey": "FcKdtJs202204",
  "username": "<YOUR_NAME>"
}
```

### λͺ©λ‘ μ‘°ν

μ μ²΄ ν  μΌ λͺ©λ‘μ μ‘°νν©λλ€.

```curl
curl -X 'GET' \
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
```

```plaintext
@return {Object[]} - μ‘°νλ λμ ν  μΌ λͺ©λ‘
```

μμ²­ λ°μ΄ν° μμ:

```js
undefined;
```

μλ΅ λ°μ΄ν° μμ:

```json
[
  {
    "id": "mnIwaAPIAE1ayQmqekiR",
    "order": 0,
    "title": "JS κ³΅λΆνκΈ°",
    "done": false,
    "createdAt": "2021-10-28T05:18:51.868Z",
    "updatedAt": "2021-10-28T05:18:51.868Z"
  },
  {
    "id": "tMzPImGoWtRdJ6yyVv2y",
    "order": 1,
    "title": "κ³Όμ  PullRequest(PR) μμ±",
    "done": true,
    "createdAt": "2021-10-28T04:16:53.980Z",
    "updatedAt": "2021-10-28T09:40:17.955Z"
  },
  {
    "id": "Rq8BebKihCgteHHhMIRS",
    "order": 2,
    "title": "API μ€ν°λ",
    "done": false,
    "createdAt": "2021-10-28T04:17:02.510Z",
    "updatedAt": "2021-10-28T04:17:02.510Z"
  }
]
```

### λͺ©λ‘ μμ λ³κ²½

ν  μΌ λͺ©λ‘μ μμλ₯Ό λ³κ²½ν©λλ€.

```curl
curl -X 'PUT' \
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/reorder
```

```plaintext
@param {String[]} todoIds - λ³κ²½ν  μμμ ν  μΌ ν­λͺ©μ ID λ°°μ΄ (νμ)
@return {Boolean} - μμ λ³κ²½ μ¬λΆ
```

μμ²­ λ°μ΄ν° μμ:

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

μλ΅ λ°μ΄ν° μμ:

```json
true
```

### ν­λͺ© μΆκ°

ν  μΌ ν­λͺ©μ μλ‘­κ² μΆκ°ν©λλ€.

```curl
curl -X 'POST' \
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
```

```plaintext
@param {String} title - ν  μΌμ μ λͺ© (νμ)
@param {Number} order - ν  μΌμ μμ
@return {Object} - μμ±λ ν  μΌ ν­λͺ© κ°μ²΄
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "title": "KDT κ³Όμ  μ€κ³ λ―Έν",
  "order": 2
}
```

μλ΅ λ°μ΄ν° μμ:

```json
{
  "id": "7P8dOM4voAv8a8cfoeKZ",
  "order": 0,
  "title": "KDT κ³Όμ  μ€κ³ λ―Έν",
  "done": false,
  "createdAt": "2021-10-29T07:20:02.749Z",
  "updatedAt": "2021-10-29T07:20:02.749Z"
}
```

### ν­λͺ© μμ 

νΉμ  ν  μΌ ν­λͺ©μ μμ ν©λλ€.

```curl
curl -X 'PUT' \
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
```

```plaintext
@param {String} title - ν  μΌμ μ λͺ© (νμ)
@param {Boolean} done - ν  μΌμ μλ£ μ¬λΆ (νμ)
@param {Number} order - ν  μΌμ μμ (νμ)
@return {Object} - μμ λ ν  μΌ ν­λͺ© κ°μ²΄
```

μμ²­ λ°μ΄ν° μμ:

```json
{
  "title": "Bootstrap μ€νμΌ μΆκ°",
  "done": false,
  "order": 2
}
```

μλ΅ λ°μ΄ν° μμ:

```json
{
  "id": "7P8dOM4voAv8a8cfoeKZ",
  "title": "Bootstrap μ€νμΌ μΆκ°",
  "done": false,
  "order": 2,
  "createdAt": "2021-10-29T07:20:02.749Z",
  "updatedAt": "2021-10-29T07:20:02.749Z"
}
```

### ν­λͺ© μ­μ 

νΉμ  ν  μΌ ν­λͺ©μ μ­μ ν©λλ€.

```curl
curl -X 'DELETE' \
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
```

```plaintext
@return {Boolean} - ν  μΌ ν­λͺ©μ μ­μ  μ¬λΆ
```

μμ²­ λ°μ΄ν° μμ:

```js
undefined;
```

μλ΅ λ°μ΄ν° μμ:

```json
true
```
