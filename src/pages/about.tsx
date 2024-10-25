'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">About Our Mission</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We're dedicated to connecting families of children with special health care needs to vital resources and support.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Who are we?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>What's our goal?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
              Habitant per nunc quis nibh ullamcorper aliquet mattis ex potenti. Eleifend integer condimentum aptent ligula laoreet libero per. Velit dignissim aptent tortor proin sapien fermentum in ultricies. Cras ultrices eget suspendisse cras; elit magna. Lobortis auctor consequat lobortis etiam pellentesque facilisis nisl platea in. Malesuada consequat magnis at etiam porttitor porttitor fermentum gravida. Vitae vestibulum convallis arcu velit tellus commodo feugiat vivamus.
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
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Together, we can create a supportive network for families and improve access to vital resources.
        </p>
        <Button size="lg">Get Involved</Button>
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
  )
}