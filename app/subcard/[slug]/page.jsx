import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const cardData = [
  {
    id: 1,
    title: "Picture",
    ctaText: "Click Here",
  },
  {
    id: 2,
    title: "Excel Sheet",
    ctaText: "Click Here",
  },
];

export default async function slugCard({ params }) {
  const slug = (await params).slug;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Card Number {slug}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle className="text-3xl text-center font-bold">
                {card.title}
              </CardTitle>
            </CardHeader>

            <CardFooter>
              <Button className="w-full transition-colors duration-300 hover:bg-primary/90">
                {card.ctaText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
