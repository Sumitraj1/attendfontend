// app/dashboard/principal/school-profile/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  LogOut,
  LayoutDashboard,
  School as SchoolIcon,
  Calendar,
  GraduationCap,
  BookOpen,
  CalendarDays,
  Save,
  Mail,
  Phone,
  MapPin,
  Hash,
  Edit3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface SchoolData {
  schoolName: string;
  email: string;
  phone: string;
  pincode: string;
  address: string;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: SchoolIcon, label: 'School Profile', href: '/dashboard/school-profile', active: true },
  { icon: Calendar, label: 'Sessions', href: '/dashboard/sessions' },
  { icon: BookOpen, label: 'Classes', href: '/dashboard/classes' },
  { icon: Users, label: 'Teachers', href: '/dashboard/teachers' },
  { icon: CalendarDays, label: 'Holidays', href: '/dashboard/holidays' }
];

export default function SchoolProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [schoolData, setSchoolData] = useState<SchoolData>({
    schoolName: 'Demo School',
    email: 'demo@school.com',
    phone: '1234567890',
    pincode: '12345',
    address: '123 Demo Street'
  });

  const [editData, setEditData] = useState<SchoolData>({ ...schoolData });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setSchoolData({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...schoolData });
    setIsEditing(false);
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
              <SchoolIcon className="w-8 h-8 text-teal-500" />
              <h1 className="text-3xl font-bold text-gray-900">School Profile</h1>
            </div>
            <p className="text-gray-500">
              Manage your school's information and settings
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
          <div className="max-w-4xl mx-auto">
            {!isEditing ? (
              // View Mode
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* School Info Card */}
                <Card className="p-8 bg-white rounded-xl shadow-sm border">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-teal-500 rounded-2xl flex items-center justify-center">
                        <SchoolIcon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {schoolData.schoolName}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                          Educational Institution
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={handleUpdate}
                      className="bg-[#F59E0B] hover:bg-[#D97706] text-white"
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      Update Profile
                    </Button>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-teal-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-500 mb-1">
                          Email Address
                        </p>
                        <p className="text-sm font-semibold text-gray-900 break-all">
                          {schoolData.email}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-teal-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-500 mb-1">
                          Phone Number
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {schoolData.phone}
                        </p>
                      </div>
                    </div>

                    {/* Pincode */}
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Hash className="w-5 h-5 text-teal-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-500 mb-1">
                          Pincode
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {schoolData.pincode}
                        </p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-teal-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-500 mb-1">
                          Address
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {schoolData.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Additional Info Card */}
                <Card className="p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl border-teal-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                      <SchoolIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      School Statistics
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-2xl font-bold text-teal-600">150</p>
                      <p className="text-xs text-gray-600 mt-1">Total Students</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-2xl font-bold text-teal-600">12</p>
                      <p className="text-xs text-gray-600 mt-1">Total Teachers</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-2xl font-bold text-teal-600">8</p>
                      <p className="text-xs text-gray-600 mt-1">Total Classes</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ) : (
              // Edit Mode
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border p-8"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  School Information
                </h2>
                <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* School Name */}
                    <div className="space-y-2">
                      <Label htmlFor="schoolName" className="text-sm font-medium text-gray-700">
                        School Name
                      </Label>
                      <Input
                        id="schoolName"
                        name="schoolName"
                        type="text"
                        placeholder="Enter school name"
                        value={editData.schoolName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        value={editData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        value={editData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Pincode */}
                    <div className="space-y-2">
                      <Label htmlFor="pincode" className="text-sm font-medium text-gray-700">
                        Pincode
                      </Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        type="text"
                        placeholder="Enter pincode"
                        value={editData.pincode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                      Address
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Enter address"
                      value={editData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4">
                    <Button
                      type="submit"
                      className="bg-[#F59E0B] hover:bg-[#D97706] text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
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
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}