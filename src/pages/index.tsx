'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"

interface Resource {
  id: number
  name: string
  description: string
  locations: string[]
  assistanceTypes: string[]
  conditions: string[]
  contact: string
}

const resources: Resource[] = [
  {
    id: 1,
    name: "Autism Support Network",
    description: "A community-driven support group for families affected by autism.",
    locations: ["Illinois", "Wisconsin"],
    assistanceTypes: ["Support Group", "Education"],
    conditions: ["Autism"],
    contact: "info@autismsupportnetwork.org"
  },
  {
    id: 2,
    name: "Cerebral Palsy Foundation",
    description: "Providing resources and support for individuals with cerebral palsy.",
    locations: ["National"],
    assistanceTypes: ["Advocacy", "Medical"],
    conditions: ["Cerebral Palsy"],
    contact: "contact@cpfoundation.org"
  },
  {
    id: 3,
    name: "Special Education Services",
    description: "Comprehensive educational support for children with various developmental disabilities.",
    locations: ["Wisconsin", "Illinois"],
    assistanceTypes: ["Education", "Care Coordination"],
    conditions: ["Developmental Disabilities", "Autism"],
    contact: "info@specialeducationservices.org"
  },
  {
    id: 4,
    name: "Limb Difference Support Group",
    description: "A supportive community for children and families dealing with limb differences.",
    locations: ["Missouri", "National"],
    assistanceTypes: ["Support Group", "Advocacy"],
    conditions: ["Limb Differences"],
    contact: "support@limbdifference.org"
  },
  {
    id: 5,
    name: "Children's Specialized Hospital",
    description: "Providing comprehensive medical care for children with special health needs.",
    locations: ["Massachusetts"],
    assistanceTypes: ["Medical", "Care Coordination"],
    conditions: ["All Conditions"],
    contact: "info@childrenspecialized.org"
  },
  {
    id: 6,
    name: "Special Needs Resource Directory",
    description: "A comprehensive directory of resources for families of children with special needs.",
    locations: ["California", "National"],
    assistanceTypes: ["Directory", "Education"],
    conditions: ["All Conditions"],
    contact: "info@specialneedsresources.org"
  }
]

export default function Home() {
  const [filteredResources, setFilteredResources] = useState(resources)
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("All Locations")
  const [assistanceTypeFilter, setAssistanceTypeFilter] = useState("All Types")
  const [conditionFilter, setConditionFilter] = useState("All Conditions")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    filterResources(term, locationFilter, assistanceTypeFilter, conditionFilter)
  }

  const filterResources = (search: string, location: string, assistanceType: string, condition: string) => {
    const filtered = resources.filter(resource =>
      resource.name.toLowerCase().includes(search) &&
      (location === "All Locations" || resource.locations.includes(location)) &&
      (assistanceType === "All Types" || resource.assistanceTypes.includes(assistanceType)) &&
      (condition === "All Conditions" || resource.conditions.includes(condition))
    )
    setFilteredResources(filtered)
  }

  const renderTags = (tags: string[], colorClass: string): JSX.Element => (
    <div className="flex flex-wrap gap-1">
      {tags.map((tag) => (
        <span key={tag} className={`${colorClass} text-xs font-medium px-2.5 py-0.5 rounded`}>
          {tag}
        </span>
      ))}
    </div>
  )

  return (
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 rounded-3xl shadow-xl text-white overflow-hidden relative"
      >
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-4">
            Resources for Children with Special Health Care Needs
          </h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Finding resources and services should be easy.<br />Let's make that happen <strong>together</strong>.
          </p>
          <Button size="lg" className="mt-8">Get Started</Button>
        </div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500 opacity-50 rounded-full"
        />
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Search and Filter Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="search">Search Resources</Label>
              <Input
                id="search"
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full mt-1"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Select 
                  value={locationFilter}
                  onValueChange={(value) => {
                    setLocationFilter(value)
                    filterResources(searchTerm, value, assistanceTypeFilter, conditionFilter)
                  }}
                >
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Locations">All Locations</SelectItem>
                    <SelectItem value="Illinois">Illinois</SelectItem>
                    <SelectItem value="Wisconsin">Wisconsin</SelectItem>
                    <SelectItem value="Missouri">Missouri</SelectItem>
                    <SelectItem value="Massachusetts">Massachusetts</SelectItem>
                    <SelectItem value="California">California</SelectItem>
                    <SelectItem value="National">National</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="assistanceType">Assistance Type</Label>
                <Select 
                  value={assistanceTypeFilter}
                  onValueChange={(value) => {
                    setAssistanceTypeFilter(value)
                    filterResources(searchTerm, locationFilter, value, conditionFilter)
                  }}
                >
                  <SelectTrigger id="assistanceType">
                    <SelectValue placeholder="Select Assistance Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Types">All Types</SelectItem>
                    <SelectItem value="Support Group">Support Group</SelectItem>
                    <SelectItem value="Advocacy">Advocacy</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Medical">Medical</SelectItem>
                    <SelectItem value="Directory">Directory</SelectItem>
                    <SelectItem value="Care Coordination">Care Coordination</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="condition">Condition</Label>
                <Select 
                  value={conditionFilter}
                  onValueChange={(value) => {
                    setConditionFilter(value)
                    filterResources(searchTerm, locationFilter, assistanceTypeFilter, value)
                  }}
                >
                  <SelectTrigger id="condition">
                    <SelectValue placeholder="Select Condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Conditions">All Conditions</SelectItem>
                    <SelectItem value="Autism">Autism</SelectItem>
                    <SelectItem value="Cerebral Palsy">Cerebral Palsy</SelectItem>
                    <SelectItem value="Developmental Disabilities">Developmental Disabilities</SelectItem>
                    <SelectItem value="Limb Differences">Limb Differences</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Tabs defaultValue="grid" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
          <TabsContent value="grid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="h-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <CardTitle>{resource.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300">{resource.description}</p>
                      <div className="space-y-2">
                        <div>
                          <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">Locations:</span>
                          {renderTags(resource.locations, "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300")}
                        </div>
                        <div>
                          <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">Types:</span>
                          {renderTags(resource.assistanceTypes, "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300")}
                        </div>
                        <div>
                          <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">Conditions:</span>
                          {renderTags(resource.conditions, "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300")}
                        </div>
                      </div>
                      <Button className="w-full">Contact: {resource.contact}</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="list">
            <div className="space-y-4 mt-6">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <CardTitle>{resource.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{resource.description}</p>
                      <div className="space-y-2">
                        <div>
                          <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">Locations:</span>
                          {renderTags(resource.locations, "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300")}
                        </div>
                        <div>
                          <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">Types:</span>
                          {renderTags(resource.assistanceTypes, "bg-green-100 text-green-800 dark:bg-green-900  dark:text-green-300")}
                        </div>
                        <div>
                          <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">Conditions:</span>
                          {renderTags(resource.conditions, "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300")}
                        </div>
                      </div>
                      <Button className="mt-4">Contact: {resource.contact}</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-gray-100 dark:bg-gray-800 py-12 rounded-lg"
      >
        <div className="container mx-auto">
          <h2  className="text-3xl font-bold text-center mb-8">What Parents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-white dark:bg-gray-700 cursor-pointer">
                  <CardContent className="pt-6">
                    <p className="italic mb-4">"This website has been a lifesaver for our family. We found resources we didn't even know existed!"</p>
                    <p className="font-semibold">- Parent {i}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-blue-600 text-white py-12 rounded-lg"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">Join our newsletter to receive the latest updates on resources and support.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="w-full sm:w-64">
              <Label htmlFor="email" className="sr-only">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="w-full bg-white text-black" />
            </div>
            <Button variant="secondary">Subscribe</Button>
          </form>
        </div>
      </motion.section>
    </div>
  )
}