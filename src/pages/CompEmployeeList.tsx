import React, { useState } from "react";
import { fetchEmployees, type Employee } from "../api/employeeApi";

const CompEmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFetchEmployees = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchEmployees();
      setEmployees(data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error("エラー", e.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>従業員情報</h1>
      <button onClick={handleFetchEmployees}>従業員情報を取得</button>
      {loading && <p>読み込み中...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>入社日</th>
            <th>扶養人数</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.hireDate}</td>
              <td>{employee.dependentsCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompEmployeeList;
