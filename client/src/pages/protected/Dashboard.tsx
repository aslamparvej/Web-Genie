import { FolderOpen, Coins, Globe, HardDrive } from "lucide-react";

const dashboardStats = [
  {
    title: "Projects",
    value: 12,
    change: "+2 this month",
    icon: FolderOpen,
    color: "blue",
  },
  {
    title: "AI Credits",
    value: 1450,
    change: "350 used today",
    icon: Coins,
    color: "yellow",
  },
  {
    title: "Published Sites",
    value: 8,
    change: "+1 this week",
    icon: Globe,
    color: "green",
  },
  {
    title: "Storage Used",
    value: "2.8 GB",
    change: "of 10 GB",
    icon: HardDrive,
    color: "purple",
  },
];

const recentProjects = [
  {
    id: 1,
    name: "Portfolio Website",
    status: "Published",
    lastEdited: "2 hours ago",
    pages: 5,
  },
  {
    id: 2,
    name: "Restaurant Landing Page",
    status: "Draft",
    lastEdited: "Yesterday",
    pages: 3,
  },
  {
    id: 3,
    name: "Fitness Coach Website",
    status: "Published",
    lastEdited: "3 days ago",
    pages: 7,
  },
  {
    id: 4,
    name: "SaaS Startup",
    status: "Generating",
    lastEdited: "Just now",
    pages: 4,
  },
];

const recentActivities = [
  {
    id: 1,
    action: "Generated a landing page",
    project: "SaaS Startup",
    time: "5 min ago",
  },
  {
    id: 2,
    action: "Published website",
    project: "Portfolio Website",
    time: "2 hours ago",
  },
  {
    id: 3,
    action: "Generated AI logo",
    project: "Restaurant Landing Page",
    time: "Yesterday",
  },
  {
    id: 4,
    action: "Purchased 2,000 AI Credits",
    project: "-",
    time: "3 days ago",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-[calc(100vh-5rem-1px)] py-4 lg:py-8">
      <div className="h-full p-4 rounded-xl bg-secondary-500 lg:p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-4  mb-8  md:grid-cols-2 lg:gap-8 lg:grid-cols-4">
          {dashboardStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-4 flex items-center justify-between border border-gray-800 rounded-xl"
              >
                <div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <span className="text-gray-400 text-sm font-normal">
                    {" "}
                    {stat.change}
                  </span>
                  <h2 className="text-gray-300 text-sm mt-2">{stat.title}</h2>
                </div>
                <Icon size={40} color={stat.color} />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="min-h-70 p-8 flex items-center justify-center border border-gray-800 rounded-xl">
            <h2 className="text-gray-300">Working on it</h2>
          </div>
          <div className="min-h-70 p-8 flex items-center justify-center border border-gray-800 rounded-xl">
            <h2 className="text-gray-300">Working on it</h2>
          </div>
          <div className="min-h-70 row-span-2 p-4 border border-gray-800 rounded-xl">
            <h2 className="text-lg font-medium mb-2">Recent Activities</h2>
            <div className="divide-y divide-gray-800 ">
              {recentActivities.map((activty) => (
                <div
                  key={activty.id}
                  className="py-2 flex items-center justify-between"
                >
                  <div>
                    <h2 className="text-[1rem] font-semibold">
                      {activty.project}
                    </h2>
                    <p className="text-sm text-gray-400">{activty.action}</p>
                  </div>
                  <p className="text-xs">{activty.time}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 border border-gray-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="border-b border-gray-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Last Edited
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                      No. of Pages
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {recentProjects.map((project) => (
                    <tr
                      key={project.id}
                      className="transition-colors hover:bg-secondary-400"
                    >
                      <td className="px-6 py-4 font-medium text-gray-400">
                        {project.name}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-400">
                        {project.status}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-400">
                        {project.lastEdited}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-400">
                        {project.pages}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
