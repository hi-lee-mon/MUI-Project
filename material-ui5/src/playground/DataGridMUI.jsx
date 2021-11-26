import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

// 1. colums: Table header
// 2. rows: table body

const cols = [
  { field: "name", headerName: "name", width: 200 },
  { field: "email", headerName: "email", width: 200 },
  { field: "phone", headerName: "phone", width: 200 },
  { field: "company", hedaderName: "company", width: 200 },
  { field: "website", hedaderName: "website", width: 200 },
];

// rowsはidを必ず持つ。
// colsのfield名のkeyを持つプロパティを持つ
// const rows = [
//   { id: 1, studentName: "kameda", studentScore: 90, studentAge: 27 },
//   { id: 2, studentName: "sato", studentScore: 90, studentAge: 27 },
//   { id: 3, studentName: "tanaka", studentScore: 90, studentAge: 27 },
// ];

export const DataGridMUI = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const rowData = users?.map((user) => {
    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      company: user?.company?.name,
      website: user?.website,
    };
  });

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        arial-label="student table"
        // チェックボックスの実装
        checkboxSelection
        // ページ切り替えとかが下に行く
        autoHeight
        // 1テーブルのレコード数
        pageSize={5}
        // 必須項目：レコード
        rows={rowData}
        // 必須項目：テーブルヘッダー
        columns={cols}
      />
    </div>
  );
};
