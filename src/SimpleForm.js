import React, { Component } from "react";
class SimpleForm extends Component {
    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
    // 通过this.input 获取到input元素的值
    alert('The title you submitted was ' +
    this.input.value);
    event.preventDefault();
    }
    render() {
    return (
    <form onSubmit={this.handleSubmit}>
    <label>
    title:
    {/* this.input 指向当前input元素 */}
    <input type="text" ref={(input) => this.input =
    input} />
    </label>
    <input type="submit" value="Submit" />
    </form>
    );
    }
    }