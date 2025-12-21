"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// import heroSchool from "@/app/assets/hero-school.jpg";
// import teacherAttendance from "@/app/assets/teacher-attendance.jpg";
// import principalDashboard from "@/app/assets/principal-dashboard.jpg";
// import studentsClassroom from "@/app/assets/students-classroom.jpg";

import heroSchool from "@/assets/hero-school.jpg";
import teacherAttendance from "@/assets/teacher-attendance.jpg";
import principalDashboard from "@/assets/principal-dashboard.jpg";
import studentsClassroom from "@/assets/students-classroom.jpg";
import { 
  GraduationCap, 
  Users, 
  CalendarCheck, 
  BarChart3, 
  Shield, 
  Zap,
  ChevronRight,
  CheckCircle2,
  School,
  UserCheck,
  Clock,
  Bell,
  FileText,
  Play,
  LucideIcon
} from "lucide-react";

// --- TypeScript Interfaces ---

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Step {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
}

// --- Data Constants ---

const FEATURES: Feature[] = [
  {
    icon: School,
    title: "Multi-School Support",
    description: "Manage multiple schools from a single dashboard with role-based access control."
  },
  {
    icon: Users,
    title: "Student Management",
    description: "Easily add, organize, and manage students across different classes and sessions."
  },
  {
    icon: CalendarCheck,
    title: "Daily Attendance",
    description: "Mark attendance quickly with our intuitive interface. Works on any device."
  },
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description: "Generate comprehensive attendance reports with visual analytics and insights."
  },
  {
    icon: Bell,
    title: "Parent Notifications",
    description: "Automatically notify parents when their child is marked absent."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security with role-based permissions and data encryption."
  }
];

const STEPS: Step[] = [
  { step: "01", title: "Register School", description: "Sign up your school and create your principal account", icon: School },
  { step: "02", title: "Setup Sessions", description: "Create academic sessions and define your class structure", icon: CalendarCheck },
  { step: "03", title: "Add Teachers", description: "Invite teachers and assign them to their respective classes", icon: UserCheck },
  { step: "04", title: "Track Attendance", description: "Teachers can now take daily attendance for their students", icon: Users }
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "AttendEase has completely transformed how we manage attendance. What used to take hours now takes minutes.",
    name: "Dr. Rajesh Kumar",
    role: "Principal, Delhi Public School",
    avatar: "RK"
  },
  {
    quote: "The parent notification feature has significantly improved student attendance. Parents love the real-time updates.",
    name: "Mrs. Priya Sharma",
    role: "Vice Principal, Ryan International",
    avatar: "PS"
  },
  {
    quote: "Simple, intuitive, and powerful. Our teachers adopted it within a day. Highly recommended for all schools.",
    name: "Mr. Anil Verma",
    role: "Administrator, St. Xavier's High School",
    avatar: "AV"
  }
];

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for small schools getting started",
    features: ["Up to 100 students", "1 Academic session", "Basic reports", "Email support"],
    cta: "Start Free",
    featured: false
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For growing schools with more needs",
    features: ["Up to 1,000 students", "Unlimited sessions", "Advanced analytics", "Priority support", "API access"],
    cta: "Start Pro Trial",
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large institutions and districts",
    features: ["Unlimited students", "Multi-school management", "Custom integrations", "Dedicated support", "SLA guarantee"],
    cta: "Contact Sales",
    featured: false
  }
];

// --- Main Component ---

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">AttendEase</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/register">Register School</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-0 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                Trusted by 500+ Schools Nationwide
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
                Smart Attendance for{" "}
                <span className="text-primary">Modern Schools</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Streamline attendance tracking, manage multiple classes, and generate insightful reports — all in one powerful platform designed specifically for schools.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Button size="lg" asChild className="px-8 h-14 text-md shadow-lg">
                  <Link href="/register">
                    Register Your School
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="h-14 px-8 group">
                  <Link href="/login" className="flex items-center gap-2">
                    <Play className="w-4 h-4 group-hover:text-primary transition-colors" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                {["Free to Start", "No Credit Card Required", "Setup in 5 Minutes"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] w-full">
                <Image 
                  src={heroSchool}
                  alt="Modern school building" 
                  fill 
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              
              {/* Floating Accuracy Card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-card p-4 rounded-2xl shadow-xl border border-border hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">98.5% Accuracy</p>
                    <p className="text-xs text-muted-foreground">Real-time tracking</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Institutions */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground text-xs font-bold mb-8 uppercase tracking-widest">Trusted By Leading Educational Institutions</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {["Delhi Public School", "Ryan International", "St. Xavier's", "Kendriya Vidyalaya", "DAV Public School"].map((school) => (
              <div key={school} className="flex items-center gap-2">
                <School className="w-5 h-5 text-primary" />
                <span className="font-semibold">{school}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 inline-block">
              Powerful Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Manage Attendance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Powerful tools designed specifically for schools to track, analyze, and improve student attendance.
            </p>
          </div>
          
          {/* Detailed Image Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image src={teacherAttendance} alt="Teacher using Attendance System" fill className="object-cover" />
              <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2">
                <Clock className="w-5 h-5" /> Takes only 30 seconds
              </div>
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Quick & Easy Attendance</h3>
              <p className="text-muted-foreground mb-6 text-lg">Mark attendance for your entire class in seconds. Our intuitive interface makes daily attendance a breeze for teachers.</p>
              <ul className="space-y-4">
                {["One-tap attendance marking", "Works on any device", "Offline support", "Automatic sync"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Image Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">Powerful Admin Dashboard</h3>
              <p className="text-muted-foreground mb-6 text-lg">Get complete visibility into your school's attendance patterns with real-time analytics and comprehensive reports.</p>
              <ul className="space-y-4">
                {["Real-time attendance stats", "Trend analysis & insights", "Export to PDF/Excel", "Custom report generation"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2 aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image src={principalDashboard} alt="Admin Dashboard Analytics" fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2">
                <BarChart3 className="w-5 h-5" /> Live Analytics
              </div>
            </motion.div>
          </div>

          {/* Icon Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-card rounded-3xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parents & Students Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <GraduationCap className="w-4 h-4" /> For Students & Parents
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep Parents Informed, Students Accountable</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our parent portal ensures families stay connected with their child's attendance record. Get instant notifications and track progress over time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                  <FileText className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">Monthly Reports</h4>
                  <p className="text-sm text-muted-foreground">Detailed summaries sent automatically.</p>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                  <Bell className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">Instant Alerts</h4>
                  <p className="text-sm text-muted-foreground">Real-time absence notifications.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={studentsClassroom} alt="Students in Classroom" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Get Started in Minutes</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold relative">
                  <item.icon className="w-10 h-10" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary text-primary rounded-full text-sm flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground px-4">{item.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[70%] w-[60%] h-[2px] bg-muted" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Start free and upgrade as your school grows. No hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.name}
                className={`p-10 rounded-3xl border flex flex-col ${plan.featured ? "border-primary bg-primary text-primary-foreground shadow-2xl scale-105" : "border-border bg-card"}`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="opacity-70 text-sm ml-1">{plan.period}</span>
                </div>
                <p className="text-sm mb-8 opacity-80">{plan.description}</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 opacity-70" /> {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.featured ? "secondary" : "outline"} size="lg" className="w-full rounded-xl" asChild>
                  <Link href="/register">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your School?</h2>
              <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed">Join hundreds of schools already using AttendEase to streamline their attendance management.</p>
              <Button size="lg" variant="secondary" className="h-16 px-10 text-lg rounded-2xl shadow-xl" asChild>
                <Link href="/register">Get Started for Free <ChevronRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-foreground mb-6 font-bold text-2xl">
            <GraduationCap className="w-8 h-8 text-primary" /> AttendEase
          </div>
          <p className="text-muted-foreground mb-8">Smart attendance management system designed for modern schools.</p>
          <div className="flex justify-center gap-8 text-sm font-medium text-muted-foreground mb-12">
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <div className="text-xs text-muted-foreground border-t border-border pt-8">
            © 2025 AttendEase. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}