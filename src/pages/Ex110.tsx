import React from "react";

interface Employee {
  id: number;
  name: string;
  hireDate: string;
  salary: number;
  dependents: number;
}

const employees: Employee[] = [
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
];

const Ex110: React.FC = () => {
  const SalaryMoreThan300000employees = employees.filter(
    (employee) => employee.salary >= 300000
  );
  return (
    <div>
      <h1>Ex110</h1>
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
      <h2>全件表示(index番号あり):</h2>
      <table>
        <tr>
          <th>index</th>
          <th>ID</th>
          <th>名前</th>
          <th>入社日</th>
          <th>給料</th>
          <th>扶養人数</th>
        </tr>
        {employees.map((employee, index) => (
          <tr key={employee.id}>
            <td>{index + 1}</td>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.hireDate}</td>
            <td>{employee.salary}円</td>
            <td>{employee.dependents}</td>
          </tr>
        ))}
      </table>
      <h2>給料30万円以上の人のみ表示</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>入社日</th>
          <th>給料</th>
          <th>扶養人数</th>
        </tr>
        {SalaryMoreThan300000employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.hireDate}</td>
            <td>{employee.salary}円</td>
            <td>{employee.dependents}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Ex110;
