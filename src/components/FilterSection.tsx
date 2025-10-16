const FilterSection = () => {
  const locations = [
    "不限", "浦东", "黄浦", "静安", "徐汇", "长宁", "普陀", "闵行", 
    "青浦", "虹口", "杨浦", "嘉定", "宝山", "松江", "奉贤", "金山"
  ];

  const subwayLines = [
    "不限", "1号线", "2号线", "3号线", "4号线", "5号线", "6号线", "7号线",
    "8号线", "9号线", "10号线", "11号线", "12号线", "13号线", "14号线",
    "15号线", "16号线", "17号线", "18号线", "19号线", "20号线"
  ];

  const areas = [
    "不限", "100m²以下", "100-200m²", "200-300m²", "300-500m²", "500-1000m²", "1000m²以上"
  ];

  const prices = [
    "不限", "3元以下", "3-4元", "4-5元", "5-7元", "7-9元", "9-12元", "12元以上"
  ];

  return (
    <section className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="space-y-4">
          {/* Location Filter */}
          <FilterRow label="位置" items={locations} />
          
          {/* Subway Filter */}
          <FilterRow label="地铁" items={subwayLines} />
          
          {/* Area Filter */}
          <FilterRow label="面积" items={areas} />
          
          {/* Price Filter */}
          <FilterRow label="价格" items={prices} />
        </div>
      </div>
    </section>
  );
};

const FilterRow = ({ label, items }: { label: string; items: string[] }) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-20 flex-shrink-0 pt-2 text-sm font-medium text-foreground/80">
        {label}
      </div>
      <div className="flex-1 flex flex-wrap gap-2">
        {items.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              index === 0
                ? "bg-primary text-primary-foreground"
                : "bg-background hover:bg-primary/10 text-foreground/80"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
