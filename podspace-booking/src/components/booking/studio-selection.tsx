import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface StudioSelectionProps {
  selectedFormula: string;
}

// This would typically come from an API/database
const studios = [
  {
    id: "orange-studio",
    name: "Orange Is The New Black",
    description: "Our flagship studio with orange backdrop",
    imageUrl: "/images/studios/orange.jpg",
    capacity: 2,
    location: "29 rue des Jeneurs, 75002 Paris",
  },
  {
    id: "tokyo-studio",
    name: "Tokyo",
    description: "Japanese-inspired minimalist studio",
    imageUrl: "/images/studios/tokyo.jpg",
    capacity: 3,
    location: "29 rue des Jeneurs, 75002 Paris",
  },
  {
    id: "paris-studio",
    name: "Paris",
    description: "Elegant studio with Parisian accents",
    imageUrl: "/images/studios/paris.jpg",
    capacity: 4,
    location: "160 rue Montmartre, 75002 Paris",
  },
];

export function StudioSelection({ selectedFormula }: StudioSelectionProps) {
  return (
    <div className="max-w-[1300px] mx-auto p-6 py-0">
      <div className="flex items-start relative">
        <div className="flex-1 py-6 lg:border-r lg:pr-8">
          <div className="mb-12">
            <div>
              <div className="flex flex-col-reverse lg:flex-row gap-4 justify-between items-start">
                <div className="mb-8 max-w-xl">
                  <h1 className="text-2xl font-bold mb-2">Choose your studio</h1>
                  <p>Select the studio that best fits your needs.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:mt-0 mt-6 mb-6">
                {studios.map((studio) => (
                  <Card key={studio.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 w-full">
                      <Image
                        src={studio.imageUrl}
                        alt={studio.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{studio.name}</CardTitle>
                      <CardDescription>{studio.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span className="text-sm">{studio.location}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        <span className="text-sm">Up to {studio.capacity} people</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full bg-orange-500 hover:bg-orange-600 transition-all"
                        asChild
                      >
                        <Link href={`/date-time?formula=${selectedFormula}&studio=${studio.id}`}>
                          Select
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
