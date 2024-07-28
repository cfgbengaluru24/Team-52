import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export function ApplicationDt() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <div className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <h1 className="text-4xl font-bold">Beneficiary Details</h1>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Beneficiary Name</TableHead>
                <TableHead>Contact Number</TableHead>
                <TableHead>Scheme Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Eligibility</TableHead>
                <TableHead>Documents Required</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Liam Johnson</TableCell>
                <TableCell>+1 234 567 890</TableCell>
                <TableCell className="font-medium">Old Age Pension Scheme</TableCell>
                <TableCell>Provides a monthly pension to eligible senior citizens.</TableCell>
                <TableCell>
                  Indian citizens aged 60 years or above, with a family income below a certain threshold.
                </TableCell>
                <TableCell>
                  <ul className="list-disc pl-4">
                    <li>Proof of age (birth certificate or Aadhaar card)</li>
                    <li>Income certificate</li>
                    <li>Bank account details</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Olivia Davis</TableCell>
                <TableCell>+1 987 654 321</TableCell>
                <TableCell className="font-medium">Widow Pension Scheme</TableCell>
                <TableCell>Provides a monthly pension to eligible widows.</TableCell>
                <TableCell>
                  Indian citizens aged 40 years or above, with a family income below a certain threshold.
                </TableCell>
                <TableCell>
                  <ul className="list-disc pl-4">
                    <li>Death certificate of spouse</li>
                    <li>Income certificate</li>
                    <li>Bank account details</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sophia Garcia</TableCell>
                <TableCell>+1 555 123 4567</TableCell>
                <TableCell className="font-medium">Disability Pension Scheme</TableCell>
                <TableCell>Provides a monthly pension to eligible persons with disabilities.</TableCell>
                <TableCell>
                  Indian citizens with a disability of 40% or more, with a family income below a certain threshold.
                </TableCell>
                <TableCell>
                  <ul className="list-disc pl-4">
                    <li>Disability certificate</li>
                    <li>Income certificate</li>
                    <li>Bank account details</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ethan Patel</TableCell>
                <TableCell>+1 111 222 3333</TableCell>
                <TableCell className="font-medium">National Family Benefit Scheme</TableCell>
                <TableCell>
                  Provides a lump-sum assistance to the family in the event of the breadwinner's death.
                </TableCell>
                <TableCell>Indian citizens with a family income below a certain threshold.</TableCell>
                <TableCell>
                  <ul className="list-disc pl-4">
                    <li>Death certificate of breadwinner</li>
                    <li>Income certificate</li>
                    <li>Bank account details</li>
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
