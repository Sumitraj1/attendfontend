// app/dashboard/principal/sessions/page.tsx
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
  Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Session {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'inactive';
}

const sessions: Session[] = [
  {
    id: '1',
    name: '2024-25',
    startDate: '1/4/2024',
    endDate: '31/3/2025',
    status: 'active'
  },
  {
    id: '2',
    name: '2023-24',
    startDate: '1/4/2023',
    endDate: '31/3/2024',
    status: 'inactive'
  }
];

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: School, label: 'School Profile', href: '/dashboard/school-profile' },
  { icon: Calendar, label: 'Sessions', href: '/dashboard/sessions', active: true },
  { icon: BookOpen, label: 'Classes', href: '/class' },
  { icon: Users, label: 'Teachers', href: '/teacher' }
];

export default function SessionsPage() {
  const [isAddSessionOpen, setIsAddSessionOpen] = useState(false);
  const [formData, setFormData] = useState({
    sessionName: '',
    startDate: '',
    endDate: ''
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
    setFormData({ sessionName: '', startDate: '', endDate: '' });
    setIsAddSessionOpen(false);
  };

  const handleCancel = () => {
    setFormData({ sessionName: '', startDate: '', endDate: '' });
    setIsAddSessionOpen(false);
  };

  const handleDelete = (sessionId: string) => {
    console.log('Delete session:', sessionId);
  };

  const handleSetActive = (sessionId: string) => {
    console.log('Set active session:', sessionId);
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
              <Calendar className="w-8 h-8 text-teal-500" />
              <h1 className="text-3xl font-bold text-gray-900">Academic Sessions</h1>
            </div>
            <p className="text-gray-500">
              Manage your school's academic sessions
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Principal</span>
            <Avatar className="w-10 h-10 bg-teal-500">
              <AvatarFallback className="bg-teal-500 text-white">
                P
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {/* Add Session Button */}
          <div className="mb-6 flex justify-end">
            <Button 
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white"
              onClick={() => setIsAddSessionOpen(!isAddSessionOpen)}
            >
              {isAddSessionOpen ? (
                <>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Session
                </>
              )}
            </Button>
          </div>

          {/* Add Session Form - Slide Down */}
          <AnimatePresence>
            {isAddSessionOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden mb-6"
              >
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Create New Session
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Session Name Field */}
                      <div className="space-y-2">
                        <Label htmlFor="sessionName" className="text-sm font-medium text-gray-700">
                          Session Name
                        </Label>
                        <Input
                          id="sessionName"
                          name="sessionName"
                          type="text"
                          placeholder="e.g., 2025-26"
                          value={formData.sessionName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      {/* Start Date Field */}
                      <div className="space-y-2">
                        <Label htmlFor="startDate" className="text-sm font-medium text-gray-700">
                          Start Date
                        </Label>
                        <div className="relative">
                          <Input
                            id="startDate"
                            name="startDate"
                            type="date"
                            placeholder="dd-mm-yyyy"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            className="pr-10"
                            required
                          />
                          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* End Date Field */}
                      <div className="space-y-2">
                        <Label htmlFor="endDate" className="text-sm font-medium text-gray-700">
                          End Date
                        </Label>
                        <div className="relative">
                          <Input
                            id="endDate"
                            name="endDate"
                            type="date"
                            placeholder="dd-mm-yyyy"
                            value={formData.endDate}
                            onChange={handleInputChange}
                            className="pr-10"
                            required
                          />
                          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-2">
                      <Button
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-600 text-white"
                      >
                        Create Session
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

          {/* Sessions List */}
          <div className="space-y-4">
            {sessions.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-sm border p-6 ${
                  session.status === 'active' ? 'border-teal-500 border-2' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>

                    {/* Session Info */}
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-gray-900">
                          {session.name}
                        </h3>
                        {session.status === 'active' && (
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            Active
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        {session.startDate} - {session.endDate}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    {session.status !== 'active' && (
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                        onClick={() => handleSetActive(session.id)}
                      >
                        Set Active
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDelete(session.id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}