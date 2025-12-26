// app/dashboard/principal/holidays/page.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Plus,
  LogOut,
  LayoutDashboard,
  School,
  Calendar as CalendarIcon,
  GraduationCap,
  X,
  BookOpen,
  Trash2,
  CalendarDays,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Holiday {
  id: string;
  date: string;
  name: string;
  type: 'public' | 'school';
}

const holidays: Holiday[] = [
  { id: '1', date: '2024-12-25', name: 'Christmas Day', type: 'public' },
  { id: '2', date: '2024-12-26', name: 'Boxing Day', type: 'public' },
  { id: '3', date: '2025-01-01', name: 'New Year Day', type: 'public' },
  { id: '4', date: '2025-01-26', name: 'Republic Day', type: 'public' },
  { id: '5', date: '2025-03-15', name: 'Annual Day', type: 'school' },
];

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: School, label: 'School Profile', href: '/dashboard/school-profile' },
  { icon: CalendarIcon, label: 'Sessions', href: '/session' },
  { icon: BookOpen, label: 'Classes', href: 'class' },
  { icon: Users, label: 'Teachers', href: '/teacher' },
  { icon: CalendarDays, label: 'Holidays', href: '/dashboard/holidays', active: true }
];

export default function HolidaysPage() {
  const [isAddHolidayOpen, setIsAddHolidayOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [formData, setFormData] = useState({
    holidayName: '',
    holidayDate: '',
    holidayType: 'public' as 'public' | 'school'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ holidayName: '', holidayDate: '', holidayType: 'public' });
    setIsAddHolidayOpen(false);
  };

  const handleCancel = () => {
    setFormData({ holidayName: '', holidayDate: '', holidayType: 'public' });
    setIsAddHolidayOpen(false);
  };

  const handleDelete = (holidayId: string) => {
    console.log('Delete holiday:', holidayId);
  };

  // Calendar logic
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const isHoliday = (day: number) => {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    const dateStr = `${year}-${month}-${dayStr}`;
    return holidays.find(h => h.date === dateStr);
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 bg-primary text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-primary-dark">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8" />
            <span className="text-2xl font-bold">AttendEase</span>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-6 border-b border-primary-dark">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 bg-teal-500">
              <AvatarFallback className="bg-teal-500 text-white text-lg">
                D
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">Demo Principal</h3>
              <p className="text-sm text-primary-light">Principal</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    item.active
                      ? 'bg-teal-500 text-white'
                      : 'text-primary-light hover:bg-primary-dark hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-primary-dark">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-primary-light hover:bg-primary-dark hover:text-white rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b px-8 py-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <CalendarDays className="w-8 h-8 text-teal-500" />
              <h1 className="text-3xl font-bold text-gray-900">Holiday Management</h1>
            </div>
            <p className="text-gray-500">
              Manage school holidays and mark them on calendar
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Demo Principal</span>
            <span className="text-xs text-gray-400">Principal</span>
            <Avatar className="w-10 h-10 bg-teal-500">
              <AvatarFallback className="bg-teal-500 text-white">
                D
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {monthName} {year}
                  </h2>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={previousMonth}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextMonth}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {/* Day Headers */}
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div
                      key={day}
                      className="text-center font-semibold text-gray-600 text-sm py-2"
                    >
                      {day}
                    </div>
                  ))}

                  {/* Calendar Days */}
                  {calendarDays.map((day, index) => {
                    const holiday = day ? isHoliday(day) : null;
                    const today = day ? isToday(day) : false;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.01 }}
                        className={`
                          aspect-square flex flex-col items-center justify-center rounded-lg text-sm
                          ${!day ? 'invisible' : ''}
                          ${holiday ? 'bg-red-500 text-white font-semibold hover:bg-red-600 cursor-pointer' : 'hover:bg-gray-100'}
                          ${today && !holiday ? 'bg-teal-500 text-white font-semibold' : ''}
                          ${!holiday && !today ? 'text-gray-700' : ''}
                          transition-colors relative group
                        `}
                      >
                        {day}
                        {holiday && (
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                            {holiday.name}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex items-center gap-6 mt-6 pt-6 border-t">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-sm text-gray-600">Holiday</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-teal-500 rounded"></div>
                    <span className="text-sm text-gray-600">Today</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Holidays List & Add Section */}
            <div className="space-y-6">
              {/* Add Holiday Button */}
              <Button 
                className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white"
                onClick={() => setIsAddHolidayOpen(!isAddHolidayOpen)}
              >
                {isAddHolidayOpen ? (
                  <>
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Holiday
                  </>
                )}
              </Button>

              {/* Add Holiday Form */}
              <AnimatePresence>
                {isAddHolidayOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white rounded-xl shadow-sm border p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Add New Holiday
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="holidayName" className="text-sm font-medium text-gray-700">
                            Holiday Name *
                          </Label>
                          <Input
                            id="holidayName"
                            name="holidayName"
                            type="text"
                            placeholder="Enter holiday name"
                            value={formData.holidayName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="holidayDate" className="text-sm font-medium text-gray-700">
                            Date *
                          </Label>
                          <Input
                            id="holidayDate"
                            name="holidayDate"
                            type="date"
                            value={formData.holidayDate}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="holidayType" className="text-sm font-medium text-gray-700">
                            Type *
                          </Label>
                          <select
                            id="holidayType"
                            name="holidayType"
                            value={formData.holidayType}
                            onChange={handleInputChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            required
                          >
                            <option value="public">Public Holiday</option>
                            <option value="school">School Holiday</option>
                          </select>
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                          <Button
                            type="submit"
                            className="flex-1 bg-teal-500 hover:bg-teal-600 text-white"
                          >
                            Add Holiday
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={handleCancel}
                            className="flex-1"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Holidays List */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Upcoming Holidays
                </h3>
                <div className="space-y-3">
                  {holidays.slice(0, 5).map((holiday, index) => (
                    <motion.div
                      key={holiday.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {holiday.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {new Date(holiday.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                        <Badge
                          className={`mt-1 text-xs ${
                            holiday.type === 'public'
                              ? 'bg-blue-100 text-blue-700 hover:bg-blue-100'
                              : 'bg-purple-100 text-purple-700 hover:bg-purple-100'
                          }`}
                        >
                          {holiday.type === 'public' ? 'Public' : 'School'}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDelete(holiday.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}