import { Table } from "antd";

export type ColumnTypes = Exclude<Parameters<typeof Table>[0]["columns"], undefined>;
