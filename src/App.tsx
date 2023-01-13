import "./App.css";
import { Button, Table } from "antd";
import React, { useState } from "react";
import EditableTable from "./Table/EditableTable";
import { Item } from "./Table/item.interface";

const App: React.FC = () => {

  const dataSource = [
    [
      {
        key: "0",
        columnName: "Имя",
        value: "petr",
      },
      {
        key: "0",
        columnName: "Фамилия",
        value: "petrov",
      },
      {
        key: "0",
        columnName: "Отчество",
        value: "петрович",
      },
    ],
    [
      {
        key: "1",
        columnName: "Имя",
        value: "vasya",
      },
      {
        key: "1",
        columnName: "Фамилия",
        value: "vasin",
      },
      {
        key: "1",
        columnName: "Отчество",
        value: "васильевич",
      },
    ],
  ];

  const c = () => {
    const result: any[] = [];
    dataSource[0].forEach((dataSourceItem, index) => {
      result.push({
        title: dataSourceItem.columnName,
        dataIndex: dataSourceItem.columnName,
        key: dataSourceItem.columnName,
        render: (_: any, row: any) => {
          const a = row.find((q: any) => q.columnName === dataSourceItem.columnName)
          if (a) {
            return a.value
          }
        },
      });
    });

    return result;
  };

  return (
    <div>
      {/* <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button> */}
      <EditableTable />
      {/* <Table dataSource={dataSource} columns={c()} /> */}
    </div>
  );
};

export default App;
