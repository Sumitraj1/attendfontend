"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LoginPage() {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const demoAccounts = [
    { type: "Principal", email: "principal@school.edu", password: "principal123" },
    { type: "Teacher", email: "teacher@school.edu", password: "teacher123" },
    { type: "Student", email: "student@school.edu", password: "student123" },
  ];

  const handleDemoClick = (type: string) => {
    setSelectedDemo(type);
    const demo = demoAccounts.find(acc => acc.type === type);
    if (demo) {
      // Auto-fill demo credentials
      const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
      const passwordInput = document.querySelector('input[type="password"]') as HTMLInputElement;
      if (emailInput) emailInput.value = demo.email;
      if (passwordInput) passwordInput.value = demo.password;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center p-3 sm:p-4 md:p-6">
      {/* Back to Home Button - Responsive */}
      <Link 
        href="/" 
        className="fixed top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors group z-50"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium text-sm sm:text-base hidden sm:inline">Back to Home</span>
        <span className="font-medium text-sm sm:hidden">Back</span>
      </Link>

      {/* Login Card - Fully Responsive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[95%] sm:max-w-md"
      >
        <div className="bg-card rounded-2xl sm:rounded-3xl shadow-2xl border border-border p-6 sm:p-8 md:p-10">
          {/* Logo & Header - Responsive */}
          <div className="text-center mb-6 sm:mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center"
            >
              <GraduationCap className="w-7 h-7 sm:w-9 sm:h-9 text-primary-foreground" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold text-foreground mb-2"
            >
              Welcome Back
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-muted-foreground"
            >
              Login to access your dashboard
            </motion.p>
          </div>

          {/* Login Form - Responsive */}
          <form className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                Email
              </label>
              <input
                type="email"
                defaultValue=""
                placeholder="you@school.edu"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  defaultValue=""
                  placeholder="••••••••"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all pr-10 sm:pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 sm:right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password - Responsive */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border" />
                <span className="text-xs sm:text-sm text-muted-foreground">Remember me</span>
              </label>
              <a href="#" className="text-xs sm:text-sm text-primary hover:underline font-medium">
                Forgot password?
              </a>
            </div>

            <Button 
              type="submit"
              className="w-full h-11 sm:h-12 bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold rounded-lg sm:rounded-xl transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Login
            </Button>
          </form>

          {/* Demo Accounts - Responsive */}
          <div className="mt-6 sm:mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-3 sm:px-4 bg-card text-muted-foreground">Try demo accounts</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6">
              {demoAccounts.map((account) => (
                <motion.button
                  key={account.type}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDemoClick(account.type)}
                  className={`px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm rounded-lg sm:rounded-xl border-2 font-medium transition-all ${
                    selectedDemo === account.type
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/50"
                  }`}
                >
                  {account.type}
                </motion.button>
              ))}
            </div>

            <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4">
              Click to fill credentials, then click Login
            </p>
          </div>

          {/* Register Link - Responsive */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link 
                href="/register" 
                className="text-blue font-semibold hover:underline transition-colors"
              >
                Register your school
              </Link>
            </p>
          </div>

          {/* Divider - Mobile Only */}
          <div className="mt-6 pt-6 border-t border-border sm:hidden">
            <p className="text-xs text-center text-muted-foreground">
              Secure login powered by AttendEase
            </p>
          </div>
        </div>

        {/* Safe Area for Mobile - Extra padding at bottom */}
        <div className="h-4 sm:hidden" />
      </motion.div>
    </div>
  );
}