"use client";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

type Props = {
  gross?: number;
  tax?: number;
  net?: number;
};

export default function ChartPreview({ gross = 60000, tax = 12000, net = 48000 }: Props) {
  const data = [
    { name: 'Gross', amount: gross },
    { name: 'Tax', amount: tax },
    { name: 'Net', amount: net },
  ];
  return (
    <div className="border rounded p-4">
      <h3 className="font-medium mb-3">Visualization</h3>
      <div style={{ width: '100%', height: 260 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
