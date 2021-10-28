import React, { Component } from 'react';

class R009_Es6 extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    var jsString1 = '자바스크립트'
    var jsString2 = '입니다|n다음 줄입니다.'
    console.log(jsString1 + ' 문자열' + jsString2 + '~');

    var Es6string1 = 'es6'
    var Es6string2 = '입니다.'

    console.log(`${Es6string1} 문자열 ${Es6string2} !! __________다음줄입니다,`);

    var LongString = "ES6에 추가된 String 함수들입니다.";
    console.log('startWith : ' + LongString.startsWith("ES6에 추가"));
    console.log('endsWith : ' + LongString.endsWith("함수들입니다."));
    console.log('includes : ' + LongString.includes("추가된 String"));

  }

  render () {
    return (
      <h2>
        [This is es6 string]
      </h2>
    )
  }
}

export default R009_Es6;