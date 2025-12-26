// app/dashboard/principal/teachers/page.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Plus,
  Mail,
  BookOpen,
  LogOut,
  LayoutDashboard,
  School,
  Calendar,
  GraduationCap,
  X,
  User,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Teacher {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'pending';
  class?: string;
  avatar: string;
  color: string;
}

const teachers: Teacher[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@school.edu',
    status: 'active',
    class: 'Class 10 - A',
    avatar: 'S',
    color: 'bg-teal-500'
  },
  {
    id: '2',
    name: 'Mike Williams',
    email: 'mike@school.edu',
    status: 'active',
    class: 'Class 10 - B',
    avatar: 'M',
    color: 'bg-teal-500'
  },
  {
    id: '3',
    name: 'Emily Davis',
    email: 'emily@school.edu',
    status: 'active',
    class: 'Class 9 - A',
    avatar: 'E',
    color: 'bg-teal-500'
  },
  {
    id: '4',
    name: 'John Brown',
    email: 'john@school.edu',
    status: 'pending',
    avatar: 'J',
    color: 'bg-teal-500'
  }
];

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: School, label: 'School Profile', href: '/dashboard/school-profile' },
  { icon: Calendar, label: 'Sessions', href: '/session' },
  { icon: BookOpen, label: 'Classes', href: '/class' },
  { icon: Users, label: 'Teachers', href: '/dashboard/teachers', active: true }
];

export default function TeachersPage() {
  const [isAddTeacherOpen, setIsAddTeacherOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form and close
    setFormData({ name: '', email: '', password: '' });
    setIsAddTeacherOpen(false);
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', password: '' });
    setIsAddTeacherOpen(false);
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
              <Users className="w-8 h-8 text-teal-500" />
              <h1 className="text-3xl font-bold text-gray-900">Teachers</h1>
            </div>
            <p className="text-gray-500">
              Manage teacher accounts and class assignments
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
          <div className="bg-white rounded-xl shadow-sm border">
            {/* Section Header */}
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                All Teachers ({teachers.length})
              </h2>
              <Button 
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white"
                onClick={() => setIsAddTeacherOpen(!isAddTeacherOpen)}
              >
                {isAddTeacherOpen ? (
                  <>
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Teacher
                  </>
                )}
              </Button>
            </div>

            {/* Add Teacher Form - Slide Down */}
            <AnimatePresence>
              {isAddTeacherOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden border-b bg-gray-50"
                >
                  <div className="px-6 py-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Add New Teacher
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Name Field */}
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Teacher Name *
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Enter full name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email Address *
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="teacher@school.edu"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        {/* Temporary Password Field */}
                        <div className="space-y-2">
                          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Temporary Password *
                          </Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              id="password"
                              name="password"
                              type="text"
                              placeholder="Enter temporary password"
                              value={formData.password}
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
                          Add Teacher
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

            {/* Teachers List */}
            <div className="divide-y">
              {teachers.map((teacher, index) => (
                <motion.div
                  key={teacher.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-5 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className={`w-14 h-14 ${teacher.color}`}>
                        <AvatarFallback
                          className={`${teacher.color} text-white text-xl font-semibold`}
                        >
                          {teacher.avatar}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {teacher.name}
                          </h3>
                          <Badge
                            variant={
                              teacher.status === 'active'
                                ? 'default'
                                : 'secondary'
                            }
                            className={
                              teacher.status === 'active'
                                ? 'bg-green-100 text-green-700 hover:bg-green-100'
                                : 'bg-orange-100 text-orange-700 hover:bg-orange-100'
                            }
                          >
                            {teacher.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>{teacher.email}</span>
                          </div>
                          {teacher.class && (
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4" />
                              <span>{teacher.class}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {teacher.status === 'pending' && (
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        Assign Class
                      </Button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}