import React from "react";
import "./App.css";

function Greeting({ person }) {
  return <p>Hello, {person.name}</p>;
}

function Introduction({ person }) {
  return (
    <div className="card">
      <Greeting person={person} />
      <p>I am {person.age} years old.</p>
    </div>
  );
}

const person = {
  name: "John",
  age: 25,
};

export default function App() {
  return <Introduction person={person} />;
}
