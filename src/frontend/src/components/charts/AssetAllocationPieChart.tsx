import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface AllocationData {
  name: string;
  value: number;
  color: string;
}

interface Props {
  data: AllocationData[];
}

export default function AssetAllocationPieChart({ data }: Props) {
  if (!data || data.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="space-y-2 text-center">
          <p className="text-sm font-medium">No allocation data available</p>
          <div className="space-y-1">
            {data.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-4">
                <span className="text-sm">{item.name}</span>
                <span className="font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid gap-2 sm:grid-cols-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2 rounded-lg border p-3">
            <div className="h-4 w-4 rounded" style={{ backgroundColor: item.color }} />
            <div className="flex-1">
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-lg font-bold">{item.value}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
