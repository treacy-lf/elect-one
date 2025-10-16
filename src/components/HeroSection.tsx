import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const hotAreas = [
    { name: "虹桥商务区", color: "text-accent" },
    { name: "徐泾/西虹桥", color: "text-accent" },
    { name: "虹桥临空经济区", color: "text-accent" },
  ];

  const heroImages = [
    { src: hero1, alt: "写字楼出租" },
    { src: hero2, alt: "共享办公" },
    { src: hero3, alt: "创意园区" },
  ];

  return (
    <section className="relative h-[600px] overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[600px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Search Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-4xl space-y-8">
          {/* Hot Areas */}
          <div className="flex gap-4 justify-center flex-wrap">
            {hotAreas.map((area) => (
              <button
                key={area.name}
                className={`px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 ${area.color} hover:bg-white/20 transition-all`}
              >
                {area.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="bg-white rounded-2xl p-4 shadow-2xl">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="请输入大厦名称开始选址"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg border-0 focus-visible:ring-0"
                />
              </div>
              <Button 
                size="lg" 
                className="h-14 px-8 bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                开始选址
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
