# [책] 리액트 200제

|    Date    | Chapter No.  | 내용                                                                                                                                                                                                                                                        |
| :--------: | :----------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2021-10-28 |    No.008    | 함수 실행순서 <br/> 1. constructr <br/> 2. getDerivedStateFromProps <br/> 3. render <br/> 4. componentDidMount <br/> 5. shouldComponentUpdate <br/> shouldComponentUpdate 는 boolean 유형을 반환 / 참 일때 render를 한번 더 호출                            |
| 2021-10-28 |    No.009    | startsWith, endsWith, includes 함수 학습                                                                                                                                                                                                                    |
| 2021-10-31 |    No.012    | es5의 prototype 과 es6의 class 비교 사용법 학습                                                                                                                                                                                                             |
| 2021-10-31 |    No.013    | arrow function에 대해서 <br/> 1. Function ()은 콜백 함수 내부에서는 this로 접근 불가( 콜밸함수 내부에서 this 는 window)<br/> 2. Function ()는 콜백 함수 박에서 this를 바인드 해주면 가능 <br/> 3. 화살표 함수에서는 this를 bind 안해도 사용 가능            |
| 2021-11-04 |    No.014    | forEach <br/> 배열의 처음부터 마지막 까지 모두 작업하는 경우 간편(특정 순번에만 배열값 사용 할 경우 - for문 사용) <br/>                                                                                                                                     |
| 2021-11-05 |    No.015    | map에 대해 학습                                                                                                                                                                                                                                             |
| 2021-11-06 |    No.017    | props <br/> 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달 할 때 사용                                                                                                                                                                                        |
| 2021-11-09 |    No.018    | props 자료형 선언하기 <br/> react 기본 내장 패키지인 prop-types 사용법 학습                                                                                                                                                                                 |
| 2021-11-13 |    No.019    | props Boolean으로 사용하기 <br/> props 값을 Boolean형으로 하위컴포넌트에 전달 학습 <br/> props 변수를 선언 후 값을 할당하지 않고 넘기면 true가 기본값으로 할당 된다.                                                                                        |
| 2021-11-13 |    No.020    | props 객체형으로 사용하기 <br/> props 갮을 객체로 하위 컴포넌트에 전달 학습 / shape 사용법 학습                                                                                                                                                             |
| 2021-11-13 |    No.020    | props 객체형으로 사용하기 <br/> props 갮을 객체로 하위 컴포넌트에 전달 학습 / shape 사용법 학습                                                                                                                                                             |
| 2021-11-13 |    No.023    | props의 자식 컴포넌트에 node 전달하기 <br/> this.props.children 문법 사용 해서 접근                                                                                                                                                                         |
| 2021-11-13 |    No.024    | State 사용하기 <br/> 하나의 컴포넌트 안에서 전역 변수처럼 사용한다.                                                                                                                                                                                         |
| 2021-11-13 |    No.025    | setState() 사용하기 <br/> setState()이용해서 state 값 변경 - render()를 자동으로 다시 호출                                                                                                                                                                  |
| 2021-11-13 |  No.027,028  | { Component } 와 { PureComponent } 차이 비교<br/> { Component } - 비교 대상이 *완전히*동일하지 않으면 변경이 발생했다고 본다 <br/> { PureComponent } - 동일 하지 않으면 변경 했다고 본다.(불필요한 reder() 함수 실행 줄이면 페이지 성능 향상 시킬 수 있다.) |
| 2021-11-14 |    No.030    | 함수형 컴포넌트 사용법 이해 - props를 지역 변수에 할당 해서 사용 / 클래스 컴포넌트와 달리 props 앞에 this가 붙지 않는다.                                                                                                                                    |
| 2021-11-14 |    No.031    | hook / 사용법 이해 - useEffect()함수는 componentDidMount()와 같은 실행 순서(최초 로딩 될 때 한번, setState()함수로 state 값이 변경되면 한번 더 실행 됨)                                                                                                     |
| 2021-11-14 |    No.033    | map()으로 element 반환하기 - 사용법 이해                                                                                                                                                                                                                    |
| 2021-11-14 | No.034 ~ 058 | react bootstrap 설치 및 컴포넌트 사용법 숙지. 그대로 다 따라 쳐 봄                                                                                                                                                                                          |
| 2021-11-20 |    No.059    | 자바스크립트 내장 함수인 fetch 함수로 get 방식 호출 방법 학습 async, await 사용 할 때 학습                                                                                                                                                                  |
| 2021-11-20 |    No.059    | 자바스크립트 내장 함수인 fetch 함수로 get 방식 호출 방법 학습 async, await 사용 할 때 학습                                                                                                                                                                  |
| 2021-11-20 |    No.060    | 자바스크립트 내장 함수 fetch 함수로 post 방식 호출법 학습                                                                                                                                                                                                   |
| 2021-11-20 |    No.061    | Axios 함수로 get 방식 호출 방법, 사용법 학습                                                                                                                                                                                                                |
| 2021-11-20 |    No.062    | Axios 함수로 post 방식 호출 방법, 사용법 학습                                                                                                                                                                                                               |
| 2021-11-20 |    No.063    | 콜백 함수 사용법, 특징, 단점 학습                                                                                                                                                                                                                           |
| 2021-11-20 |    No.064    | promise then 사용 <br/> 동기적 구현 할 때 사용 코드 가독성, 예외처리 쉽게 사용가능 <br/>대기, 이행, 거부 의 개념이 있음. <br/> 이행 상태로 변할 때 then 사용                                                                                                |
| 2021-11-20 |    No.065    | promise catch 사용 <br/> 거부 상태가 됬을 때 catch 함수 실행                                                                                                                                                                                                |
| 2021-11-20 | No.066 ~ 072 | onEvent 사용법 학습(onKeyDown,onKeyPress,onKeyUp 차이점 정리) <br/> a,ctrl키 눌렀을 때 <br/> onKeyDown - 공백, a 출력,<br/> onKeyPress - 공백, 출력 되지 않음 ,<br/> onKeyUp - 모두 a 가 출력                                                               |
| 2021-11-20 |    No.073    | Ref 사용하기 <br/> 1. element에 ref 속성 추가 <br/> 2. Ref 에 참조에 대한 정보가 ref의 current라는 속성에 할당 된다.                                                                                                                                        |
| 2021-11-20 |    No.074    | 커링 함수 구현하기 <br/> 함수의 재사용을 위해 함수 자체를 return 하는 함수. <br/> 함수를 분리할 수 있으므로 파라미터도 나눠 전달 할 수 있다.                                                                                                                |
| 2021-11-22 |    No.075    | 하이오더 컴포넌트 구현하기 <br/> 커링과 같이 함수 자체를 인자로 받거나 반환하는 함수라 하는데, 이와 비슷하게 컴포넌트를 인자로 받거나 반환하는 함수를 고차 컴포넌트(HOCm Higher-Order Component)라고 한다.                                                  |
| 2021-11-22 |    No.076    | 컨텍스트 api 사용하기 <br/> 필요한 하위 컴포넌트에서 소비자를 임포트해 필요한 데이터를 사용 할 수 있다.                                                                                                                                                     |
| 2021-11-24 | No.078 ~ 083 | redux 스토어 사용하기 - 실습                                                                                                                                                                                                                                |
| 2021-11-24 |    No.084    | redux 미들웨어 사용하기 - 액션을 dispath 함수로 전달하고 리듀서가 실행되기 전과 실행된 후에 처리되는 기능                                                                                                                                                   |
| 2021-11-24 |    No.085    | react-cookies 의 save 함수 사용법 학습                                                                                                                                                                                                                      |
| 2021-11-24 |    No.086    | react-cookies 의 load 함수 사용법 학습 - key로 접근해 value를 가져오는 함수                                                                                                                                                                                 |

<!--
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
