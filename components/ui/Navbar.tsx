"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Freemium Model",
    href: "/pricing",
    description: " New users or teachers who want to try out the platform.",
  },
  {
    title: " One-Time Purchase Option",
    href: "/pricing",
    description:
      "Full access to all features with no recurring fees, ideal for schools or institutions.",
  },
  {
    title: "Free Trials",
    href: "/pricing",
    description:
      "Offer a 14-day free trial for the Pro and Premium plans to encourage users to explore premium features.",
  },
  {
    title: "Basic Plan: $10/month",
    href: "/pricing",
    description:
      "Unlimited question creation, Basic analytics (scores and performance). ",
  },
  {
    title: "Pro Plan: $25/month",
    href: "/pricing",
    description:
      "All Basic Plan features with addtional features like (custom branding e.t.c).",
  },
  {
    title: "Premium Plan: $50/month",
    href: "/pricing",
    description: "All Pro Plan features with addition features.",
  },
];

export function Navbar() {
  return (
    <NavigationMenu className="hidden md:block ">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-transparent`}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-transparent`}
            >
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/features"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      CBT (Computer-Based Testing) Experience
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Designed to mimic the standardized computer-based test
                      environment, preparing students for future online
                      assessments.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/features" title="Easy Test Creation">
                Teachers can quickly input questions, provide correct answers,
                and set up multiple-choice options.
              </ListItem>
              <ListItem href="/features" title="Timed Tests">
                Each test is timed, keeping students on track and simulating
                real exam conditions.
              </ListItem>
              <ListItem href="/features" title="Instant Feedback">
                Once the test is complete, students receive their scores and
                percentage based on the answers provided.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Pricing
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-transparent`}
            >
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
