import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Anne Whitfield",
    date: "02/05/2023",
    rating: 5,
    text: "Love the shirts and the color. They are very comfortable!",
  },
  {
    name: "Diane Wolverton",
    date: "01/13/2023",
    rating: 5,
    text: "Above and Beyond! Great products and amazing customer service! The dinosaur sticker was a hit with my great-nephew - he LOVED having a real dinosaur walking around in his house.",
  },
  {
    name: "Ellen W.",
    date: "09/27/2022",
    rating: 5,
    text: "These shirts are MAGICAL!!! Using your phone and the QR code, you're off into a world of elegant, beautiful fantasy! My friends all say: 'where can I get one??'",
  },
  {
    name: "Basia Query",
    date: "02/23/2022",
    rating: 5,
    text: "This is the coolest invention/idea ever. I am so obsessed with my custom long sleeve XR shirt. Very very amazing invention!!",
  },
  {
    name: "Salma M.",
    date: "02/06/2022",
    rating: 5,
    text: "This definitely does not disappoint and one is not enough! Great customer service, fantastic quality and a unique creative idea! Everyone will want one!",
  },
  {
    name: "Roberta",
    date: "12/21/2022",
    rating: 5,
    text: "So innovative! Gave the dinosaur shirt to my young adult nephew as a present. It's wonderful!",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What Customers <span className="text-gradient">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground">Based on 10+ verified reviews</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card-glow bg-card border border-border rounded-xl p-6 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="font-medium text-sm">{review.name}</span>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
