import { ModeType } from "@scom/scom-chart-data-source-setup"

export interface IScatterChartOptions {
  xColumn?: {
    key: string,
    type: 'time' | 'category'
  },
  yColumns?: string[],
  groupBy?: string,
  seriesOptions?: {
    key: string,
    title?: string,
    color?: string
  }[],
  stacking?: boolean,
  xAxis?: {
    title?: string,
    tickFormat?: string,
    reverseValues?: boolean
  },
  yAxis?: {
    title?: string,
    tickFormat?: string,
    labelFormat?: string,
    position?: 'left' | 'right'
  },
  smooth?: boolean,
  legend?: {
    show?: boolean,
    scroll?: boolean,
    position?: 'top' | 'bottom' | 'left' | 'right'
  },
  showSymbol?: boolean,
  showDataLabels?: boolean,
  percentage?: boolean
}

export interface IScatterChartConfig {
  dataSource: string;
  queryId?: string;
  apiEndpoint?: string;
  title: string,
  description?: string,
  options: IScatterChartOptions,
  file?: {
    cid: string,
    name: string
  },
  mode: ModeType
}

export interface IFetchDataOptions {
  dataSource: string;
  queryId?: string;
  apiEndpoint?: string;
}