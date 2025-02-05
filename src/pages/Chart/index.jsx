import React, {useContext } from 'react'

import { MainContext } from "../components/Records";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
const Chart = () => {
    const data = useContext(MainContext);
    console.log(useContext(MainContext));
    const dataList = {
        credits: data.credits,
        debits: data.debits,
        balance: data.balance
    }
    const data1 = [
        {
            name: "credits",
            pre: 100,
            now: dataList.credits,
            amt: 2210
        },
        {
            name: "debits",
            pre: -100,
            now: dataList.debits,
            amt: 2290
        },
        {
            name: "balance",
            pre: 200,
            now: dataList.balance,
            amt: 2400
        },

    ];
    return (
        <div>
            <div>
                <>
                    <BarChart
                        width={500}
                        height={300}
                        data={data1}

                        margin={{
                            top: 5,
                            right: 10,
                            left: 10,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pre" fill="#8884d8" />
                        <Bar dataKey="now" fill="#82ca9d" />
                    </BarChart>
                </>
            </div>
        </div>
    );
};

export default Chart;