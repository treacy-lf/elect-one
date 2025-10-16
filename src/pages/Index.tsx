import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FilterSection from "@/components/FilterSection";
import DistrictGrid from "@/components/DistrictGrid";
import PropertyGrid from "@/components/PropertyGrid";
import ConsultationCTA from "@/components/ConsultationCTA";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const officeBuildings = [
    { name: "虹桥汇" },
    { name: "SOHO天山广场" },
    { name: "虹桥天地" },
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

  const coworkingSpaces = [
    { name: "Distrii办伴（冠捷大厦）" },
    { name: "Umon优盟（虹桥丽宝广场）" },
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

  const creativeParks = [
    { name: "800秀创意园" },
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
        <HeroSection />
        <FilterSection />
        <DistrictGrid />
        <PropertyGrid
          title="精选写字楼"
          category="office-buildings"
          properties={officeBuildings}
        />
        <div className="bg-muted/30">
          <PropertyGrid
            title="精选联合办公"
            category="coworking"
            properties={coworkingSpaces}
          />
        </div>
        <PropertyGrid
          title="精选创意园区"
          category="creative-parks"
          properties={creativeParks}
        />
        <div className="bg-muted/30">
          <PropertyGrid
            title="精选总部独栋"
            category="standalone"
            properties={standaloneBuildings}
          />
        </div>
        <ConsultationCTA />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
