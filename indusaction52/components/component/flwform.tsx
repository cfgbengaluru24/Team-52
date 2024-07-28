import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function FlwForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const payload = { name, email, password };
    const response = await fetch("http://localhost:5000/api/flw/new", 
      {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'token': `${localStorage.getItem('token')}`,

      },
      body: JSON.stringify(payload),
  });

  const data = await response.json();
    console.log(data.token);
    localStorage.setItem('token', data.token);
    if (response.ok) {
      alert("FLW created successfully!");
      // Redirect or clear the form
      router.push('/applicationdt');  // Adjust the path as needed
    } else {
      alert("Failed to create FLW.");
    }
  };


  // const [role, setRole] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const router = useRouter();

  // const handleNavigate = (path: string) => {
  //   router.push(path);
  // };
  
  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const response = await fetch("http://localhost:5000/api/user/login", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({email,password}),
  //   });

  //   if (response.ok){
  //     console.log(role)
  //     if (role=="FLW"){
  //       handleNavigate('/bfndetails');
  //     }
  //     else{
  //       handleNavigate("/admin");
  //     }
  //   }
  //   else{
  //     alert("Wrong creds!!");
  //   }
    


  return (
    <div className="container mx-auto max-w-2xl py-12">
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">User Registration</h1>
        <p className="text-muted-foreground">Fill out the form to register a new user.</p>
      </div>
      <Card>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="button" onClick={handleSubmit} className="w-full">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
  )
}