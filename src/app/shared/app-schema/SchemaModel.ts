
export interface SchemaModel {
  name: string
  open?: boolean;
  columns: Column[]
}

export interface Column {
  Field: string
  Type: string
  Null: string
  Key: string
  Default?: string
  Extra: string
}
