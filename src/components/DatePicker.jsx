import React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const DatePicker = ({ fromDate, setFromDate, toDate, setToDate }) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="from-date">From Date</Label>
        <Input
          id="from-date"
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="to-date">To Date</Label>
        <Input
          id="to-date"
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>

      {/* Optional: Search button */}
      {/* 
      <div className="flex items-end">
        <Button type="submit" className="h-[38px]">
          Search
        </Button>
      </div>
      */}
    </div>
  )
}
