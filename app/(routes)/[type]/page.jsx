import { notFound } from "next/navigation";
import { Building2, Home, Hotel } from "lucide-react";
import ListingCard from "@/components/ListingCard";
import { Card } from "@/components/ui/card";

const categoryIcons = {
  hostel: Hotel,
  pg: Home,
  flat: Building2,
};

const categoryTitles = {
  hostel: "Hostels",
  pg: "PG Accommodations",
  flat: "Flats",
};

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

export function generateStaticParams() {
  return [{ type: "hostel" }, { type: "pg" }, { type: "flat" }];
}

export default function ListingsPage({ params }) {
  if (!["hostel", "pg", "flat"].includes(params.type)) {
    notFound();
  }

  const Icon = categoryIcons[params.type];
  const title = categoryTitles[params.type];
  const filteredListings = listings.filter(
    (listing) => listing.type === params.type,
  );

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Icon className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </main>
  );
}
