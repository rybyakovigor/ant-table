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
        key: "1",
        columnName: "Фамилия",
        value: "petrov",
      },
    ],
    [
      {
        key: "2",
        columnName: "Имя",
        value: "vasya",
      },
      {
        key: "3",
        columnName: "Фамилия",
        value: "vasin",
      },
    ],
  ];

  const c = () => {
    const result: any[] = [];
    dataSource.forEach((dataSourceItem, index) => {
      result.push({
        title: dataSourceItem[index].columnName,
        dataIndex: dataSourceItem[index].columnName,
        key: dataSourceItem[index].columnName,
        render: (_: any, row: any) => row[index].value,
      });
    });

    return result;
  };

  return (
    <div>
      {/* <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button> */}
      {/* <EditableTable /> */}
      <Table dataSource={dataSource} columns={c()} />
    </div>
  );
};

export default App;
