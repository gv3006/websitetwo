import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Submit() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For now, we'll just show an alert
    alert("Thank you for your submission! This feature is not yet functional.")
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Submit a Resource</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <Label htmlFor="name">Resource Name</Label>
          <Input id="name" type="text" placeholder="Enter resource name" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Describe the resource" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="location">Location</Label>
          <Input id="location" type="text" placeholder="Enter location" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="assistanceType">Assistance Type</Label>
          <Select>
            <SelectTrigger id="assistanceType">
              <SelectValue placeholder="Select assistance type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="therapy">Therapy</SelectItem>
              <SelectItem value="medical">Medical</SelectItem>
              <SelectItem value="community">Community Support</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <Label htmlFor="condition">Condition</Label>
          <Input id="condition" type="text" placeholder="Enter related condition" required />
        </div>
        <div className="mb-4">
          <Label htmlFor="contact">Contact Information</Label>
          <Input id="contact" type="text" placeholder="Enter contact details" required />
        </div>
        <Button type="submit" className="w-full">Submit Resource</Button>
      </form>
    </>
  )
}