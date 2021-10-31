import React, { Component } from "react";

class R012_ClassProperty extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    //es5 prototype
    var ExamCountFunc = (function () {
      function ExamCount(num) {
        this.number = num;
      }
      ExamCount.prototype.showNum = function () {
        console.log("1. react_" + this.number);
      };
      return ExamCount;
    })();

    var cnt = new ExamCountFunc("200");
    cnt.showNum();

    //ES6 class
    class ExamCountClass {
      constructor(num2) {
        this.number2 = num2;
      }
      showNum() {
        console.log(`2. react_${this.number2}`);
      }
    }

    var cnt2 = new ExamCountClass("2hundred");
    cnt2.showNum();
  }

  render() {
    return <div>[this is Class]]</div>;
  }
}

export default R012_ClassProperty;
