"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BfnDetails() {
  const [name, setName] = useState("")
  const [aadhar, setAadhar] = useState("")
  const [gender, setGender] = useState("")
  const [category, setCategory] = useState("")
  const [income, setIncome] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")
  const [state, setState] = useState("")
  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <main className="flex flex-1 flex-col gap-8 p-4 md:gap-10 md:p-10 justify-center items-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Front Line Workers</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 max-w-4xl w-full">
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-bold text-primary">Beneficiary Details</CardTitle>
              <div className="flex items-center gap-2">
                <UsersIcon className="w-4 h-4 text-muted-foreground" />
                <PlusIcon className="w-4 h-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aadhar">Aadhar Number</Label>
                  <Input
                    id="aadhar"
                    placeholder="Enter Aadhar number"
                    value={aadhar}
                    onChange={(e) => setAadhar(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select defaultValue={gender} onValueChange={(value) => setGender(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue={category} onValueChange={(value) => setCategory(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="obc">OBC</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="income">Income</Label>
                  <Select defaultValue={income} onValueChange={(value) => setIncome(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select income" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below-1-lakh">Below 1 Lakh</SelectItem>
                      <SelectItem value="1-5-lakh">1 - 5 Lakh</SelectItem>
                      <SelectItem value="5-10-lakh">5 - 10 Lakh</SelectItem>
                      <SelectItem value="above-10-lakh">Above 10 Lakh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="marital-status">Marital Status</Label>
                  <Select defaultValue={maritalStatus} onValueChange={(value) => setMaritalStatus(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select marital status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Textarea
                    id="state"
                    placeholder="Enter state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
                <Button type="submit">Upload</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <Link
          href="/applicationdt"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          View Beneficiaries
        </Link>
      </main>
    </div>
  )
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
