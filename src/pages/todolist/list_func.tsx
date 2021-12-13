import { Card ,Input,Button,Row, Col} from 'antd';
import './style.less'
import React, {useState} from "react";







export default function list_func() {
  const [list,setList] = useState([
    {id:1,text:"任务1",flag:false},
    {id:2,text:"任务2",flag:false},
    {id:3,text:"任务3",flag:false},
  ]);
  const [task,setTask] = useState();
  const [num,setNum] = useState(4);

  function handleChange(id){
    setList(list.map(item=>{
      if(item.id == id)
        item.flag = !item.flag
      return item;
    }))
  }
  function handleInput(e){
    setTask(e.target.value)
  }
  function handleAdd(){
    if(!task)
      return ;
    list.push({id:num,text: task,flag: false});
    setList(list);
    setNum(num+1);
  }
  function handleDel(e,id){
    e.stopPropagation();
    setList(list.filter(item=>item.id != id));
  }

  return(
    <div className="box">
      <Card title="TO DO LIST -Function">
        {list.map((item)=>{
          return(
            <p key={item.id}
               onClick={() => handleChange(item.id)}
               className={item.flag ? 'ok' : 'no'}
            >{item.text}
              <Button type="text"
                      className='btn right'
                      onClick={(event)=>handleDel(event,item.id)}
              >删除</Button>
            </p>
          )
        })}
        <Row>
          <Col span={16}>
            <Input
              onChange={(e)=>handleInput(e)}
              placeholder="输入..." /></Col>
          <Col span={8}>
            <Button type="primary"
                    onClick={handleAdd}
                    className="btn right">
              新增</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
