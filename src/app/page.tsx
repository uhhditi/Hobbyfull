"use client";
import Papa from 'papaparse';
import React, { useEffect, useState } from "react";
import HobbyPlan from './HobbyPlan';

export default function Home() {
  let [hobby, setHobby] = useState<string>("");
  let [time, setTime] = useState<number>();
  let [budget, setBudget] = useState<number>();

  //mock hobby list
  let miniHobbyList = `Hobby-name
  Air sports
  Airsoft
  Archaeology
  Architecture
  Action figure
  Antiquing
  Auto audiophilia
  Flower collecting and pressing
  Air hockey
  Axe throwing
  Archery
  Baseball
  Ant farming
  Meditation
  Aircraft spotting
  Hiking/backpacking`;

  type Hobby = {
    'Hobby-name': string;
  }

  //parse hobbies into an array of hobby objects
  const config = {header: true};
  const hobbyOptions = Papa.parse<Hobby>(miniHobbyList, config).data;

  //update state for inputs when form is submitted
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setHobby(String(formData.get("hobby")));
    setTime(Number(formData.get("time")));
    setBudget(Number(formData.get("budget")));
  }

  return (
    <div>
        <h1>Hobbyfull</h1>
        <form onSubmit={handleFormSubmit}>
          <h2>Hobby</h2>
          <select name="hobby" id="hobby-select">
            <option value="">--Please choose an option--</option>
            {hobbyOptions.map((hobby) => (
                <option value={hobby['Hobby-name']}>{hobby['Hobby-name']}</option>
              ))}
          </select>
          <h2>Time Commitment</h2>
          <input name="time" type="number" placeholder="Enter a number"/>
          <h2>Budget</h2>
          <input name="budget" type="number" placeholder="Enter a number"/>
          <button type="submit">Submit</button>
        </form>
        {hobby && time && budget && (
          <HobbyPlan hobby={hobby} time={time} budget={budget}></HobbyPlan>
        )}
    </div>
  );
}

