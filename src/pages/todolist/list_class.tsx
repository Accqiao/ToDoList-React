import React from "react";
import { Card ,Input,Button,Row, Col} from 'antd';
import './style.less'
export default class list_class extends React.Component{
  state={
    list:[
      {id:1,text:"任务1",flag:false},
      {id:2,text:"任务2",flag:false},
      {id:3,text:"任务3",flag:false},
    ],
    newTask:'',
    num:4,
  }
  handleAdd =()=>{
    const {list,num,newTask} = this.state;
    if(!newTask)
      return ;
    list.push({id:num,text: newTask,flag: false})
    this.setState({
      list:list,
      num:num+1,
      // newTask:'',
    })
  }
  handleChange =(id)=>{
    const {list} = this.state;
    this.setState({
      list:list.map(item=>{
        if(item.id == id)
          item.flag = !item.flag
        return item;
      }),
    })
  }
  handleInput=(e)=>{
    this.setState({
      newTask:e.target.value,
    })
  }
  handleDel=(e,id)=>{
    e.stopPropagation();
    const {list} = this.state;
    const newlist = list.filter(item=>item.id != id);
    this.setState({
      list:newlist,
    })
  }

  render() {
    const {list} = this.state;
    return (
      <div className="box">
        <Card title="TO DO LIST -Class">
          {list.map((item)=>{
            return(
                <p key={item.id}
                   onClick={() => this.handleChange(item.id)}
                   className={item.flag ? 'ok' : 'no'}
                >{item.text}
                  <Button type="text"
                          className='btn right'
                          onClick={(event)=>this.handleDel(event,item.id)}
                  >删除</Button>
                </p>
              )
          })}
          <Row>
            <Col span={16}>
              <Input
                // ref={input => this.input = input}
                onChange={(e)=>this.handleInput(e)}
                placeholder="输入..." /></Col>
            <Col span={8}>
              <Button type="primary"
                      onClick={this.handleAdd}
                      className="btn right">
                新增</Button>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }

}
