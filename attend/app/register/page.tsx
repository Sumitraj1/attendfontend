"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center px-4 py-10">
      
      {/* Back Button */}
      <a
        href="/"
        className="fixed top-4 left-4 flex items-center gap-2 text-muted-foreground hover:text-foreground transition z-50"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Back to Home</span>
      </a>

      {/* Main Content - Centered */}
      <div className="w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <div className="bg-card rounded-3xl shadow-2xl border border-border p-8 sm:p-10">

            {/* Logo */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">
                Register Your School
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Create your school account and start managing attendance
              </p>
            </div>

            {/* FORM */}
            <div className="space-y-6">

              {/* School Information Section */}
              <div>
                <h2 className="text-lg font-semibold mb-4">School Information</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">School Name *</label>
                    <input
                      className="w-full mt-1 px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                      placeholder="Springfield Academy"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">School Email *</label>
                    <input
                      type="email"
                      className="w-full mt-1 px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                      placeholder="info@school.edu"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <input
                      type="tel"
                      className="w-full mt-1 px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Pincode</label>
                    <input
                      className="w-full mt-1 px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                      placeholder="12345"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-sm font-medium">Address</label>
                  <input
                    className="w-full mt-1 px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                    placeholder="123 Education Street, City"
                  />
                </div>
              </div>

              {/* Principal Account Section */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Principal Account</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Full Name *</label>
                    <input
                      className="w-full mt-1 px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Email *</label>
                    <input
                      type="email"
                      className="w-full mt-1 px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none"
                      placeholder="principal@school.edu"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="text-sm font-medium">Password *</label>
                    <div className="relative mt-1">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none pr-12"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Confirm Password *</label>
                    <div className="relative mt-1">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none pr-12"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full h-12 bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold rounded-xl shadow-lg"
              >
                Create Account
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-primary font-semibold hover:underline">
                Login here
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}