'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particle background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
            background: 'linear-gradient(to right, rgba(91, 33, 182, 1), rgba(49, 30, 146, 0.7))',
        }}
      >
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 8 + 'px',
              height: Math.random() * 8 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-white">About Our Mission</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            We're dedicated to connecting families of children with special health care needs to vital resources and support.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Who We Are</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800">
                  We are a dedicated team of professionals, caregivers, and advocates who understand the unique challenges faced by families of children with special health care needs. Our diverse backgrounds and personal experiences drive our passion to make a difference in the lives of these families.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Our Approach</h2>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Comprehensive Resources", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
              { title: "Community Building", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
              { title: "Advocacy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
            ].map((item, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Join Our Community</h2>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Whether you're a family in need of support, a professional looking to contribute your expertise, or someone passionate about making a difference, there's a place for you in our community.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">Get Involved</Button>
        </motion.section>

        <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "George Verdelis", role: "Website Creator" },
            { name: "John Doe", role: "Family Partner" },
            { name: "Jane Doe", role: "Site Advisor" }
          ].map((member, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 rounded-full bg-blue-300 mx-auto mb-4" />
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      
      </div>
    </div>
  )
}