'use client'

import { useState, useCallback, useMemo } from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 8,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 2 + 3,
  }))
}

export default function SubmitResource() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    assistanceTypes: [] as string[],
    conditions: [] as string[],
    contact: '',
  })

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleSelectChange = useCallback((name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleCheckboxChange = useCallback((name: string, category: 'assistanceTypes' | 'conditions') => (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [category]: checked
        ? [...prev[category], name]
        : prev[category].filter(item => item !== name)
    }))
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }, [formData])

  const particles = useMemo(() => generateParticles(100), [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          background: 'linear-gradient(to right, rgba(168, 85, 247, 1), rgba(236, 72, 153, 0.7))',
        }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white rounded-full"
            style={{
              width: particle.size + 'px',
              height: particle.size + 'px',
              top: particle.top + '%',
              left: particle.left + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
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
          <h1 className="text-4xl font-bold mb-4 text-white">Submit a Resource</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Help us grow our database by submitting a resource for children with special health care needs.
          </p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Resource Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Resource Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Primary Location</Label>
                  <Select onValueChange={handleSelectChange('location')}>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="national">National</SelectItem>
                      <SelectItem value="illinois">Illinois</SelectItem>
                      <SelectItem value="wisconsin">Wisconsin</SelectItem>
                      <SelectItem value="missouri">Missouri</SelectItem>
                      <SelectItem value="online">Online</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Assistance Types</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Support Group', 'Advocacy', 'Education', 'Medical', 'Directory', 'Care Coordination', 'Assistive Technology', 'Therapy', 'Financial Support'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={`assistanceType-${type}`}
                          onCheckedChange={handleCheckboxChange(type, 'assistanceTypes')}
                        />
                        <Label htmlFor={`assistanceType-${type}`}>{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Conditions</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Autism', 'Cerebral Palsy', 'Developmental Disabilities', 'Limb Differences', 'Chronic Health Conditions','All Conditions', 'Neurodivergence'].map((condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox
                          id={`condition-${condition}`}
                          onCheckedChange={handleCheckboxChange(condition, 'conditions')}
                        />
                        <Label htmlFor={`condition-${condition}`}>{condition}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Information</Label>
                  <Input
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">Submit Resource</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}