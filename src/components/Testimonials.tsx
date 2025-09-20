import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import testimonial images
import testimonialFeedback1 from "@/assets/testimonial-feedback-1.webp";
import testimonialFeedback2 from "@/assets/testimonial-feedback-2.webp";
import testimonialChat1 from "@/assets/testimonial-chat-1.png";
import testimonialChat2 from "@/assets/testimonial-chat-2.png";
import testimonialChat3 from "@/assets/testimonial-chat-3.png";
import testimonialsVideo from "@/assets/testimonials-video.mp4";

const testimonialImages = [
  testimonialFeedback1,
  testimonialFeedback2,
  testimonialChat1,
  testimonialChat2,
  testimonialChat3,
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Histórias de
            <span className="text-transparent bg-clip-text bg-gradient-gold"> Sucesso</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Veja o que nossos alunos aprovados têm a dizer sobre a jornada até a conquista
          </p>
        </div>

        {/* Carousel de Imagens de Depoimentos */}
        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {[...testimonialImages, ...testimonialImages].map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img
                      src={image}
                      alt={`Depoimento ${(index % testimonialImages.length) + 1}`}
                      className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Vídeo de Depoimentos */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <video 
              controls 
              className="w-full rounded-lg shadow-2xl"
              poster={testimonialFeedback1}
            >
              <source src={testimonialsVideo} type="video/mp4" />
              Seu navegador não suporta vídeos em HTML5.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}