export interface IReportCount {
    Value: any;
    Icon: string;
    Name: string;
    Link?: string;
  }
  
  export interface IDataReport {
    labels: string[];
    values: number[];
    colors: string[];
  }
  export interface IBarReport {
    data: IDataReport;
    label: string;
  }
  export interface IReport {
    Counts: IReportCount[];
    Bar: IBarReport;
  }
  