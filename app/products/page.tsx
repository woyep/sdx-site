type Product = { slug: string; title: string; brief: string; };
const PRODUCTS: Product[] = [
  { slug: "wind-hoist",   title: "风电提升机",     brief: "250–3000 kg 规格，松绳/限位保护，定制化支持" },
  { slug: "offshore-jib", title: "海上平台吊机",   brief: "500–1600 kg，回转 2.1–9 m，整机试验能力" },
  { slug: "kbk",          title: "KBK 轻型起重系统", brief: "模块化轨道，柔性布置，易维护" },
];

import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1>产品中心</h1>
      <div className="hr" />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {PRODUCTS.map(p => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="border rounded-xl p-4 hover:shadow-sm transition block">
            <div className="aspect-video bg-gray-100 rounded-lg mb-3" />
            <div className="font-semibold">{p.title}</div>
            <p className="text-sm text-gray-600 mt-1">{p.brief}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}