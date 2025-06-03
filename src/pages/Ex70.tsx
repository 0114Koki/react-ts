import React, { useState } from "react";

const Ex70: React.FC = () => {
  const genderOptions = {
    man: "男性",
    woman: "女性",
  };
  const hobbyOptions = {
    swim: "水泳",
    bike: "自転車",
    run: "ランニング",
  };
  const languageOptions = {
    Java: "Java",
    javascript: "JavaScript",
    typescript: "TypeScript",
  };

  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(event.target.value));
  };
  const handleGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };
  const handleHobby = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (hobbies.includes(value)) {
      setHobbies(hobbies.filter((hobby) => hobby !== value));
    } else {
      setHobbies([...hobbies, value]);
    }
  };

  //   const ageNumber = parseInt(age, 10);
  //   const ageInTenYears = isNaN(ageNumber) ? "入力が不正です" : ageNumber + 10;

  return (
    <div>
      <h1>アンケートフォーム</h1>
      姓:
      <input type="text" onChange={handleLastName} /> / 入力した性: {lastName}
      <hr />
      名:
      <input type="text" onChange={handleFirstName} /> /入力した名: {firstName}
      <hr />
      入力したフルネーム: {lastName} {firstName}
      <hr />
      年齢:
      <input type="text" onChange={handleAge} /> /入力した年齢: {age}
      <hr />
      10年後の年齢: {age + 10}
      <hr />
      性別:
      <input type="radio" value={genderOptions.man} onChange={handleGender} />
      {genderOptions.man}{" "}
      <input type="radio" value={genderOptions.woman} onChange={handleGender} />
      {genderOptions.woman} / チェックした性別:{gender}
      <hr />
      趣味:
      <input type="checkbox" value={hobbyOptions.swim} onChange={handleHobby} />
      {hobbyOptions.swim}
      <input type="checkbox" value={hobbyOptions.bike} onChange={handleHobby} />
      {hobbyOptions.bike}
      <input type="checkbox" value={hobbyOptions.run} onChange={handleHobby} />
      {hobbyOptions.run}/ チェックした趣味: {hobbies.join(",")}
      <hr />
      好きな言語:
      <select name="" id=""></select>
    </div>
  );
};

export default Ex70;
