// import { Button } from "@/components/ui/button";
// import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// const cardData = [
//   {
//     id: 1,
//     title: "1",
//     ctaText: "Click Here",
//   },
//   {
//     id: 2,
//     title: "2",
//     ctaText: "Click Here",
//   },
//   {
//     id: 3,
//     title: "3",
//     ctaText: "Click Here",
//   },
//   {
//     id: 4,
//     title: "4",
//     ctaText: "Click Here",
//   },
//   {
//     id: 5,
//     title: "5",
//     ctaText: "Click Here",
//   },
//   {
//     id: 6,
//     title: "6",
//     ctaText: "Click Here",
//   },
//   {
//     id: 7,
//     title: "7",
//     ctaText: "Click Here",
//   },
//   {
//     id: 8,
//     title: "8A",
//     ctaText: "Click Here",
//   },
//   {
//     id: 9,
//     title: "8B",
//     ctaText: "Click Here",
//   },
//   {
//     id: 10,
//     title: "9A",
//     ctaText: "Click Here",
//   },
//   {
//     id: 11,
//     title: "9B",
//     ctaText: "Click Here",
//   },
//   {
//     id: 12,
//     title: "11",
//     ctaText: "Click Here",
//   },
//   {
//     id: 13,
//     title: "12",
//     ctaText: "Click Here",
//   },
// ];

// export default function Component() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold text-center mb-8">Choose Your Box</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cardData.map((card) => (
//           <Card
//             key={card.id}
//             className="overflow-hidden transition-all duration-300 hover:shadow-lg"
//           >
//             <CardHeader>
//               <CardTitle className="text-3xl text-center font-bold">
//                 {card.title}
//               </CardTitle>
//             </CardHeader>

// <CardFooter>
//   <Button className="w-full transition-colors duration-300 hover:bg-primary/90">
//     {card.ctaText}
//   </Button>
// </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const cardData = [
  { id: 1, title: "1", ctaText: "Click Here" },
  { id: 2, title: "2", ctaText: "Click Here" },
  { id: 3, title: "3", ctaText: "Click Here" },
  { id: 4, title: "4", ctaText: "Click Here" },
  { id: 5, title: "5", ctaText: "Click Here" },
  { id: 6, title: "6", ctaText: "Click Here" },
  { id: 7, title: "7", ctaText: "Click Here" },
  { id: 8, title: "8A", ctaText: "Click Here" },
  { id: 9, title: "8B", ctaText: "Click Here" },
  { id: 10, title: "9A", ctaText: "Click Here" },
  { id: 11, title: "9B", ctaText: "Click Here" },
  { id: 12, title: "11", ctaText: "Click Here" },
  { id: 13, title: "12", ctaText: "Click Here" },
];

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Box</h2>
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
              <Link href={`/click/${card.id}`} passHref className="w-full">
                <Button
                  as="a"
                  className="w-full transition-colors duration-300 hover:bg-primary/90"
                >
                  {card.ctaText}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
