// "use client"

// import { useState } from "react"
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { useRouter } from "next/navigation"

// export function BfnDetails() {
//   const [name, setName] = useState("")
//   const [aadhar, setAadhar] = useState("")
//   const [gender, setGender] = useState("")
//   const [category, setCategory] = useState("")
//   const [income, setIncome] = useState("")
//   const [maritalStatus, setMaritalStatus] = useState("")
//   const [state, setState] = useState("")

//   const router = useRouter();

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     const payload = { name, 
//     const response = await fetch("http://localhost:5000/api/flw/new", 
//       {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         'token': `${localStorage.getItem('token')}`,

//       },
//       body: JSON.stringify(payload),
//   });

//     if (response.ok) {
//       alert("FLW created successfully!");
//       // Redirect or clear the form
//       router.push('/applicationdt');  // Adjust the path as needed
//     } else {
//       alert("Failed to create FLW.");
//     }
//   };



//   return (
//     <div className="flex flex-col w-full min-h-screen bg-muted/40">
//       <main className="flex flex-1 flex-col gap-8 p-4 md:gap-10 md:p-10 justify-center items-center">
//         <div className="space-y-3">
//           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Front Line Workers</h1>
//         </div>
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 max-w-4xl w-full">
//           <Card className="h-full">
//             <CardHeader className="flex flex-row items-center justify-between pb-2">
//               <CardTitle className="text-lg font-bold text-primary">Beneficiary Details</CardTitle>
//               <div className="flex items-center gap-2">
//                 <UsersIcon className="w-4 h-4 text-muted-foreground" />
//                 <PlusIcon className="w-4 h-4 text-muted-foreground" />
//               </div>
//             </CardHeader>
//             <CardContent>
//               <form className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Name</Label>
//                   <Input id="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="aadhar">Aadhar Number</Label>
//                   <Input
//                     id="aadhar"
//                     placeholder="Enter Aadhar number"
//                     value={aadhar}
//                     onChange={(e) => setAadhar(e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="gender">Gender</Label>
//                   <Select defaultValue={gender} onValueChange={(value) => setGender(value)}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select gender" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="male">Male</SelectItem>
//                       <SelectItem value="female">Female</SelectItem>
//                       <SelectItem value="other">Other</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="category">Category</Label>
//                   <Select defaultValue={category} onValueChange={(value) => setCategory(value)}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="general">General</SelectItem>
//                       <SelectItem value="obc">OBC</SelectItem>
//                       <SelectItem value="sc">SC</SelectItem>
//                       <SelectItem value="st">ST</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="income">Income</Label>
//                   <Select defaultValue={income} onValueChange={(value) => setIncome(value)}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select income" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="below-1-lakh">Below 1 Lakh</SelectItem>
//                       <SelectItem value="1-5-lakh">1 - 5 Lakh</SelectItem>
//                       <SelectItem value="5-10-lakh">5 - 10 Lakh</SelectItem>
//                       <SelectItem value="above-10-lakh">Above 10 Lakh</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="marital-status">Marital Status</Label>
//                   <Select defaultValue={maritalStatus} onValueChange={(value) => setMaritalStatus(value)}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select marital status" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="single">Single</SelectItem>
//                       <SelectItem value="married">Married</SelectItem>
//                       <SelectItem value="divorced">Divorced</SelectItem>
//                       <SelectItem value="widowed">Widowed</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="state">State</Label>
//                   <Textarea
//                     id="state"
//                     placeholder="Enter state"
//                     value={state}
//                     onChange={(e) => setState(e.target.value)}
//                     className="min-h-[100px]"
//                   />
//                 </div>
//                 <Button type="submit">Upload</Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//         <Link
//           href="/applicationdt"
//           className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//           prefetch={false}
//         >
//           View Beneficiaries
//         </Link>
//       </main>
//     </div>
//   )
// }

// function PlusIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 12h14" />
//       <path d="M12 5v14" />
//     </svg>
//   )
// }


// function UsersIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   )
// }


// function XIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   )
// }
"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function BfnDetails() {
  const [name, setName] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [age, setAge] = useState("");
  const [aadhar_no, setAadhar] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [income, setIncome] = useState("");
  const [marital_status, setMaritalStatus] = useState("");
  const [region, setRegion] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const payload = {
      name,
      phone_no,
      age,
      aadhar_no,
      gender,
      category,
      income,
      marital_status,
      region,
    };
    console.log("Name:", name);
    console.log("Phone Number:", phone_no);
    console.log("Age:", age);
    console.log("Aadhar:", aadhar_no);
    console.log("Gender:", gender);
    console.log("Category:", category);
    console.log("Income:", Number(income));
    console.log("Marital Status:", marital_status);
    console.log("Region:", region);
    const response = await fetch("http://localhost:5000/api/flw/beneficiary/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert("Beneficiary created successfully!");
      // Redirect or clear the form
      router.push("/applicationdt"); // Adjust the path as needed
    } else {
      alert("Failed to create Beneficiary.");
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <main className="flex flex-1 flex-col gap-8 p-4 md:gap-10 md:p-10 justify-center items-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Front Line Workers
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 max-w-4xl w-full">
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-bold text-primary">
                Beneficiary Details
              </CardTitle>
              <div className="flex items-center gap-2">
                {/* <UsersIcon className="w-4 h-4 text-muted-foreground" />
                <PlusIcon className="w-4 h-4 text-muted-foreground" /> */}
              </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNo">Phone Number</Label>
                  <Input
                    id="phoneNo"
                    placeholder="Enter phone number"
                    value={phone_no}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    placeholder="Enter age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aadhar">Aadhar Number</Label>
                  <Input
                    id="aadhar"
                    placeholder="Enter Aadhar number"
                    value={aadhar_no}
                    onChange={(e) => setAadhar(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    defaultValue={gender}
                    onValueChange={(value) => setGender(value)}
                  >
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
                  <Select
                    defaultValue={category}
                    onValueChange={(value) => setCategory(value)}
                  >
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
                  <Input
                    id="income"
                    placeholder="Annual income"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                  />
                  {/* <Select
                    defaultValue={income}
                    onValueChange={(value) => setIncome(value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select income" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below-1-lakh">Below 1 Lakh</SelectItem>
                      <SelectItem value="1-5-lakh">1 - 5 Lakh</SelectItem>
                      <SelectItem value="5-10-lakh">5 - 10 Lakh</SelectItem>
                      <SelectItem value="above-10-lakh">Above 10 Lakh</SelectItem>
                    </SelectContent>
                  </Select> */}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maritalStatus">Marital Status</Label>
                  <Select
                    defaultValue={marital_status}
                    onValueChange={(value) => setMaritalStatus(value)}
                  >
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
                  <Label htmlFor="region">Region</Label>
                  <Input
                    id="region"
                    placeholder="Enter region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
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
  );
}

// function PlusIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 12h14" />
//       <path d="M12 5v14" />
//     </svg>
//   );
// }

// function UsersIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4

