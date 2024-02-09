export interface INav {
  name: string;
  link: string;
  icon: string;
  roles: string[];
}

export interface IKeyValue {
  key: string;
  value: string;
  label?: string;
}
export interface IDbInclude {
  tableName: string;
  columnName: string;
}
