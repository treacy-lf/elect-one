import { Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PropertyGridProps {
  title: string;
  category: string;
  properties: Array<{
    name: string;
    area?: string;
  }>;
}

const PropertyGrid = ({ title, category, properties }: PropertyGridProps) => {
  const navigate = useNavigate();
  
  const categoryRoutes: Record<string, string> = {
    "office-buildings": "/office-buildings",
    coworking: "/coworking",
    "creative-parks": "/creative-parks",
    standalone: "/standalone",
    offices: "/offices",
  };

  const handleCardClick = () => {
    const route = categoryRoutes[category];
    if (route) {
      navigate(route);
    }
  };

  const handleMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleCardClick();
  };
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={handleCardClick}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="h-16 w-16 text-primary/20" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {property.name}
                  </h3>
                  {property.area && (
                    <p className="text-sm text-muted-foreground">{property.area}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleMoreClick}
            className="inline-block px-8 py-3 text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
          >
            更多{title}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
