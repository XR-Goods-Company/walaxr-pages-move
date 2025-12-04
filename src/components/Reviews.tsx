import { Star } from "lucide-react";

const reviews = [
  {
    title: "Love the shirts and the color",
    content: "They are very comfortable😊",
    author: "Anne Whitfield",
    product: "YOLO Ladies Wicking Tee",
    date: "02/05/2023",
  },
  {
    title: "Above and Beyond",
    content: "Great products and amazing customer service! My great-nephew LOVED having a real dinosaur in his house walking around. The Christmas ornament has Santa and his reindeer flying through the air, which the boys also loved.",
    author: "Diane Wolverton",
    date: "01/13/2023",
  },
  {
    title: "So innovative!",
    content: "Gave the dinosaur shirt to my young adult nephew as a present. It's wonderful!",
    author: "Roberta",
    date: "12/21/2022",
  },
  {
    title: "These shirts are MAGICAL!!!",
    content: "At first glance, they are really cool - the different designs, colors and it all comes on a good cotton fabric. BUT, then the surprise! Using your phone and the QR code subtly embedded in the design, you're off into a world of elegant, beautiful fantasy!",
    author: "Ellen W. Aka \"Mahga\"",
    product: "XR Reality Collection: Year of the Dragon",
    date: "09/27/2022",
  },
  {
    title: "So creative!",
    content: "Everyone loves them! Even the adults.",
    author: "Joana Thorpe",
    date: "08/16/2022",
  },
  {
    title: "AMAZING PRODUCT",
    content: "This is the coolest invention/idea ever. I am so obsessed with my custom long sleeve XR shirt. Very very amazing invention!!",
    author: "Basia Query",
    date: "02/23/2022",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hear from other customers
          </h2>
          <div className="flex items-center justify-center gap-2">
            <StarRating />
            <span className="text-sm text-muted-foreground">from 10 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg">
              <StarRating />
              <h3 className="font-semibold text-foreground mt-3 mb-2">{review.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{review.content}</p>
              <div className="text-sm">
                <p className="font-medium text-foreground">{review.author}</p>
                {review.product && (
                  <p className="text-primary text-xs mt-1">{review.product}</p>
                )}
                <p className="text-muted-foreground text-xs mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
