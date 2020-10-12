# noticeBoard-backend

https://velog.io/@hopsprings2/%EA%B2%AC%EA%B3%A0%ED%95%9C-node.js-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0

https://levelup.gitconnected.com/project-structure-and-building-routes-of-restful-api-with-node-js-f3a8b53d94e7

https://github.com/goldbergyoni/nodebestpractices

## Exception Handling

- https://medium.com/@SigniorGratiano/express-error-handling-674bfdd86139
- https://codeburst.io/better-error-handling-in-express-js-b118fc29e9c7

## Mongoose

- https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1
- https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6

## Jest

- https://github.com/facebook/jest
- https://yonghyunlee.gitlab.io/temp_post/jest/

## 기본설정

- https://velog.io/@das01063/VSCode%EC%97%90%EC%84%9C-ESLint%EC%99%80-Prettier-TypeScript-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
- eslint 설정
  ```cmd
    $ npm i -D typescript @types/express
    $ npx tsc --init
    $ npm i -D eslint
    $ npx eslint --init
      /**
      * √ How would you like to use ESLint? · problems
      * √ What type of modules does your project use? · esm
      * √ Which framework does your project use? · none
      * √ Does your project use TypeScript? · No / Yes
      * √ Where does your code run? · browser
      * √ What format do you want your config file to be in? · JSON
      **/
  ```
- prettier 설정

  ```cmd
  $ npm i -D prettier eslint-config-prettier eslint-plugin-prettier
  $ echo > .prettierrc.json
  ```

  ```js
  {
    "printWidth": 200, // 한 줄의 라인 수
    "tabWidth": 2, // tab의 너비
    "useTabs": false, // tab 사용 여부
    "semi": true, // ; 사용 여부
    "singleQuote": true, // 'string' 사용 여부
    "quoteProps": "consistent", // 객체 property의 따옴표 여부
    "trailingComma": "es5", // 끝에 , 사용 여부
    "bracketSpacing": true, // Object literal에 띄어쓰기 사용 여부 (ex: { foo: bar })
    "arrowParens": "always", // 함수에서 인자에 괄호 사용 여부 (ex: (x) => y)
    "endOfLine": "lf" // 라인 엔딩 지정
  }
  ```

  ```txt
  - 설정 완료 후 Preferences > Settings > Workspace > Editor: Format On Save 옵션에 체크
  ```

- routes

  - handle HTTP logic

- service

  - handle business logic

- model
  - data access layer
