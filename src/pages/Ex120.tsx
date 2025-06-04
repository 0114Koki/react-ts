import React, { useState } from "react";
interface Employee {
  id: number;
  name: string;
  hireDate: string;
  salary: number;
  dependents: number;
}

const Ex120: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 10,
      name: "渡辺三郎",
      hireDate: "2018-10-29",
      salary: 130000,
      dependents: 3,
    },
    {
      id: 20,
      name: "佐藤次郎",
      hireDate: "2017-08-22",
      salary: 450000,
      dependents: 3,
    },
    {
      id: 30,
      name: "山本八郎",
      hireDate: "2017-06-18",
      salary: 300000,
      dependents: 12,
    },
    {
      id: 40,
      name: "山田太郎",
      hireDate: "2021-06-12",
      salary: 200000,
      dependents: 1,
    },
  ]);

  const handleRemoveFirst = () => {
    setEmployees((employee) => employee.slice(1));
  };
  const handleRemoveLast = () => {
    setEmployees((employee) => employee.slice(0, -1));
  };

  return (
    <div>
      <h2>全件表示:</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>入社日</th>
          <th>給料</th>
          <th>扶養人数</th>
        </tr>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.hireDate}</td>
            <td>{employee.salary}円</td>
            <td>{employee.dependents}</td>
          </tr>
        ))}
      </table>
      <button onClick={handleRemoveFirst}>先頭を削除</button>
      <button onClick={handleRemoveLast}>最後を削除</button>
    </div>
  );
};

export default Ex120;
