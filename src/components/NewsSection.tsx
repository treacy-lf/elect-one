import { Calendar } from "lucide-react";

const NewsSection = () => {
  const newsCategories = [
    {
      title: "楼盘百科",
      articles: [
        { title: "上海市静安区的现代化创意写字楼：宏慧视界BOX", date: "2025-09-23" },
        { title: "金融街融悦中心：由一栋5A超高层写字楼组成", date: "2025-09-15" },
        { title: "静安区综合性商业广场：汉中广场", date: "2025-09-09" },
        { title: "恒汇国际大厦：静安区标志性建筑之一", date: "2025-09-02" },
      ],
    },
    {
      title: "找房攻略",
      articles: [
        { title: "办公室装修风水选址？", date: "2025-09-24" },
        { title: "企业办公室租赁选址的原则", date: "2025-09-18" },
        { title: "企业怎么选择办公室租赁位置", date: "2025-09-12" },
        { title: "写字楼选址九大攻略", date: "2025-09-08" },
      ],
    },
    {
      title: "行业新闻",
      articles: [
        { title: "虹桥新天地焕新出发，升级上海第一站体验", date: "2025-09-25" },
        { title: "闵行这个新地标加速崛起，国内外行业翘楚纷至沓来", date: "2025-09-19" },
        { title: "上海高端医疗器械新布局 虹桥再添功能平台", date: "2025-09-17" },
        { title: "大杯变超大杯，上海大虹桥规划升维", date: "2025-09-11" },
      ],
    },
    {
      title: "装修攻略",
      articles: [
        { title: "办公室装修设计验收", date: "2025-09-22" },
        { title: "办公室装修设计注意事项", date: "2025-09-16" },
        { title: "办公室装修常见问题解答", date: "2025-09-10" },
        { title: "现代办公室设计趋势", date: "2025-09-05" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {newsCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <a
                  href="/news"
                  className="text-sm text-primary hover:underline"
                >
                  更多 &gt;&gt;
                </a>
              </div>
              <ul className="space-y-4">
                {category.articles.map((article, index) => (
                  <li
                    key={index}
                    className="group cursor-pointer"
                  >
                    <a href="/news" className="flex justify-between items-start gap-4">
                      <span className="flex-1 text-sm group-hover:text-primary transition-colors line-clamp-1">
                        {article.title}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
