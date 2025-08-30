import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
        {name: "Electronics", value: 45, color: "#3b82f6"},
        {name: "Clothing", value: 30, color: "#8b5cf6"},
        {name: "Books", value: 15, color: "#10b981"},
        {name: "Others", value: 10, color: "#f59e0b"},
    ]

const SalesChart = () => {
  return (
    <div className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-b-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 ">
        <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">Sales by Cateogry</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Production Distrbution</p>
        </div>
        <div className='h-48'>

        </div>
    </div>
  )
}

export default SalesChart