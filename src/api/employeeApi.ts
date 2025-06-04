const BASE_URL = "http://153.127.48.168:8080/ex-emp-api/employee/employees";

export interface Employee {
  id: number;
  name: string;
  hireDate: string;
  dependentsCount: number;
}

//WebAPIを呼び出して従業員情報を取得する関数
export async function fetchEmployees(): Promise<Employee[]> {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("従業員情報の取得に失敗しました");
  }
  const data = await response.json();
  return data.employees; //従業員一覧を返す
}
