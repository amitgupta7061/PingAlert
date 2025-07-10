"use client"
import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { MaxWidthWrapper } from '@/components/max-width-wrapper';

const productLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
]

const legalLinks = [
  { name: 'Privacy', href: '/' },
  { name: 'Terms', href: '/' },
  // { name: 'Cookie Policy', href: '/' },
]

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/AmitGup43573754' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/amit-kumar-gupta-96649729a/' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/amitgupta7061' },
]

const scrollToSection = (e: any, sectionId: any) => {
  e.preventDefault();
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Footer() {
  return (
    <footer className="bg-brand-25 border-t border-gray-200 dark:bg-dark-background dark:border-gray-700">
      <MaxWidthWrapper className="py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="lg:w-1/3">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-brand-600">PingAlert</span>  
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-zinc-400">
              Real-Time SaaS Insights, Delivered to Your Discord
            </p>
          </div>

          <div className="flex flex-wrap gap-8 lg:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-zinc-300">Product</h3>
              <ul className="mt-4 space-y-2">
                {productLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="text-sm text-gray-600 hover:text-brand-600 cursor-pointer dark:text-zinc-400 dark:hover:text-brand-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-zinc-300">Legal</h3>
              <ul className="mt-4 space-y-2">
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-600 hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-gray-600 dark:text-zinc-300">
              &copy; {new Date().getFullYear()} PingAlert. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 hover:text-brand-600">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer >
  );
}