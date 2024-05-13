import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];
  const [users, setUsers] = useState(initialState);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    if (name === "" || age === "") {
      alert("이름 또는 나이가 입력되지 않았습니다.");
      return;
    }
    const id = Date.now()
    setUsers([...users, {id, name, age},]);    
    setName("");
    setAge("");
  };

  const removeUser = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    console.log(newUsers)
    setUsers(newUsers);
  };

  const handleUserChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };

  return (
    <>
      <h1>사용자 리스트</h1>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={handleUserChange}
        />
        <input
          type="number"
          placeholder="나이"
          value={age}
          onChange={handleAgeChange}
        />
        <button type="submit">사용자 추가</button>
      </form>
      <ul>
        {users.map((user) => {
          const { id, name, age } = user;
          return (
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                border: "1px solid #000",
              }}
            >
              <p>이름 : {name}&nbsp;</p>
              <p>나이 : {age}</p>
              <button onClick={() => removeUser(id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
