import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";

const News = () => {
  return (
    <div className="min-h-screen font-[Noto_Sans_SC]">
      <Header />
      <main>
        <section className="bg-gradient-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white text-center mb-4">
              资讯中心
            </h1>
            <p className="text-white/90 text-center max-w-2xl mx-auto">
              了解最新的办公楼市场动态、租赁攻略和行业资讯
            </p>
          </div>
        </section>
        <div className="py-16">
          <NewsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
