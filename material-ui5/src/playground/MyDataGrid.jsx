import { createTheme, ThemeProvider } from "@mui/material";
import { useAllUsers } from "../hook/useAllUsers";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          // カラムへのstyle適用
          "& .MuiDataGrid-columnHeaderWrapper": {
            backgroundColor: "#87cefa",
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "#ffe6ce",
            "&:hover": {
              backgroundColor: "#ffe6ce",
            },
          },
          // "& .MuiDataGrid-row.Mui-focusVisible": {
          //   boder: "red"
          // }
        },
      },
    },
  },
});

export default function MyDataGrid() {
  // ユーザを取得するカスタムフック
  const { users, fetchData } = useAllUsers();
  // 初期描画時に全ユーザ情報取得
  useEffect(() => {
    fetchData();
  }, [useAllUsers]);

  const カラム = [
    { field: "name", headerName: "name", width: 200, align: "center" },
    { field: "email", headerName: "email", width: 200 },
    { field: "phone", headerName: "phone", width: 200 },
    { field: "company", hedaderName: "company", width: 200 },
    { field: "website", hedaderName: "website", width: 200 },
  ];

  const レコード = users?.map((user) => ({
    id: user?.id,
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    company: user?.company?.name,
    website: user?.website,
  }));

  const レコード数多 = [...Array(1000)].map((_, index) => ({
    ...レコード[0],
    id: index,
  }));

  // jsx
  return (
    <div className="App">
      <h1>データグリッド</h1>
      <ThemeProvider theme={theme}>
        <DataGrid
          columnHeader
          // Testで探すときに有効
          arial-label="userTable"
          // ↓チェックボックスの実装
          checkboxSelection
          // ↓レコード数に合わせてテーブルの高さを自動調整(これがないと画面崩れるため必須)
          autoHeight
          // ↓1テーブルの最大表示レコード数
          pageSize={50}
          // ↓レコードクリック時にチェックボックスにチェックを入れない
          disableSelectionOnClick
          // ↓チェックされている要素のidを取得
          onSelectionModelChange={(ele) => console.log(ele)}
          // ↓レコード数を制御するプルダウン非表示
          disableColumnFilter
          // ↓表示レコード数プルダウンのレコード数指定
          // rowsPerPageOptions={[10, 25, 50, 100, 1000]}
          // ↓セルにボーダーを付与
          showCellRightBorder
          // ↓ヘッダーにボーダーを付与
          showColumnRightBorder
          // ↓ソートをクライアント側で行うかサーバで行うか選択できる。デフォルトはクライアント？
          // sortMode="client"
          // ↓必須項目
          rows={レコード}
          // ↓必須項目
          columns={カラム}
        />
      </ThemeProvider>
      <h1>データグリッド</h1>
    </div>
  );
}

/**
 * ■テーブル要件
 * ・テーブル自身が持つスクロール実装
 * ⇒OK.自動で実装される。
 * ・ページ最大50
 * ⇒OK.pageSize propsで指定可能。
 * ・業務によっては無限スクロール
 * ⇒
 *
 */
