import { BarChart, Clock, Globe, ArrowUpRight } from "lucide-react"

export function DemoDashboard() {
  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col">
      {/* Top Bar */}
      <div className="h-12 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 bg-gray-50/50 dark:bg-gray-800/50">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-red-400" />
          <div className="size-3 rounded-full bg-yellow-400" />
          <div className="size-3 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400 bg-white dark:bg-gray-800 border dark:border-gray-700 px-3 py-1 rounded-md shadow-sm">
          <span>pingalert.com/dashboard</span>
        </div>
        <div className="w-12" />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 grid grid-cols-12 gap-6 bg-gray-50/30 dark:bg-gray-900/30">
        
        {/* Sidebar Mock */}
        <div className="col-span-2 hidden md:flex flex-col gap-4 border-r border-gray-100 dark:border-gray-800 pr-4">
           <div className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <div className="size-6 bg-brand-600 rounded-md" />
              PingAlert
           </div>
           {[1,2,3,4].map(i => (
              <div key={i} className="h-2 w-3/4 bg-gray-200 dark:bg-gray-800 rounded-full" />
           ))}
        </div>

        {/* Dashboard Area */}
        <div className="col-span-12 md:col-span-10 flex flex-col gap-6">
           <div className="flex justify-between items-center">
              <div>
                 <h2 className="text-xl mt-4 font-bold text-gray-900 dark:text-white">Overview</h2>
                 <p className="text-xs text-gray-500">Last updated: Just now</p>
              </div>
              <div className="px-3 py-1 bg-brand-600 text-white text-xs rounded-md">Export Report</div>
           </div>

           {/* Stats Cards */}
           <div className="grid grid-cols-3 gap-4">
              {[
                 { label: "Uptime", value: "99.99%", icon: Clock, color: "text-green-600 bg-green-100 dark:bg-green-900/30" },
                 { label: "Avg. Latency", value: "142ms", icon: Globe, color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30" },
                 { label: "Total Requests", value: "1.2M", icon: BarChart, color: "text-purple-600 bg-purple-100 dark:bg-purple-900/30" },
              ].map((stat, i) => (
                 <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                       <div className={`p-2 rounded-md ${stat.color}`}>
                          <stat.icon className="size-4" />
                       </div>
                       <span className="text-xs text-gray-400 font-mono">+2.4%</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                 </div>
              ))}
           </div>

           {/* Chart Area */}
           <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm p-4">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Response Time (24h)</h3>
                 <ArrowUpRight className="size-4 text-gray-400" />
              </div>
              <div className="flex items-end gap-2 h-32">
                 {[40, 65, 45, 80, 55, 70, 45, 60, 35, 90, 50, 65, 40, 65, 45, 80, 55, 70, 45, 60].map((h, i) => (
                    <div key={i} className="flex-1 bg-brand-500/80 rounded-t-sm hover:bg-brand-500 transition-colors" style={{ height: `${h}%` }} />
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
