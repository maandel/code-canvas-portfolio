import { motion } from "framer-motion";
import { testimonials } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16 italic tracking-tighter">Client Voices</h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/1">
                <div className="p-1">
                  <Card className="border-none bg-transparent shadow-none">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className="relative mb-8">
                        <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/10 -z-10" />
                        <p className="text-2xl md:text-3xl font-medium leading-tight">
                          "{testimonial.content}"
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-left">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-background"
                        />
                        <div>
                          <p className="font-bold text-lg">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}