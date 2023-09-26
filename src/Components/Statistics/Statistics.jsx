import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../Utility/LocalStorage";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const Statistics = () => {
    const donations = useLoaderData();
    const [donate, setDonate] = useState([]);
    useEffect(() => {
        const storedDonationIds = getStoredDonations();
        if (donations.length > 0) {
            const listDonation = donations.filter(donate => storedDonationIds.includes(donate.id))
            setDonate(listDonation);
        }
    }, []);
    const doneted = (donate.length / donations.length) * 100
    const available = 100 - doneted
    const data = [
        { name: 'Donated Parcent', value: doneted },
        { name: 'Available Parcent', value: available }
    ];
    const COLORS = ['#FFBB28', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" className="text-xl font-semibold" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine='dkk'
                    label={renderCustomizedLabel}
                    // outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
            <div className="flex gap-5">
                <div className="flex gap-2">
                    <p className="text-lg">Your Donation</p>
                    <button className="bg-[#FFBB28] w-20"></button>
                </div>
                <div className="flex gap-2">
                    <p className="text-lg">Total Donation</p>
                    <button className="bg-[#00C49F] w-20"></button>
                </div>
            </div>
        </div >
    );
};

export default Statistics;