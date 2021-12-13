import Count from './count/count'
import { history,Link } from 'umi';
import {Button} from "antd";
import React from "react";
export default function IndexPage(prpos) {
  function toClass() {
    history.push("/index/class")
  }
  function toFunc() {
    history.push("/index/func")
  }

  return (
    <div>
      <br/>
      <Button type="primary"
              onClick={toClass}
              className="btn">
        Class</Button>
      <Link to="/index/class">Class</Link>
      <Button type="primary"
              onClick={toFunc}
              className="btn">
        Func</Button>
      <Link to="/index/func">Func</Link>
      <br/>
      <Count />


      {prpos.children}
      {/*<List />*/}
      {/*<ListFunc />*/}
    </div>
  );
}
