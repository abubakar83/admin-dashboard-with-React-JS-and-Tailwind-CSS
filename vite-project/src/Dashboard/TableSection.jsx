import { MoreHorizontal } from "lucide-react";

const recentOrders = [
  {
    id: "#3847",
    customer: "Johan Smith",
    product: "Mackbook Pro 16",
    amount: "$2,399",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "#3848",
    customer: "Sarah Johnsaon",
    product: "Mackbook 15 Pro",
    amount: "$1,999",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: "#3849",
    customer: "Mike Wilson",
    product: "AirPods Pro",
    amount: "$249",
    status: "completed",
    date: "2024-01-14",
  },
  {
    id: "#3850",
    customer: "Emily Davis",
    product: "iPad Air",
    amount: "$599",
    status: "cancelled",
    date: "2024-01-14",
  },
];

const TopProducts = [
  {
    name: "MacBook Pro 16",
    sales: 1247,
    revenue: "$2,987,530",
    trend: "up",
    change: "+12%",
  },
];

const TableSection = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400";
    }
  };
  return (
    <div className="space-y-6">
      {/* Recent Orders */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest customer orders
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Order ID
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Product
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Amount
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Status
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Date
                </th>
              </tr>
              <tbody>
                <tr className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">
                    <span className="text-sm font-medium text-blue">
                      Order ID
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      Customer
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-medium text-blue">
                      Product
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-medium text-blue">
                      Amount
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`text-slate-400 dark:text-white font-medium text-xs px-3 py-1 rounded-full`}
                    >
                      Order status
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-medium text-blue">
                      <MoreHorizontal className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
