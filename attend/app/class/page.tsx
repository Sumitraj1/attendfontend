// app/dashboard/principal/classes/page.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Plus,
  LogOut,
  LayoutDashboard,
  School,
  Calendar,
  GraduationCap,
  X,
  BookOpen,
  User as UserIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Class {
  id: string;
  name: string;
  section: string;
  teacher?: string;
  studentCount: number;
  icon: string;
  color: string;
}

const classes: Class[] = [
  {
    id: '1',
    name: 'Class 10',
    section: 'A',
    teacher: 'Sarah Johnson',
    studentCount: 35,
    icon: '📚',
    color: 'bg-teal-500'
  },
  {
    id: '2',
    name: 'Class 10',
    section: 'B',
    teacher: 'Mike Williams',
    studentCount: 32,
    icon: '📚',
    color: 'bg-teal-500'
  },
  {
    id: '3',
    name: 'Class 9',
    section: 'A',
    teacher: 'Emily Davis',
    studentCount: 38,
    icon: '📚',
    color: 'bg-teal-500'
  },
  {
    id: '4',
    name: 'Class 9',
    section: 'B',
    studentCount: 0,
    icon: '📚',
    color: 'bg-teal-500'
  }
];

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: School, label: 'School Profile', href: '/dashboard/school-profile' },
  { icon: Calendar, label: 'Sessions', href: '/session' },
  { icon: BookOpen, label: 'Classes', href: '/class', active: true },
  { icon: Users, label: 'Teachers', href: '/teacher' }
];

export default function ClassesPage() {
  const [isAddClassOpen, setIsAddClassOpen] = useState(false);
  const [formData, setFormData] = useState({
    className: '',
    section: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ className: '', section: '' });
    setIsAddClassOpen(false);
  };

  const handleCancel = () => {
    setFormData({ className: '', section: '' });
    setIsAddClassOpen(false);
  };

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
              <BookOpen className="w-8 h-8 text-teal-500" />
              <h1 className="text-3xl font-bold text-gray-900">Classes</h1>
            </div>
            <p className="text-gray-500">
              Manage classes and sections for your school
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
          {/* Add Class Button */}
          <div className="mb-6 flex justify-end">
            <Button 
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white"
              onClick={() => setIsAddClassOpen(!isAddClassOpen)}
            >
              {isAddClassOpen ? (
                <>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Class
                </>
              )}
            </Button>
          </div>

          {/* Add Class Form - Slide Down */}
          <AnimatePresence>
            {isAddClassOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden mb-6"
              >
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Add New Class
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Class Name Field */}
                      <div className="space-y-2">
                        <Label htmlFor="className" className="text-sm font-medium text-gray-700">
                          Class Name *
                        </Label>
                        <div className="relative">
                          <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="className"
                            name="className"
                            type="text"
                            placeholder="e.g., Class 10"
                            value={formData.className}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      {/* Section Field */}
                      <div className="space-y-2">
                        <Label htmlFor="section" className="text-sm font-medium text-gray-700">
                          Section *
                        </Label>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="section"
                            name="section"
                            type="text"
                            placeholder="e.g., A, B, C"
                            value={formData.section}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-2">
                      <Button
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-600 text-white"
                      >
                        Add Class
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classItem, index) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${classItem.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <BookOpen className="w-8 h-8 text-white" />
                </div>

                {/* Class Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {classItem.name} - {classItem.section}
                </h3>

                {/* Teacher */}
                {classItem.teacher ? (
                  <p className="text-sm text-gray-600 mb-3">
                    Teacher: {classItem.teacher}
                  </p>
                ) : (
                  <p className="text-sm text-[#F59E0B] mb-3 font-medium">
                    No teacher assigned
                  </p>
                )}

                {/* Student Count */}
                <div className="flex items-center gap-2 text-gray-500">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">
                    {classItem.studentCount} students
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}