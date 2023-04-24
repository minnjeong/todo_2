import React, { useEffect, useState } from "react"
import './App.css';
import TodoItem from "./component/TodoItem";
import TodoList from "./component/TodoList";
// import {useDispatch} from "react-redux"


const App = () => {
  // const dispatch = useDispatch(); //dispatch 생성

  const [todo, setTodo] = useState([
    // { id: 0, title: "리액트 공부하기", body: "리액트 기초를 공부해봅시다.", isDone: false },
    // { id: 1, title: "리액트 공부하기", body: "리액트 기초를 공부해봅시다.", isDone: true }
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isDone, setIsDone] = useState('');

  const titleChageHandler = (event) => {
    setTitle(event.target.value);
  }

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  }

  //추가 버튼 클릭
  const clickAddButtonHandler = () => {
    console.log("a");
    const newTodo = {
      id: Math.floor(Math.random()* 1000),
      title: title,
      body: body,
      isDone: false,
    }
    if (title === '' && body === '') alert('내용을 추가해주세요')
    else setTodo([...todo, newTodo])

  };

  //할일 삭제 버튼 클릭
  const clickRemoveHandler = (id) => {
    const delTodo = todo.filter((todo) => todo.id !== id);
    setTodo([...delTodo]);
  }

  // 완료 버튼 클릭
  const completeHandler = (id) => {
    const setDoneTodo = todo.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodo(setDoneTodo);
  };

  // 취소 버튼 클릭
  const cancleHandler = (id) => {
    const setDoneTodo = todo.map((todo) =>
      todo.id === id ? { ...todo, isDone: false } : todo
    );
    setTodo(setDoneTodo);
  }

  return (
    <div className="layout">
      <div className="container">
        <div>🤍&nbsp;My Todo List&nbsp;🤍</div>
        <div>React</div>
      </div>
      <div className="listAdd">
        <div className="input-group">
          <label className="form-label">제목</label>
          <input value={title} onChange={titleChageHandler} />
          <label>내용</label>
          <input value={body} onChange={bodyChangeHandler} />
        </div>
        <button className="add-button" onClick={clickAddButtonHandler}>추가하기</button>

      </div>

      <div className="lists">
        <TodoList title={'Working.. 🔥'} isWorking={false} todo={todo} clickRemoveHandler={clickRemoveHandler} completeHandler={completeHandler} />
        <TodoList title={'Done..! 🎉'} isWorking={true} todo={todo} clickRemoveHandler={clickRemoveHandler} completeHandler={completeHandler} />
      </div>

    </div>
  );
}


export default App;
