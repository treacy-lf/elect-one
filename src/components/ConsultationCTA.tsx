import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import consultationImg from "@/assets/consultation.jpg";

const ConsultationCTA = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-2xl overflow-hidden shadow-card-hover">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={consultationImg}
                alt="委托选址服务"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">
                委托超办网，选址更轻松
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                专业选址团队，全程免费服务，看房专车接送
              </p>
              <Button
                size="lg"
                className="bg-gradient-accent hover:opacity-90 transition-opacity group"
              >
                委托选址
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
