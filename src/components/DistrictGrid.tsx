import { Building2 } from "lucide-react";

const DistrictGrid = () => {
  const districts = [
    { name: "虹桥商务区", count: "120+" },
    { name: "徐泾/西虹桥", count: "80+" },
    { name: "虹桥临空经济区", count: "95+" },
    { name: "虹桥古北开发区", count: "65+" },
    { name: "人民广场", count: "150+" },
    { name: "长风商务区", count: "70+" },
    { name: "莘庄商务区", count: "55+" },
    { name: "陆家嘴", count: "200+" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">上海热门商圈</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {districts.map((district) => (
            <div
              key={district.name}
              className="group relative overflow-hidden rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="h-24 w-24 text-primary/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{district.name}</h3>
                  <p className="text-white/80">{district.count} 楼盘</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistrictGrid;
