import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGrid from "@/components/PropertyGrid";
import FilterSection from "@/components/FilterSection";

const Coworking = () => {
  const coworkingSpaces = [
    { name: "Distrii办伴（冠捷大厦）", image: "distrii.jpg" },
    { name: "Umon优盟（虹桥丽宝广场）", image: "umon.jpg" },
    { name: "WeWork（虹桥天地）" },
    { name: "WIZWORK（环球港）" },
    { name: "艾克商务中心（外滩金融中心）" },
    { name: "大树下办公空间（龙湖虹桥天街）" },
    { name: "德事商务中心（静安嘉里中心）" },
    { name: "寰图办公空间（上海白玉兰广场）" },
    { name: "氪空间KrSpace（虹桥绿谷社区）" },
    { name: "快易名商（虹桥万通中心）" },
    { name: "雷格斯商务中心（1788国际中心）" },
    { name: "筑梦之星（凌空社区）" },
  ];

  return (
    <div className="min-h-screen font-[Noto_Sans_SC]">
      <Header />
      <main>
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white text-center mb-4">
              共享办公租赁
            </h1>
            <p className="text-white/90 text-center max-w-2xl mx-auto">
              灵活的办公空间解决方案，提供完善的配套设施和社区服务
            </p>
          </div>
        </section>
        <FilterSection />
        <PropertyGrid
          title="全部共享办公"
          category="coworking"
          properties={coworkingSpaces}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Coworking;
