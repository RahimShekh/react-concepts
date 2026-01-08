import React, { useState } from "react";
//two way binding
function Two() {
//   const [todos, setTodos] = useState([
//     { id: 1, title: "work need to do", isCompleted: false },
//   ]);

  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [gender, setGender] = useState("male");
  const [city,setCity] = useState("mumbai")
  return (
    <div>
      <h1>Create Tasks</h1>
      <form action="">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <input
          onChange={(e) => setCompleted(e.target.checked)}
          checked={completed}
          type="checkbox"
        />{" "}
        completed
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        male
        <br />
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        female
        <br />

        <select value={city} onChange={(e)=>setCity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="pune">Pune</option>
        </select>
        <button>Create todo</button>
      </form>
    </div>
  );
}

export default Two;
