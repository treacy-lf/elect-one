import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGrid from "@/components/PropertyGrid";
import FilterSection from "@/components/FilterSection";

const CreativeParks = () => {
  const creativeParks = [
    { name: "800秀创意园", image: "800xiu.jpg" },
    { name: "安垦汇智创意园" },
    { name: "八号桥Ⅳ期" },
    { name: "大宁德必易园" },
    { name: "复地四季广场" },
    { name: "老码头创意园" },
    { name: "幸福里创意园" },
    { name: "M50创意园" },
    { name: "田子坊" },
    { name: "1933老场坊" },
    { name: "红坊创意园" },
    { name: "上海国际时尚中心" },
  ];

  return (
    <div className="min-h-screen font-[Noto_Sans_SC]">
      <Header />
      <main>
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white text-center mb-4">
              创意园区租赁
            </h1>
            <p className="text-white/90 text-center max-w-2xl mx-auto">
              充满艺术气息的创意办公空间，激发团队创新灵感
            </p>
          </div>
        </section>
        <FilterSection />
        <PropertyGrid
          title="全部创意园区"
          category="creative-parks"
          properties={creativeParks}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CreativeParks;
