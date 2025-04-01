"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function DashboardPage() {
  const [listings] = useState([
    {
      id: "1",
      title: "Sunshine Hostel",
      type: "hostel",
      location: "Koramangala, Bangalore",
      price: 8000,
    },
    {
      id: "2",
      title: "Green View PG",
      type: "pg",
      location: "HSR Layout, Bangalore",
      price: 15000,
    },
  ]);

  const handleCreateListing = (e) => {
    e.preventDefault();
    toast.success("Listing created successfully!");
  };

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Owner Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Create New Listing</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateListing} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Property Name</Label>
                    <Input id="title" placeholder="Enter property name" />
                  </div>

                  <div>
                    <Label htmlFor="type">Property Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hostel">Hostel</SelectItem>
                        <SelectItem value="pg">PG</SelectItem>
                        <SelectItem value="flat">Flat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Enter location" />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your property"
                    />
                  </div>

                  <div>
                    <Label htmlFor="price">Base Price (₹/month)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Enter base price"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Create Listing
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Listings</h2>
            <div className="space-y-4">
              {listings.map((listing) => (
                <Card key={listing.id}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-semibold">{listing.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {listing.location}
                      </p>
                      <p className="text-sm">
                        ₹{listing.price.toLocaleString()} / month
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
