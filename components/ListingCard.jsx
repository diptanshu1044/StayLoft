import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export default function ListingCard({ listing }) {
  const lowestPrice = Math.min(...listing.rooms.map((room) => room.price));

  return (
    <Link href={`/${listing.type}/${listing.id}`}>
      <Card className="group hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="relative h-48 p-0 overflow-hidden">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute bottom-2 right-2">
            <Badge variant="secondary" className="bg-black/75 text-white">
              From ₹{lowestPrice.toLocaleString()}/month
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <CardTitle className="mb-2">{listing.title}</CardTitle>
          <p className="text-muted-foreground text-sm mb-3">
            {listing.location}
          </p>
          <div className="flex flex-wrap gap-2">
            {listing.amenities.slice(0, 3).map((amenity) => (
              <Badge key={amenity} variant="outline">
                {amenity}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
