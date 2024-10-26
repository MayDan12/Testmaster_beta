"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Edit, Laptop, Smartphone, Tablet, Zap } from "lucide-react";

const features = [
  {
    title: "Effortless Test Creation",
    description: "Build customizable, timed tests with an intuitive interface.",
    icon: Edit,
  },
  {
    title: "Instant Feedback",
    description:
      "Provide real-time scoring and insights to students upon completion.",
    icon: Zap,
  },
  {
    title: "CBT Simulation",
    description:
      "Prepare students for standardized tests with a realistic exam environment.",
    icon: Laptop,
  },
  {
    title: "Flexible Timing",
    description: "Set adjustable time limits for each test to suit your needs.",
    icon: Clock,
  },
  {
    title: "Multi-Device Access",
    description: "Access TestMaster from desktops, laptops, or mobile devices.",
    icon: Smartphone,
  },
];

export default function FeaturesOverview() {
  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Revolutionize Your Testing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TestMaster streamlines test creation and administration, offering a
            powerful web app designed for today&apos;s fast-paced educational
            landscape.
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <feature.icon className="w-6 h-6 mr-2 text-[#3a0096]" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Empowering Educators and Students
          </h3>
          <p className="text-gray-600 mb-6">
            TestMaster transforms the traditional testing process into a more
            interactive and insightful experience. From timed tests to real-time
            feedback, our platform empowers educators to conduct efficient,
            organized, and effective assessments.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-[#3a0096] hover:bg-[#260063]">
                Start Free Trial
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Access Anywhere, Anytime
          </h3>
          <p className="text-gray-600 mb-8">
            TestMaster is fully accessible on multiple devices, enabling
            seamless learning and assessment regardless of location.
          </p>
          <div className="flex justify-center items-center gap-8">
            <Laptop className="w-16 h-16 text-[#3a0096]" />
            <Tablet className="w-12 h-12 text-[#3a0096]" />
            <Smartphone className="w-8 h-8 text-[#3a0096]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
