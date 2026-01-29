"use client"

import { Check, Star, ArrowRight, Globe, Zap, ShieldCheck } from "lucide-react"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import Image from "next/image"
import { Icons } from "@/components/icons"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DemoDashboard } from "@/components/landing/demo-dashboard"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const LandingPage = () => {
    return (
      <>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 bg-brand-25 dark:bg-dark-background overflow-hidden">
          <MaxWidthWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="flex flex-col gap-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
                  variants={itemVariants}
                >
                  Effortless website{" "}
                  <AnimatedText 
                    words={["performance", "uptime", "analytics", "real-time"]} 
                    className="text-brand-600"
                  />{" "}
                  tracking
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-600 dark:text-gray-400"
                  variants={itemVariants}
                >
                  Quick setup. Real-time data. Monitor your site's health in seconds.
                </motion.p>
  
                <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
                  <div className="px-4 py-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-sm text-sm font-medium text-gray-600 dark:text-gray-300">
                    Track performance every 30 seconds.
                  </div>
                  <div className="px-4 py-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-sm text-sm font-medium text-gray-600 dark:text-gray-300">
                    Global availability checks.
                  </div>
                  <div className="px-4 py-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-sm text-sm font-medium text-gray-600 dark:text-gray-300">
                    Instant notifications.
                  </div>
                </motion.div>
  
                <motion.div className="mt-8 flex gap-4" variants={itemVariants}>
                    <Link href="/sign-up">
                        <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                            Get Started
                            <ArrowRight className="ml-2 size-4" />
                        </Button>
                    </Link>
                </motion.div>
              </motion.div>
  
              <motion.div 
                className="relative flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative w-full rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 perspective-1000">
                    <div className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10 overflow-hidden">
                      <DemoDashboard />
                    </div>
                </div>
                <p className="mt-8 text-center text-sm font-medium text-gray-500 italic max-w-lg">
                  Keep a close watch on uptime, speed, and critical transactions for a seamless user journey.
                </p>
              </motion.div>
            </div>
          </MaxWidthWrapper>
        </section>
  
        {/* Testimonials Section */}
        <section className="bg-white dark:bg-dark-background py-24">
          <MaxWidthWrapper>
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="bg-brand-50 dark:bg-gray-800/50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden"
            >
               
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 relative">
                <div>
                   <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
                    Customer Success Stories
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    "Since implementing PingAlert, our incident response time has dropped by 60%. The 24/7 monitoring capabilities allow our team to sleep soundly, knowing we'll be alerted the second anything goes wrong."
                  </p>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Sarah Jenkins</p>
                    <p className="text-gray-500 dark:text-gray-400">CTO, TechFlow Solutions</p>
                  </div>
                </div>
                <div className="flex justify-center select-none">
                   <Image 
                      src="/user-1.png" 
                      alt="Customer illustration" 
                      width={400} 
                      height={400}
                      className="grayscale opacity-80 mix-blend-multiply dark:mix-blend-normal dark:opacity-60"
                   />
                </div>
              </div>
            </motion.div>
          </MaxWidthWrapper>
        </section>
  
        {/* Feature 1: Uptime Monitoring */}
        <section className="py-24 bg-white dark:bg-dark-background">
          <MaxWidthWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 border border-gray-100 dark:border-gray-800"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                 {/* Mock Global Locations */}
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      "Amsterdam - NL", "London - UK", "Seattle - US", "Singapore - SG",
                      "Tokyo - JP", "Sydney - AU", "Mumbai - IN", "Frankfurt - DE"
                    ].map((loc, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                        {loc}
                      </div>
                    ))}
                 </div>
                 <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>System Status</span>
                      <span className="text-green-600 font-bold">Operational</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <motion.div 
                        className="bg-green-600 h-2.5 rounded-full" 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "99.8%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      ></motion.div>
                    </div>
                 </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                  Reliable uptime monitoring for superior user experience
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  Unexpected downtime translates directly to lost revenue and damaged trust. We help you stay online and available.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="size-6 text-green-500 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">Multi-region checks from 130+ nodes worldwide</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <Check className="size-6 text-green-500 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">Instant alerts via preferred channels (Email, SMS, Discord)</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </MaxWidthWrapper>
        </section>
  
        {/* Feature 2: Speed Analysis */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
          <MaxWidthWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                  Deep-dive speed analysis for optimization
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  Page load speed is a critical factor for SEO and user retention. Identify bottlenecks before they impact your visitors.
                </p>
                <div className="flex flex-col gap-6">
                   <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-100 dark:bg-brand-900 rounded-lg text-brand-600">
                         <Zap className="size-6" />
                      </div>
                      <div>
                         <h4 className="font-semibold text-gray-900 dark:text-white">Latency Detection</h4>
                         <p className="text-sm text-gray-600 dark:text-gray-400">Pinpoint exactly which assets or scripts are slowing you down.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-100 dark:bg-brand-900 rounded-lg text-brand-600">
                         <Globe className="size-6" />
                      </div>
                      <div>
                         <h4 className="font-semibold text-gray-900 dark:text-white">Regional Performance</h4>
                         <p className="text-sm text-gray-600 dark:text-gray-400">Compare load times across different continents and networks.</p>
                      </div>
                   </div>
                </div>
              </motion.div>
  
              <motion.div 
                className="order-1 lg:order-2 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 flex justify-between items-end">
                   <div>
                      <div className="text-sm text-gray-500">Avg. Response Time</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">142 ms</div>
                   </div>
                   <div className="text-right">
                      <div className="text-xs text-brand-600 bg-brand-50 px-2 py-1 rounded">Past 24 Hours</div>
                   </div>
                </div>
                
                {/* Fake Chart */}
                <div className="h-64 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200 dark:border-gray-700">
                   {[40, 65, 45, 80, 55, 70, 45, 60, 35, 90, 50, 65].map((h, i) => (
                      <motion.div 
                        key={i} 
                        className="w-full bg-brand-500 opacity-80 hover:opacity-100 transition-opacity rounded-t-sm" 
                        initial={{ height: "0%" }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        viewport={{ once: true }}
                      />
                   ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                   <span>00:00</span>
                   <span>06:00</span>
                   <span>12:00</span>
                   <span>18:00</span>
                </div>
              </motion.div>
            </div>
          </MaxWidthWrapper>
        </section>
  
        {/* Feature 3: Transaction Monitoring */}
        <section className="py-24 bg-white dark:bg-dark-background">
          <MaxWidthWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <motion.div 
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
               >
                 <div className="space-y-4">
                    {[
                      { step: "1. Land on Homepage", time: "0.4s", status: "success" },
                      { step: "2. Perform Search", time: "0.2s", status: "success" },
                      { step: "3. View Item Details", time: "0.8s", status: "success" },
                      { step: "4. Add Item to Cart", time: "0.5s", status: "success" },
                      { step: "5. Initiate Checkout", time: "1.2s", status: "warning" },
                      { step: "6. Confirm Purchase", time: "0.3s", status: "success" },
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                         <span className="font-medium text-sm dark:text-gray-300">{item.step}</span>
                         <div className="flex items-center gap-3">
                            <span className={`text-xs px-2 py-1 rounded ${item.status === 'warning' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                              {item.time}
                            </span>
                            <div className={`size-3 rounded-full ${item.status === 'warning' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </motion.div>
  
               <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
               >
                 <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                  Critical Transaction Monitoring
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  Ensure your key business flows—like signups and payments—are working perfectly. Don't let broken logic cost you customers.
                </p>
                 <ul className="space-y-6">
                  <li className="flex gap-4">
                     <div className="mt-1 bg-brand-100 dark:bg-brand-900 p-2 rounded-full text-brand-600">
                       <ShieldCheck className="size-5" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900 dark:text-white">Proactive Issue Detection</h4>
                       <p className="text-sm text-gray-600 dark:text-gray-400">Discover functional errors before your users report them.</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="mt-1 bg-brand-100 dark:bg-brand-900 p-2 rounded-full text-brand-600">
                       <Globe className="size-5" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900 dark:text-white">Cross-Device Validation</h4>
                       <p className="text-sm text-gray-600 dark:text-gray-400">Simulate transactions on various device types to ensure compatibility.</p>
                     </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </MaxWidthWrapper>
        </section>
  
        {/* Pricing CTA */}
        <section className="py-24 bg-brand-25 dark:bg-gray-800/20">
          <MaxWidthWrapper>
            <motion.div 
                className="text-center max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
               <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                  Start monitoring with the best tools today!
               </h2>
            </motion.div>
            
            <motion.div 
                className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
               <div className="p-12 md:w-1/2 flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-800/50 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 text-center">
                  <Globe className="size-32 text-brand-500 mb-6 opacity-80" strokeWidth={0.5} />
                  <p className="text-gray-600 dark:text-gray-400">Complete infrastructure visibility in one dashboard.</p>
               </div>
               
               <div className="p-12 md:w-1/2">
                  <div className="flex justify-between items-center mb-2">
                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pro Plan</h3>
                     <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">POPULAR</span>
                  </div>
                  <div className="flex items-baseline mb-6">
                     <span className="text-4xl font-bold text-gray-900 dark:text-white">$49</span>
                     <span className="text-gray-600 dark:text-gray-400 ml-1">/month</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    Maximize your site's availability and performance with professional tools.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                     {[
                       "Monitor up to 25 websites",
                       "Check intervals: 1 minute",
                       "30+ global monitoring nodes",
                       "Instant alerts (Discord/Slack/Email)"
                     ].map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                           <ArrowRight className="size-4 text-brand-500" />
                           {feat}
                        </li>
                     ))}
                  </ul>
                  
                  <Link href="/sign-up">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Sign Up Now</Button>
                  </Link>
               </div>
            </motion.div>
          </MaxWidthWrapper>
        </section>
  
        <Footer />
      </>
    )
}
