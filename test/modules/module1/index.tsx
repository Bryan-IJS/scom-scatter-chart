import { Module, customModule, Container } from '@ijstech/components';
import ScomScatterChart from '@scom/scom-scatter-chart';

@customModule
export default class Module1 extends Module {
    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    async init() {
        super.init();
    }

    render() {
        return <i-panel>
            <i-scom-scatter-chart
                margin={{ left: 'auto', right: 'auto' }}
                data={{
                    apiEndpoint: 'https://api.dune.com/api/v1/query/2360905/results?api_key=324WhvsCHWCji2pkgtfa0JDqDu8j0FdD',
                    options: {
                        title: 'ETH Withdrawals after Shanghai Unlock vs ETH price',
                        options: {
                            xColumn: {
                                key: 'time',
                                type: 'time'
                            },
                            yColumns: [
                                'eth_price',
                            ],
                            seriesOptions: [
                                {
                                    key: 'eth_price',
                                    title: 'ETH Price'
                                }
                            ],
                            xAxis: {
                                title: 'Date',
                                tickFormat: 'MMM DD'
                            },
                            yAxis: {
                                labelFormat: '$0[].0a',
                                position: 'left'
                            }
                        }
                    }
                }}
            />
        </i-panel>
    }
}