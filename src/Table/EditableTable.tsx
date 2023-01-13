import { Popconfirm, Table } from "antd";
import { useState } from "react";
import { ColumnTypes } from "./column.type";
import EditableCell from "./EditableCell/EditableCell";
import EditableRow from "./EditableRow/EditableRow";
import { Item } from "./item.interface";

interface PropsType {}

// const data: Item[][] = [
//   [
//     {
//       key: "0",
//       columnName: "Имя",
//       value: "32",
//     },
//     {
//       key: "1",
//       columnName: "Фамилия",
//       value: "33",
//     },
//   ],
//   [
//     {
//       key: "0",
//       columnName: "Имя",
//       value: "66",
//     },
//     {
//       key: "1",
//       columnName: "Фамилия",
//       value: "99",
//     },
//   ],
// ];

// const transformDataToColumns = (data: Item[][]) => {
//   const result: any[] = [];
//   result.push({
//     title: "operation",
//     dataIndex: "operation",
//     render: (_, record: { key: React.Key }) => (
//       <Popconfirm title="Sure to delete?" onConfirm={() => {}}>
//         <a>Delete</a>
//       </Popconfirm>
//     ),
//   });
//   data[0].forEach((i) => {
//     result.push({
//       title: i.columnName,
//       dataIndex: i.columnName,
//       render: () => i.value,
//       editable: true,
//     });
//   });

//   return result;
// };

const data = [
  [
    {
      id: "id",
      columnName: "id",
      value: "01",
    },
    {
      id: "name",
      columnName: "Имя",
      value: "petr",
    },
    {
      id: "surname",
      columnName: "Фамилия",
      value: "petrov",
    },
  ],
  [
    {
      id: "id",
      columnName: "id",
      value: "02",
    },
    {
      id: "name",
      columnName: "Имя",
      value: "vasya",
    },
    {
      id: "surname",
      columnName: "Фамилия",
      value: "vasin",
    },
  ],
];

const createCells = () => {
  const result: any[] = [];

  data[0].forEach((dataSourceItem, index) => {
    if (dataSourceItem.columnName === "id") {
      return;
    }

    result.push({
      title: dataSourceItem.columnName,
      dataIndex: dataSourceItem.columnName,
      key: dataSourceItem.columnName,
      editable: true,
      render: (_: any, row: any) => {
        const a = row.find(
          (q: any) => q.columnName === dataSourceItem.columnName
        );
        if (a) {
          return a.value;
        }
      },
    });
  });

  return result;
};

const EditableTable = () => {
  const [dataSource, setDataSource] = useState<Item[][]>(data);
  const [columns, setColumns] = useState<ColumnTypes[]>([]);

  const handleDelete = (key: React.Key) => {
    // const newData = dataSource.filter((item) => item.key !== key);
    // setDataSource(newData);
  };

  const handleSave = (row: any) => {
    const rowKeys = Object.keys(row);
    const rowId = row[0].value;
    const columnName = rowKeys[rowKeys.length - 1];
    //@ts-ignore
    const cellValue = row[columnName];

    const newData = dataSource.map((item) => {
      if (item[0].value === rowId) {
        item.forEach((el) => {
          if (el.columnName === columnName) {
            el.value = cellValue;
            return el;
          }
        });
      }
      return item;
    });
    
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const mergedColumns = createCells().map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <Table
      components={components}
      //@ts-ignore
      // rowKey={(record) => record.title}
      // rowClassName={() => "editable-row"}
      bordered
      dataSource={dataSource}
      columns={mergedColumns as ColumnTypes}
    />
  );
};

export default EditableTable;
