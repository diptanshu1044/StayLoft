"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const listings = [
  {
    id: "1",
    title: "Sunshine Hostel",
    description: "Comfortable and affordable accommodation for students",
    price: 8000,
    location: "Koramangala, Bangalore",
    type: "hostel",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80",
    amenities: ["WiFi", "Laundry", "Security"],
    rooms: [
      { id: "r1", type: "Shared", price: 8000, available: 5 },
      { id: "r2", type: "Private", price: 12000, available: 2 },
    ],
  },
  {
    id: "2",
    title: "Green View PG",
    description: "Home away from home with all modern amenities",
    price: 15000,
    location: "HSR Layout, Bangalore",
    type: "pg",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    amenities: ["Food", "WiFi", "AC"],
    rooms: [
      { id: "r3", type: "Single", price: 15000, available: 3 },
      { id: "r4", type: "Double", price: 10000, available: 4 },
    ],
  },
];

export default function ListingDetailPage({ params }) {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const listing = listings.find(
    (l) => l.id === params.id && l.type === params.type,
  );

  if (!listing) {
    notFound();
  }

  const handleBooking = () => {
    toast.success("Booking request sent successfully!");
  };

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{listing.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">
              {listing.location}
            </p>
            <p className="text-lg mb-6">{listing.description}</p>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {listing.amenities.map((amenity) => (
                  <Badge key={amenity} variant="secondary">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Available Rooms</h2>
              <div className="grid gap-4">
                {listing.rooms.map((room) => (
                  <Card key={room.id}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-semibold">{room.type}</p>
                        <p className="text-muted-foreground">
                          ₹{room.price.toLocaleString()} / month
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {room.available} rooms available
                        </p>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button onClick={() => setSelectedRoom(room.id)}>
                            Book Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Confirm Booking</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p>
                              You are about to book a {room.type} room at{" "}
                              {listing.title}
                            </p>
                            <p className="font-semibold">
                              Monthly Rent: ₹{room.price.toLocaleString()}
                            </p>
                            <Button onClick={handleBooking} className="w-full">
                              Confirm Booking
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
