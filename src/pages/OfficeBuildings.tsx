import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGrid from "@/components/PropertyGrid";
import FilterSection from "@/components/FilterSection";

const OfficeBuildings = () => {
  const officeBuildings = [
    { name: "虹桥汇", image: "hongqiaohui.jpg" },
    { name: "SOHO天山广场", image: "soho.jpg" },
    { name: "虹桥天地", image: "hongqiao-tiandi.jpg" },
    { name: "虹桥世界中心" },
    { name: "中骏广场二期" },
    { name: "虹桥阿里中心" },
    { name: "远东国际广场" },
    { name: "维璟中心" },
    { name: "恒基旭辉中心" },
    { name: "尚嘉中心" },
    { name: "嘉里中心" },
    { name: "环球金融中心" },
  ];

  return (
    <div className="min-h-screen font-[Noto_Sans_SC]">
      <Header />
      <main>
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white text-center mb-4">
              上海写字楼出租
            </h1>
            <p className="text-white/90 text-center max-w-2xl mx-auto">
              专业提供上海各区域优质写字楼租赁服务，为您的企业发展提供完美办公空间
            </p>
          </div>
        </section>
        <FilterSection />
        <PropertyGrid
          title="全部写字楼"
          category="office-buildings"
          properties={officeBuildings}
        />
      </main>
      <Footer />
    </div>
  );
};

export default OfficeBuildings;
