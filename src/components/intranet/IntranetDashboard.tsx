import Badge from "../ui/badge/Badge";
import {
  CalenderIcon,
  ChatIcon,
  DocsIcon,
  EyeIcon,
  TaskIcon,
  TimeIcon,
  UserIcon,
} from "../../icons";

const scheduleItems = [
  {
    title: "Business Statistics",
    status: "Live",
    statusColor: "success" as const,
    meta: "Room 301 • Dr. Smith",
    time: "09:00 - 10:30",
    accent: "border-brand-500 bg-brand-25/70",
    timeColor: "text-brand-600",
  },
  {
    title: "Microeconomics",
    meta: "Room 205 • Prof. Johnson",
    time: "11:00 - 12:30",
    accent: "border-gray-200 bg-gray-50",
    timeColor: "text-gray-500",
  },
  {
    title: "Academic English",
    meta: "Room 102 • Ms. Williams",
    time: "14:00 - 15:30",
    accent: "border-gray-200 bg-gray-50",
    timeColor: "text-gray-500",
  },
];

const deadlineItems = [
  {
    title: "Statistics Report",
    badge: "Urgent",
    badgeColor: "error" as const,
    meta: "Business Statistics • CW1",
    dueIn: "2 days",
    date: "Feb 7",
    accent: "border-error-500 bg-error-25",
    dueColor: "text-error-600",
  },
  {
    title: "Economics Essay",
    meta: "Microeconomics • CW2",
    dueIn: "5 days",
    date: "Feb 10",
    accent: "border-warning-500 bg-warning-25",
    dueColor: "text-warning-600",
  },
  {
    title: "Group Presentation",
    meta: "Academic English • CW1",
    dueIn: "12 days",
    date: "Feb 17",
    accent: "border-gray-200 bg-gray-50",
    dueColor: "text-gray-500",
  },
];

const progressStats = [
  {
    label: "Attendance",
    value: "92%",
    bg: "bg-success-25",
    text: "text-success-700",
  },
  {
    label: "Current GPA",
    value: "3.7",
    bg: "bg-blue-light-25",
    text: "text-blue-light-700",
  },
  {
    label: "CW Submitted",
    value: "4/6",
    bg: "bg-warning-25",
    text: "text-warning-700",
  },
  {
    label: "Credits Earned",
    value: "68",
    bg: "bg-brand-25",
    text: "text-brand-700",
  },
];

const quickActions = [
  {
    label: "Submit Work",
    icon: TaskIcon,
    iconBg: "bg-brand-25",
    iconColor: "text-brand-600",
  },
  {
    label: "View Grades",
    icon: EyeIcon,
    iconBg: "bg-success-25",
    iconColor: "text-success-600",
  },
  {
    label: "Book Room",
    icon: CalenderIcon,
    iconBg: "bg-warning-25",
    iconColor: "text-warning-600",
  },
  {
    label: "Get Support",
    icon: ChatIcon,
    iconBg: "bg-error-25",
    iconColor: "text-error-600",
  },
];

const essentialServices = [
  {
    title: "LMS",
    desc: "Learning Management",
    icon: DocsIcon,
    iconBg: "bg-blue-light-25",
    iconColor: "text-blue-light-700",
  },
  {
    title: "Timetable",
    desc: "Class Schedule",
    icon: CalenderIcon,
    iconBg: "bg-success-25",
    iconColor: "text-success-600",
  },
  {
    title: "Coursework",
    desc: "Submissions & Grades",
    icon: TaskIcon,
    iconBg: "bg-error-25",
    iconColor: "text-error-600",
  },
  {
    title: "SRS",
    desc: "Student Record",
    icon: UserIcon,
    iconBg: "bg-warning-25",
    iconColor: "text-warning-600",
  },
];

export default function IntranetDashboard() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white/90">
                Good morning, John! 👋
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Here's what's happening today
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300">
              <CalenderIcon className="size-4" />
              Friday, February 6, 2026
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="relative w-full sm:w-[320px]">
              <span className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2 text-gray-400">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.5 17.5L14.5833 14.5833"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search or type command..."
                className="h-11 w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-11 pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-brand-700 dark:text-white/90">
                  Today's Schedule
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  3 classes remaining
                </p>
              </div>
              <TimeIcon className="size-5 text-brand-500" />
            </div>

            <div className="mt-6 space-y-4">
              {scheduleItems.map((item) => (
                <div
                  key={item.title}
                  className={`flex items-start justify-between gap-4 rounded-xl border border-l-4 p-4 dark:border-gray-800 dark:bg-white/[0.02] ${item.accent}`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-800 dark:text-white/90">
                        {item.title}
                      </p>
                      {item.status && item.statusColor && (
                        <Badge size="sm" color={item.statusColor}>
                          {item.status}
                        </Badge>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {item.meta}
                    </p>
                  </div>
                  <p className={`text-sm font-medium dark:text-gray-300 ${item.timeColor}`}>
                    {item.time}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-5 text-theme-sm font-medium text-brand-600 hover:text-brand-700">
              View full timetable →
            </button>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-brand-700 dark:text-white/90">
                  Upcoming Deadlines
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2 due this week
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {deadlineItems.map((item) => (
                <div
                  key={item.title}
                  className={`flex items-center justify-between gap-4 rounded-xl border border-l-4 p-4 dark:border-gray-800 dark:bg-white/[0.02] ${item.accent}`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-800 dark:text-white/90">
                        {item.title}
                      </p>
                      {item.badge && item.badgeColor && (
                        <Badge size="sm" color={item.badgeColor}>
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {item.meta}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-semibold ${item.dueColor}`}>
                      {item.dueIn}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-5 text-theme-sm font-medium text-error-600 hover:text-error-700">
              View all coursework →
            </button>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03]">
            <div>
              <h3 className="text-lg font-semibold text-brand-700 dark:text-white/90">
                Your Progress
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Semester 2, 2025-26
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {progressStats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-xl border border-gray-100 p-4 text-center dark:border-gray-800 dark:bg-white/[0.02] ${stat.bg}`}
                >
                  <p className={`text-2xl font-semibold ${stat.text}`}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-5 text-theme-sm font-medium text-brand-600 hover:text-brand-700">
              View full record →
            </button>
          </div>
        </div>

        <div className="col-span-12 space-y-6 xl:col-span-5">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03]">
            <div>
              <h3 className="text-lg font-semibold text-brand-700 dark:text-white/90">
                Quick Actions
              </h3>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:border-brand-200 hover:text-brand-600 dark:border-gray-800 dark:bg-white/[0.02] dark:text-gray-300"
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${action.iconBg}`}
                  >
                    <action.icon className={`size-4 ${action.iconColor}`} />
                  </span>
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-brand-700 dark:text-white/90">
                  Essential Services
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Quick access to key systems
                </p>
              </div>
              <button className="text-theme-sm font-medium text-brand-600 hover:text-brand-700">
                View all services →
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {essentialServices.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col items-center rounded-xl border border-gray-100 bg-white px-4 py-4 text-center shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.02]"
                >
                  <span
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${service.iconBg}`}
                  >
                    <service.icon className={`size-5 ${service.iconColor}`} />
                  </span>
                  <p className="font-medium text-gray-800 dark:text-white/90">
                    {service.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-brand-700 dark:text-white/90">
                Announcements
              </h3>
              <button className="text-theme-sm font-medium text-brand-600 hover:text-brand-700">
                Show all
              </button>
            </div>

            <div className="mt-5 rounded-xl border border-brand-100/80 bg-brand-25/70 p-4 dark:border-gray-800 dark:bg-white/[0.02]">
              <h4 className="font-medium text-brand-700 dark:text-white/90">
                Semester 2 Registration Now Open
              </h4>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                All students must complete module registration by February 15,
                2026. Visit the Registrar portal for more details.
              </p>
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                Posted 2 days ago by Academic Office
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
