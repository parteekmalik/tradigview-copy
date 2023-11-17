import axios from "axios";
import React, { useEffect, useState } from "react";

interface IChart {
    data: { time: string; high: number; low: number; open: number; close: number; duration: string; volume: number }[];
}
const url = "https://eodhd.com/api/intraday/AAPL.US?api_token=demo&interval=5m&fmt=json";
export type TChartData = {
    timestamp: number;
    gmtoffset: number;
    datetime: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
};
function Chart<IChart>(props = {}) {
    const [settings, setSettings] = useState<any>({});
    const [chartData, setChartData] = useState<TChartData[] | null>(null);
    const [Data, setData] = useState<any>(null);
    // useEffect(()=>{
    //     axios.get(url,{ crossDomain: true }).then((data)=>{
    //         data.data.map((d)=>{
    //             let keys = "";
    //             for (let key in d) {
    //                 keys+=key + " , ";
    //               }
    //             console.log(keys);
    //         })
    //         setData(data.data);
    //     })
    // },[])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5173/src/assets/exampleData.json");
                const data: TChartData[] = await response.json();
                setChartData(data);
            } catch (error) {
                console.error("Error fetching JSON data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="relative bg-gray-200 h-full w-full">
            <div className="border border-black w-[95%] h-[95%]">{JSON.stringify(chartData)}</div>
            <div className="border border-black absolute top-0 right-0 w-[5%] h-[95%]">
                <div className="flex flex-col h-full ">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                        return (
                            <div key={"price" + i} className="grow">
                                {i}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="border border-black absolute left-0 bottom-0 h-[5%] w-[95%]">
                <div className="flex w-full ">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                        return (
                            <div key={"time" + i} className="grow">
                                {i}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="border border-black absolute bottom-0 right-0 w-[5%] h-[5%]">setting</div>
        </div>
    );
}

export default Chart;
