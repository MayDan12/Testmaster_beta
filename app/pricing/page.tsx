"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    description: "Basic features with limited question creation",
    features: [
      "5 questions per test",
      "Limited templates",
      "Basic analytics",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Basic",
    price: { monthly: 10, annual: 100 },
    description: "Unlimited questions with standard features",
    features: [
      "Unlimited question creation",
      "Standard templates",
      "Timed tests",
      "Basic analytics",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    price: { monthly: 25, annual: 240 },
    description: "Advanced features for power users",
    features: [
      "All Basic Plan features",
      "Custom branding",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Premium",
    price: { monthly: 50, annual: 480 },
    description: "Enterprise-grade features for institutions",
    features: [
      "All Pro Plan features",
      "Collaboration tools",
      "LMS integration",
      "Offline test creation",
    ],
    cta: "Contact Sales",
  },
];

const addOns = [
  { name: "Extra storage", price: 5 },
  { name: "Custom integrations", price: 15 },
  { name: "Additional user accounts", price: 5 },
];

const faqs = [
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes basic features with limited question creation (5 questions per test), access to limited templates, and basic analytics.",
  },
  {
    question: "Can I switch between monthly and annual billing?",
    answer:
      "Yes, you can switch between monthly and annual billing at any time. If you switch to annual billing, you'll save up to 20% compared to monthly billing.",
  },
  {
    question: "Is there a discount for educational institutions?",
    answer:
      "Yes, we offer bulk pricing discounts for educational institutions. For example, if you purchase 10 or more licenses, you'll receive a 15% discount.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. If you cancel, you'll have access to your plan until the end of your current billing period.",
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly"
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600">
          Choose the plan that&apos;s right for you
        </p>
      </motion.div>

      <Tabs defaultValue="monthly" className="mb-12">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger
            value="monthly"
            onClick={() => setBillingPeriod("monthly")}
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value="annual"
            onClick={() => setBillingPeriod("annual")}
          >
            Annual
            <Badge variant="secondary" className="ml-2">
              Save up to 20%
            </Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className={plan.popular ? "border-[#3a0096] border-2" : ""}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  $
                  {billingPeriod === "monthly"
                    ? plan.price.monthly
                    : plan.price.annual}
                  <span className="text-lg font-normal text-gray-600">
                    /{billingPeriod === "monthly" ? "month" : "year"}
                  </span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#3a0096] hover:bg-[#260063]">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Add-On Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {addOns.map((addon) => (
            <Card key={addon.name}>
              <CardHeader>
                <CardTitle>{addon.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  ${addon.price}
                  <span className="text-lg font-normal text-gray-600">
                    /month
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-gray-600 mb-4">
          Contact our sales team for custom pricing and features tailored to
          your institution&apos;s needs.
        </p>
        <Button size="lg" className="bg-[#3a0096] hover:bg-[#260063]">
          Contact Sales
        </Button>
      </motion.div>
    </div>
  );
}
