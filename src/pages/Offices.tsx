import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterSection from "@/components/FilterSection";
import PropertyGrid from "@/components/PropertyGrid";

const Offices = () => {
  const allProperties = [
    { name: "虹桥汇" },
    { name: "SOHO天山广场" },
    { name: "虹桥天地" },
    { name: "Distrii办伴（冠捷大厦）" },
    { name: "WeWork（虹桥天地）" },
    { name: "800秀创意园" },
    { name: "平金中心（独栋）" },
    { name: "容大中心（独栋）" },
  ];

  return (
    <div className="min-h-screen font-[Noto_Sans_SC]">
      <Header />
      <main>
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white text-center mb-4">
              租办公室
            </h1>
            <p className="text-white/90 text-center max-w-2xl mx-auto">
              为您提供上海全区域办公空间租赁服务
            </p>
          </div>
        </section>
        <FilterSection />
        <PropertyGrid
          title="全部办公空间"
          category="offices"
          properties={allProperties}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Offices;
