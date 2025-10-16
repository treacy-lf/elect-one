import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGrid from "@/components/PropertyGrid";
import FilterSection from "@/components/FilterSection";

const Standalone = () => {
  const standaloneBuildings = [
    { name: "平金中心（独栋）" },
    { name: "容大中心（独栋）" },
    { name: "E通世界·华新园（独栋）" },
    { name: "丰隆虹桥中心（独栋）" },
    { name: "虹桥展汇（独栋）" },
    { name: "中建锦绣天地（独栋）" },
  ];

  return (
    <div className="min-h-screen font-[Noto_Sans_SC]">
      <Header />
      <main>
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white text-center mb-4">
              总部独栋租赁
            </h1>
            <p className="text-white/90 text-center max-w-2xl mx-auto">
              高端独栋办公楼，彰显企业实力与品牌形象
            </p>
          </div>
        </section>
        <FilterSection />
        <PropertyGrid
          title="全部总部独栋"
          category="standalone"
          properties={standaloneBuildings}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Standalone;
