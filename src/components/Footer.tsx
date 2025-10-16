import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              超办网
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              专业写字楼租赁服务商
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>021-64202027</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@chaoban.com</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>上海市虹桥商务区</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">服务项目</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/office-buildings" className="text-muted-foreground hover:text-primary transition-colors">写字楼租赁</a></li>
              <li><a href="/creative-parks" className="text-muted-foreground hover:text-primary transition-colors">创意园区</a></li>
              <li><a href="/coworking" className="text-muted-foreground hover:text-primary transition-colors">共享办公</a></li>
              <li><a href="/standalone" className="text-muted-foreground hover:text-primary transition-colors">总部独栋</a></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-semibold mb-4">热门区域</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/areas/hongqiao" className="text-muted-foreground hover:text-primary transition-colors">虹桥商务区</a></li>
              <li><a href="/areas/xujiahui" className="text-muted-foreground hover:text-primary transition-colors">徐家汇</a></li>
              <li><a href="/areas/lujiazui" className="text-muted-foreground hover:text-primary transition-colors">陆家嘴</a></li>
              <li><a href="/areas/jing'an" className="text-muted-foreground hover:text-primary transition-colors">静安寺</a></li>
            </ul>
          </div>

          {/* News */}
          <div>
            <h4 className="font-semibold mb-4">资讯中心</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/news/encyclopedia" className="text-muted-foreground hover:text-primary transition-colors">楼盘百科</a></li>
              <li><a href="/news/guides" className="text-muted-foreground hover:text-primary transition-colors">找房攻略</a></li>
              <li><a href="/news/industry" className="text-muted-foreground hover:text-primary transition-colors">行业新闻</a></li>
              <li><a href="/news/decoration" className="text-muted-foreground hover:text-primary transition-colors">装修攻略</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 上海超办信息服务有限公司 版权所有</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
