'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Users,
  LogOut,
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  TrendingUp,
  Calendar as CalendarIcon,
  ArrowRight,
  UserCheck
} from 'lucide-react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';

/* ---------------- TYPES ---------------- */
interface StatCard {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  color: string;
}

interface QuickAction {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  href: string;
}

interface AttendanceRecord {
  date: string;
  present: number;
  absent: number;
  percentage: number;
}

/* ---------------- DATA ---------------- */
const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard/teacher', active: true },
  { icon: BookOpen, label: 'My Class', href: '/dashboard/teacher/my-class' },
  { icon: Users, label: 'Students', href: '/dashboard/teacher/students' },
  { icon: ClipboardCheck, label: 'Attendance', href: '/dashboard/teacher/attendance' }
];

const stats: StatCard[] = [
  { icon: <Users className="w-6 h-6" />, value: 35, label: 'Total Students', color: 'bg-teal-500' },
  { icon: <UserCheck className="w-6 h-6" />, value: 32, label: 'Present Today', color: 'bg-green-500' },
  { icon: <TrendingUp className="w-6 h-6" />, value: '91.4%', label: 'Attendance Rate', color: 'bg-orange-500' },
  { icon: <CalendarIcon className="w-6 h-6" />, value: 45, label: 'Days Recorded', color: 'bg-blue-900' }
];

const quickActions: QuickAction[] = [
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Take Today's Attendance",
    description: 'Mark attendance for your class',
    color: 'bg-teal-500',
    href: '/dashboard/teacher/attendance'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Manage Students',
    description: 'Add or edit student details',
    color: 'bg-gray-100',
    href: '/dashboard/teacher/students'
  }
];

const recentAttendance: AttendanceRecord[] = [
  { date: 'Dec 13, 2024', present: 33, absent: 2, percentage: 94.3 },
  { date: 'Dec 12, 2024', present: 30, absent: 5, percentage: 85.7 },
  { date: 'Dec 11, 2024', present: 34, absent: 1, percentage: 97.1 }
];

/* ---------------- PAGE ---------------- */
export default function TeacherDashboardPage() {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ---------------- SIDEBAR ---------------- */}
      <aside className="hidden lg:flex w-72 bg-primary text-white flex-col">
        <div className="p-6 border-b border-primary-dark">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8" />
            <span className="text-2xl font-bold">AttendEase</span>
          </div>
        </div>

        <div className="p-6 border-b border-primary-dark">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 bg-teal-500">
              <AvatarFallback className="text-white text-lg">D</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">Demo Teacher</h3>
              <p className="text-sm text-primary-light">Teacher</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                item.active
                  ? 'bg-teal-500'
                  : 'text-primary-light hover:bg-primary-dark'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-primary-dark">
          <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-primary-dark rounded-lg">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* ---------------- MAIN ---------------- */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b px-6 md:px-8 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Good morning, Demo 📚</h1>
            <p className="text-gray-500">Your assigned class</p>
          </div>
          <Avatar className="bg-teal-500">
            <AvatarFallback className="text-white">D</AvatarFallback>
          </Avatar>
        </header>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6">
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold">{stat.value}</h3>
                  <p className="text-gray-500">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* Quick Actions */}
            <Card className="xl:col-span-1 p-6">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action, i) => (
                  <motion.button
                    key={action.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => router.push(action.href)}
                    className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50"
                  >
                    <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                      {action.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold">{action.title}</h3>
                      <p className="text-sm text-gray-500">{action.description}</p>
                    </div>
                    <ArrowRight className="text-teal-500" />
                  </motion.button>
                ))}
              </div>
            </Card>

            {/* Calendar */}
            <Card className="xl:col-span-1 p-6">
              <h2 className="text-xl font-bold mb-4">Calendar</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border mx-auto"
                classNames={{
                  day_selected: 'bg-teal-500 text-white',
                  day_today: 'border border-teal-500'
                }}
              />
              {date && (
                <p className="text-sm text-center mt-4 text-gray-600">
                  Selected: <span className="font-semibold">{date.toDateString()}</span>
                </p>
              )}
            </Card>

            {/* Recent Attendance */}
            <Card className="xl:col-span-2 p-6">
              <h2 className="text-xl font-bold mb-4">Recent Attendance</h2>
              <div className="space-y-4">
                {recentAttendance.map((r, i) => (
                  <motion.div
                    key={r.date}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold">{r.date}</h3>
                      <p className="text-sm text-gray-500">
                        {r.present} present, {r.absent} absent
                      </p>
                    </div>
                    <span
                      className={`text-xl font-bold ${
                        r.percentage >= 90
                          ? 'text-green-500'
                          : r.percentage >= 80
                          ? 'text-orange-500'
                          : 'text-red-500'
                      }`}
                    >
                      {r.percentage}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
