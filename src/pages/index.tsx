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
    name: "Family Voices",
    description: "A national organization that advocates for family-centered care and services for children with special healthcare needs. They offer support, resources, and education to empower families.",
    locations: ["National"],
    assistanceTypes: ["Advocacy", "Education"],
    conditions: ["All Conditions"],
    contact: "info@familyvoices.org"
  },
  {
    id: 2,
    name: "United Cerebral Palsy",
    description: "United Cerebral Palsy (UCP) provides resources, support, and advocacy for individuals with cerebral palsy and other disabilities. Their services include assistive technology, healthcare resources, and advocacy programs.",
    locations: ["National"],
    assistanceTypes: ["Advocacy", "Assistive Technology", "Medical"],
    conditions: ["Cerebral Palsy"],
    contact: "info@ucp.org"
  },
  {
    id: 3,
    name: "Autism Society",
    description: "A national organization that supports individuals with autism and their families through education, advocacy, and community services. Their mission is to promote lifelong access and opportunities for those on the autism spectrum.",
    locations: ["National"],
    assistanceTypes: ["Advocacy", "Education", "Support Group"],
    conditions: ["Autism"],
    contact: "info@autismsociety.org"
  },
  {
    id: 4,
    name: "Medical Homes Fact Sheet",
    description: "A comprehensive resource outlining the concept of medical homes, which provide coordinated healthcare for children with special healthcare needs. It helps families understand how to create and utilize a medical home model.",
    locations: ["National"],
    assistanceTypes: ["Education", "Care Coordination"],
    conditions: ["All Conditions"],
    contact: "info@medicalhomes.org"
  },
  {
    id: 5,
    name: "Parent Center Hub",
    description: "A national network of parent training and information centers providing assistance to families of children with disabilities. They offer resources on education, advocacy, and healthcare navigation.",
    locations: ["National"],
    assistanceTypes: ["Education", "Advocacy"],
    conditions: ["All Conditions"],
    contact: "info@parentcenterhub.org"
  },
  {
    id: 6,
    name: "Parent to Parent",
    description: "A support network for parents of children with special healthcare needs, offering peer-to-peer support and information to help navigate challenges related to their children's care.",
    locations: ["National"],
    assistanceTypes: ["Support Group", "Advocacy"],
    conditions: ["All Conditions"],
    contact: "info@parenttoparent.org"
  },
  {
    id: 7,
    name: "Family Connections with Pediatrics",
    description: "An organization providing support and information for families navigating pediatric care, particularly for children with complex healthcare needs. They connect families to resources and medical professionals.",
    locations: ["National"],
    assistanceTypes: ["Care Coordination", "Education"],
    conditions: ["All Conditions"],
    contact: "info@familyconnections.org"
  },
  {
    id: 8,
    name: "Autism Resource Directory",
    description: "A regional resource for families in Illinois, providing a directory of services, support groups, and educational programs for those affected by autism.",
    locations: ["Illinois"],
    assistanceTypes: ["Directory", "Education", "Support Group"],
    conditions: ["Autism"],
    contact: "info@autismdirectoryil.org"
  },
  {
    id: 9,
    name: "The Answer Inc.",
    description: "A community-based organization in Illinois offering advocacy, support, and resources to families affected by autism and other developmental disabilities. They provide workshops, support groups, and recreational programs.",
    locations: ["Illinois"],
    assistanceTypes: ["Advocacy", "Support Group", "Education"],
    conditions: ["Autism", "Developmental Disabilities"],
    contact: "info@theanswerinc.org"
  },
  {
    id: 10,
    name: "Chicago Parent Program",
    description: "An evidence-based parent training program designed to strengthen parenting skills and promote positive behavior in children. Their services include workshops and personalized support for parents.",
    locations: ["Illinois"],
    assistanceTypes: ["Education", "Support Group"],
    conditions: ["Behavioral Issues", "Developmental Disabilities"],
    contact: "info@chicagoparentprogram.org"
  },
  {
    id: 11,
    name: "Division of Specialized Care for Children (DSCC)",
    description: "An Illinois-based program offering care coordination and services for children with chronic health conditions. DSCC helps families navigate healthcare systems and access necessary services.",
    locations: ["Illinois"],
    assistanceTypes: ["Care Coordination", "Medical"],
    conditions: ["Chronic Health Conditions"],
    contact: "info@dscc.uic.edu"
  },
  {
    id: 12,
    name: "The Arc of Illinois",
    description: "A state chapter of The Arc, providing advocacy, resources, and support for individuals with intellectual and developmental disabilities and their families. Their services range from legal advocacy to family support programs.",
    locations: ["Illinois"],
    assistanceTypes: ["Advocacy", "Education", "Support Group"],
    conditions: ["Intellectual Disabilities", "Developmental Disabilities"],
    contact: "info@thearcofil.org"
  },
  {
    id: 13,
    name: "Illinois Cares for Kids",
    description: "A statewide initiative offering resources for parents, caregivers, and educators to support children's growth and development. They provide educational tools, access to child care resources, and support programs.",
    locations: ["Illinois"],
    assistanceTypes: ["Education", "Childcare Support"],
    conditions: ["All Conditions"],
    contact: "info@illinoiscaresforkids.org"
  },
  {
    id: 14,
    name: "Special Fathers Network",
    description: "A peer-to-peer mentoring program designed for fathers raising children with special needs. The network connects dads across Illinois for support, shared experiences, and resources.",
    locations: ["Illinois"],
    assistanceTypes: ["Support Group", "Peer Support"],
    conditions: ["All Conditions"],
    contact: "info@specialfathersnetwork.org"
  },
  {
    id: 15,
    name: "Wisconsin Wayfinder",
    description: "A Wisconsin resource hub for families and caregivers of children with special healthcare needs. They offer information on healthcare services, support groups, and assistance programs.",
    locations: ["Wisconsin"],
    assistanceTypes: ["Education", "Care Coordination", "Support Group"],
    conditions: ["All Conditions"],
    contact: "info@wisconsinwayfinder.org"
  },
  {
    id: 16,
    name: "Children’s Resource Centers",
    description: "Providing resources and support for families of children with disabilities in Wisconsin. Their services include care coordination, educational resources, and family support programs.",
    locations: ["Wisconsin"],
    assistanceTypes: ["Care Coordination", "Education"],
    conditions: ["All Conditions"],
    contact: "info@childrenresourcecenters.org"
  },
  {
    id: 17,
    name: "Family Voices of Wisconsin",
    description: "A state branch of Family Voices, advocating for family-centered healthcare and services for children with special healthcare needs. They provide education, peer support, and resources to families across Wisconsin.",
    locations: ["Wisconsin"],
    assistanceTypes: ["Advocacy", "Education", "Support Group"],
    conditions: ["All Conditions"],
    contact: "info@familyvoiceswi.org"
  },
  {
    id: 18,
    name: "The Arc Wisconsin",
    description: "The Arc Wisconsin provides advocacy, support, and services for individuals with intellectual and developmental disabilities. They offer educational resources, support groups, and legal advocacy for families.",
    locations: ["Wisconsin"],
    assistanceTypes: ["Advocacy", "Education", "Support Group"],
    conditions: ["Intellectual Disabilities", "Developmental Disabilities"],
    contact: "info@arcwisconsin.org"
  },
  {
    id: 19,
    name: "Wisconsin Department of Health - CYSHCN",
    description: "A state program offering services for children and youth with special healthcare needs. The program provides care coordination, information, and referral services for families navigating healthcare systems.",
    locations: ["Wisconsin"],
    assistanceTypes: ["Care Coordination", "Medical", "Referral Services"],
    conditions: ["Chronic Health Conditions", "Developmental Disabilities"],
    contact: "info@dhs.wisconsin.gov"
  },
  {
    id: 20,
    name: "Waisman Center - Resources for Families",
    description: "A research and service center located in Wisconsin, the Waisman Center provides resources for families of children with developmental disabilities and neurodegenerative conditions. Their services include therapy, support groups, and research participation opportunities.",
    locations: ["Wisconsin"],
    assistanceTypes: ["Therapy", "Education", "Research"],
    conditions: ["Developmental Disabilities", "Neurodegenerative Conditions"],
    contact: "info@waisman.wisc.edu"
  },
  {
    id: 21,
    name: "United Cerebral Palsy Dane County",
    description: "Providing resources, advocacy, and support to individuals with cerebral palsy and other disabilities in the Dane County region of Wisconsin. They offer assistive technology, peer support, and therapeutic services.",
    locations: ["Wisconsin"],
    assistanceTypes: ["Advocacy", "Assistive Technology", "Therapy"],
    conditions: ["Cerebral Palsy"],
    contact: "info@ucpdane.org"
  },
  {
    id: 22,
    name: "Autism Society of Greater Wisconsin",
    description: "A regional chapter of the Autism Society, this organization provides resources, advocacy, and support for individuals and families affected by autism. They offer education programs, social groups, and community support.",
    locations: ["Wisconsin"],
    assistanceTypes: ["Advocacy", "Education", "Support Group"],
    conditions: ["Autism"],
    contact: "info@autismgreaterwi.org"
  },
  {
    id: 23,
    name: "Well Badger",
    description: "A resource and referral hotline for Wisconsin families, Well Badger connects individuals with services related to healthcare, childcare, and other family support needs. They offer information on a range of topics, including special healthcare needs.",
    locations: ["Wisconsin"],
    assistanceTypes: ["Referral Services", "Education"],
    conditions: ["All Conditions"],
    contact: "info@wellbadger.org"
  },
  {
    id: 24,
    name: "Children with Special Healthcare Needs Program",
    description: "A Missouri-based program offering support services, care coordination, and resources for families of children with special healthcare needs. They connect families with healthcare providers and advocacy organizations.",
    locations: ["Missouri"],
    assistanceTypes: ["Care Coordination", "Advocacy", "Medical"],
    conditions: ["All Conditions"],
    contact: "info@cschn.mo.gov"
  },
  {
    id: 25,
    name: "Missouri Department of Health and Senior Services (CYSHCN)",
    description: "This state program supports families of children and youth with special healthcare needs in Missouri. They offer care coordination, medical referrals, and educational resources.",
    locations: ["Missouri"],
    assistanceTypes: ["Care Coordination", "Medical", "Education"],
    conditions: ["All Conditions"],
    contact: "info@health.mo.gov"
  },
  {
    id: 26,
    name: "Cerebral Palsy Family Network",
    description: "A Missouri-based organization offering resources, support, and advocacy for families affected by cerebral palsy. They provide information on therapy, assistive technology, and peer support groups.",
    locations: ["Missouri"],
    assistanceTypes: ["Advocacy", "Therapy", "Assistive Technology"],
    conditions: ["Cerebral Palsy"],
    contact: "info@cpfamilynetwork.org"
  },
  {
    id: 27,
    name: "Oracle Health Foundation",
    description: "A foundation supporting healthcare services and programs for children with special healthcare needs in Missouri. They provide funding for medical services, therapy, and assistive devices.",
    locations: ["Missouri"],
    assistanceTypes: ["Medical", "Therapy", "Assistive Technology"],
    conditions: ["All Conditions"],
    contact: "info@oraclehealth.org"
  },
  {
    id: 28,
    name: "Missouri Developmental Disabilities Council",
    description: "A Missouri-based organization advocating for individuals with developmental disabilities and their families. They offer resources, support services, and legal advocacy to improve quality of life.",
    locations: ["Missouri"],
    assistanceTypes: ["Advocacy", "Education", "Legal Support"],
    conditions: ["Developmental Disabilities"],
    contact: "info@mddc.org"
  },
  {
    id: 29,
    name: "First Steps Missouri",
    description: "A statewide program providing early intervention services for infants and toddlers with developmental delays or disabilities. They offer therapy, family support, and educational resources.",
    locations: ["Missouri"],
    assistanceTypes: ["Early Intervention", "Therapy", "Family Support"],
    conditions: ["Developmental Delays", "Developmental Disabilities"],
    contact: "info@firststeps.org"
  },
  {
    id: 30,
    name: "MPACT",
    description: "A Missouri Parent Training and Information Center offering resources, advocacy, and education to parents of children with disabilities. They help families navigate the special education system and provide support services.",
    locations: ["Missouri"],
    assistanceTypes: ["Education", "Advocacy", "Support Group"],
    conditions: ["All Conditions"],
    contact: "info@mpact.org"
  },
  {
    id: 31,
    name: "Missouri Department of Social Services",
    description: "Providing a range of support services for families of children with special needs, including healthcare assistance, financial support, and care coordination. The department helps families access services throughout Missouri.",
    locations: ["Missouri"],
    assistanceTypes: ["Care Coordination", "Financial Support", "Medical"],
    conditions: ["All Conditions"],
    contact: "info@dss.mo.gov"
  },
  {
    id: 32,
    name: "State of Missouri Assistive Technology Program",
    description: "A state program offering assistive technology devices and services to individuals with disabilities. They provide access to equipment, training, and technical assistance to support independence.",
    locations: ["Missouri"],
    assistanceTypes: ["Assistive Technology", "Training", "Technical Assistance"],
    conditions: ["All Conditions"],
    contact: "info@at.mo.gov"
  },
  {
    id: 33,
    name: "NeedyMeds",
    description: "A Massachusetts-based resource providing information on financial assistance for medications, medical supplies, and healthcare services. They connect families with programs that help reduce the cost of medical care.",
    locations: ["Massachusetts"],
    assistanceTypes: ["Financial Support", "Medical"],
    conditions: ["All Conditions"],
    contact: "info@needymeds.org"
  },
  {
    id: 34,
    name: "Massachusetts Developmental Disabilities Council",
    description: "An organization that advocates for individuals with developmental disabilities and their families in Massachusetts. They provide resources, support, and educational programs.",
    locations: ["Massachusetts"],
    assistanceTypes: ["Advocacy", "Education", "Support Group"],
    conditions: ["Developmental Disabilities"],
    contact: "info@maddc.org"
  },
  {
    id: 35,
    name: "Assistive Technology Center",
    description: "Located in Massachusetts, the Assistive Technology Center offers a range of services to support individuals with disabilities in accessing and utilizing assistive technology devices.",
    locations: ["Massachusetts"],
    assistanceTypes: ["Assistive Technology", "Training", "Technical Support"],
    conditions: ["All Conditions"],
    contact: "info@atcenter.org"
  },
  {
    id: 36,
    name: "Easter Seals Massachusetts",
    description: "A nonprofit organization offering a range of services, including assistive technology, therapeutic programs, and advocacy for children and adults with disabilities in Massachusetts.",
    locations: ["Massachusetts"],
    assistanceTypes: ["Assistive Technology", "Therapy", "Advocacy"],
    conditions: ["Physical Disabilities", "Developmental Disabilities"],
    contact: "info@eastersealsma.org"
  },
  {
    id: 37,
    name: "Association for Autism and Neurodivergence",
    description: "A Massachusetts-based organization providing resources, support, and advocacy for individuals on the autism spectrum. They offer educational programs, social groups, and family support services.",
    locations: ["Massachusetts"],
    assistanceTypes: ["Education", "Advocacy", "Support Group"],
    conditions: ["Autism", "Neurodivergence"],
    contact: "info@autismandneurodivergence.org"
  },
  {
    id: 38,
    name: "Federation for Children with Special Needs",
    description: "An organization in Massachusetts that provides information, support, and advocacy for families of children with special needs. They offer workshops, peer support, and educational resources.",
    locations: ["Massachusetts"],
    assistanceTypes: ["Advocacy", "Education", "Support Group"],
    conditions: ["All Conditions"],
    contact: "info@fcsn.org"
  },
  {
    id: 39,
    name: "Disabled Resources Center",
    description: "A California-based organization offering resources and support to individuals with disabilities. They focus on providing access to assistive technology, advocacy services, and independent living programs.",
    locations: ["California"],
    assistanceTypes: ["Assistive Technology", "Advocacy", "Independent Living Support"],
    conditions: ["All Conditions"],
    contact: "info@drc.org"
  },
  {
    id: 40,
    name: "Autism Care Today",
    description: "A California-based nonprofit organization providing financial assistance to families of children with autism. They offer grants for treatment, therapy, and special programs for children on the autism spectrum.",
    locations: ["California"],
    assistanceTypes: ["Financial Support", "Therapy"],
    conditions: ["Autism"],
    contact: "info@autismcaretday.org"
  },
  {
    id: 41,
    name: "Variety The Children's Charity",
    description: "A California-based organization offering resources and financial support to children with special needs. They provide funding for medical care, equipment, and therapy for children with disabilities.",
    locations: ["California"],
    assistanceTypes: ["Financial Support", "Medical", "Assistive Technology"],
    conditions: ["All Conditions"],
    contact: "info@varietyca.org"
  },
  {
    id: 42,
    name: "Lucky Fin Project",
    description: "A national nonprofit organization providing support, resources, and advocacy for individuals with limb differences. They offer community support, financial assistance, and awareness programs.",
    locations: ["National"],
    assistanceTypes: ["Advocacy", "Support Group", "Financial Support"],
    conditions: ["Limb Differences"],
    contact: "info@luckyfinproject.org"
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
      <SelectItem value="Assistive Technology">Assistive Technology</SelectItem>
      <SelectItem value="Therapy">Therapy</SelectItem>
      <SelectItem value="Financial Support">Financial Support</SelectItem>
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
      <SelectItem value="Chronic Health Conditions">Chronic Health Conditions</SelectItem>
      <SelectItem value="Neurodivergence">Neurodivergence</SelectItem>
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