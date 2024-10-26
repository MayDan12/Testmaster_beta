"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Clock, BarChart, Users, Zap, Globe, Laptop } from "lucide-react";

const features = [
  {
    title: " CBT (Computer-Based Testing) Experience",
    description:
      "Designed to mimic the standardized computer-based test environment, preparing students for future online assessments.",
    icon: Laptop,
    color: "text-blue-500",
  },
  {
    title: "Easy Test Creation",
    description: "Create custom tests with multiple question types in minutes.",
    icon: Edit,
    color: "text-blue-500",
  },
  {
    title: "Timed Tests",
    description: "Set time limits for tests to simulate real exam conditions.",
    icon: Clock,
    color: "text-green-500",
  },
  {
    title: "Instant Feedback",
    description:
      "Provide immediate results and performance insights to students.",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    title: "Detailed Analytics",
    description:
      "Track student progress with comprehensive performance reports.",
    icon: BarChart,
    color: "text-purple-500",
  },
  {
    title: "Collaboration Tools",
    description:
      "Work together with other educators to create and manage tests.",
    icon: Users,
    color: "text-pink-500",
  },
  {
    title: "Accessible Anywhere",
    description:
      "Access TestMaster from any device with an internet connection.",
    icon: Globe,
    color: "text-indigo-500",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "High School Teacher",
    content:
      "TestMaster has revolutionized the way I assess my students. It's so easy to create and grade tests now!",
  },
  {
    name: "Dr. Michael Lee",
    role: "University Professor",
    content:
      "The analytics provided by TestMaster have given me valuable insights into my students' performance. Highly recommended!",
  },
  {
    name: "Emily Chen",
    role: "Online Tutor",
    content:
      "As an online tutor, TestMaster's accessibility features have been a game-changer for me and my students.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Powerful Features for Effortless Assessment
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how TestMaster simplifies the testing process, saves time,
          and provides valuable insights for educators and students alike.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          How TestMaster Works
        </h2>
        <Tabs defaultValue="create" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="create">Create Tests</TabsTrigger>
            <TabsTrigger value="administer">Administer Tests</TabsTrigger>
            <TabsTrigger value="analyze">Analyze Results</TabsTrigger>
          </TabsList>
          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>Create Engaging Tests</CardTitle>
                <CardDescription>
                  Design tests that challenge and assess your students
                  effectively.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Choose from multiple question types, including
                    multiple-choice, short answer, and essay
                  </li>
                  <li>Set time limits and customize test settings</li>
                  <li>
                    Import questions from your existing question bank or create
                    new ones
                  </li>
                  <li>
                    Add images, videos, and other multimedia elements to enhance
                    questions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="administer">
            <Card>
              <CardHeader>
                <CardTitle>Administer Tests with Ease</CardTitle>
                <CardDescription>
                  Deliver tests securely and efficiently to your students.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Schedule tests for specific dates and times</li>
                  <li>Send automated reminders to students</li>
                  <li>Monitor test progress in real-time</li>
                  <li>
                    Implement anti-cheating measures, such as randomized
                    question order
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analyze">
            <Card>
              <CardHeader>
                <CardTitle>Gain Valuable Insights</CardTitle>
                <CardDescription>
                  Analyze test results to improve teaching and learning
                  outcomes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>View individual and class performance reports</li>
                  <li>
                    Identify areas where students excel or need improvement
                  </li>
                  <li>Track progress over time with historical data</li>
                  <li>Export results for further analysis or record-keeping</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="italic">&ldquo;{testimonial.content}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Assessment Process?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of educators who trust TestMaster for their testing
          needs.
        </p>
        <Button size="lg" className="bg-[#3a0096] hover:bg-[#260063]">
          Get Started for Free
        </Button>
      </motion.div>
    </div>
  );
}
