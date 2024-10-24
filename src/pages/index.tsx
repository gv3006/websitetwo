import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for resources
const resources = [
  {
    id: 1,
    name: "Special Education Support",
    description: "Provides educational assistance for children with learning disabilities.",
    location: "New York",
    assistanceType: "Education",
    condition: "Learning Disability",
    contact: "contact@specialedsupport.com"
  },
  {
    id: 2,
    name: "Autism Therapy Center",
    description: "Offers therapy and support for children on the autism spectrum.",
    location: "California",
    assistanceType: "Therapy",
    condition: "Autism",
    contact: "info@autismtherapy.org"
  },
  // Add more mock resources here...
]

export default function Home() {
  const [filteredResources, setFilteredResources] = useState(resources)
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [assistanceTypeFilter, setAssistanceTypeFilter] = useState("")
  const [conditionFilter, setConditionFilter] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    filterResources(term, locationFilter, assistanceTypeFilter, conditionFilter)
  }

  const filterResources = (search: string, location: string, assistanceType: string, condition: string) => {
    const filtered = resources.filter(resource =>
      resource.name.toLowerCase().includes(search) &&
      (location === "" || resource.location === location) &&
      (assistanceType === "" || resource.assistanceType === assistanceType) &&
      (condition === "" || resource.condition === condition)
    )
    setFilteredResources(filtered)
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Resources for Children with Special Health Care Needs</h1>
      
      <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Select onValueChange={(value) => {
            setLocationFilter(value)
            filterResources(searchTerm, value, assistanceTypeFilter, conditionFilter)
          }}>
            <SelectTrigger id="location">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Locations</SelectItem>
              <SelectItem value="New York">New York</SelectItem>
              <SelectItem value="California">California</SelectItem>
              {/* Add more locations as needed */}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="assistanceType">Assistance Type</Label>
          <Select onValueChange={(value) => {
            setAssistanceTypeFilter(value)
            filterResources(searchTerm, locationFilter, value, conditionFilter)
          }}>
            <SelectTrigger id="assistanceType">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Types</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Therapy">Therapy</SelectItem>
              {/* Add more assistance types as needed */}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="condition">Condition</Label>
          <Select onValueChange={(value) => {
            setConditionFilter(value)
            filterResources(searchTerm, locationFilter, assistanceTypeFilter, value)
          }}>
            <SelectTrigger id="condition">
              <SelectValue placeholder="Select condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Conditions</SelectItem>
              <SelectItem value="Learning Disability">Learning Disability</SelectItem>
              <SelectItem value="Autism">Autism</SelectItem>
              {/* Add more conditions as needed */}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(resource => (
          <Card key={resource.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{resource.name}</CardTitle>
              <CardDescription>{resource.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{resource.description}</p>
              <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold  tracking-wide">
                  {resource.assistanceType}
                </span>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide ml-2">
                  {resource.condition}
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">Contact: {resource.contact}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}