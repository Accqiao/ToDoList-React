import { useReducer } from "react";
import {Button,} from 'antd';

const myReducer = (state, action) => {
  switch(action.type)  {
    case('upup'):
      return  {
        ...state,
        count: state.count + 1
      }
    case('down'):
      return  {
        ...state,
        count: state.count - 1
      }

    default:
      return  state;
  }
}

export default ()=>{
  const [state, dispatch] = useReducer(myReducer, { count: 0 })

  return (
    <div className="App">
      <Button type="primary"
              className='btn'
              style={{marginTop:'10px'}}
        onClick={() => dispatch({ type: 'upup' })}>
        Count+1 :  {state.count}
      </Button>
      <Button type="primary"
              className='btn'
              style={{marginTop:'10px'}}
        onClick={() => dispatch({ type: 'down' })}>
        Count-1 :  {state.count}
      </Button>
    </div>
  );

}
