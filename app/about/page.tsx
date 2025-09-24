// app/about/page.tsx
import Link from "next/link";

export default function About() {
  return (
    <div className="space-y-16">
      {/* 顶部：标题 + 副文案 */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-3">关于圣德信</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          我们专注于风电提升机、海上平台吊机、KBK 轻型起重系统等轻型起重方案的研发与制造，
          为国内外客户提供稳定可靠的设备与服务。
        </p>
      </section>

      {/* 两栏：公司介绍 + 占位图（无图也能排版好看） */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        {/* 占位图（替换为公司/工厂照片时，把这个 div 换成 <Image />） */}
        <div className="w-full h-[360px] bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">公司/工厂照片占位</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">我们是谁</h2>
          <p className="text-gray-700 leading-7">
            圣德信轻型起重设备长期深耕风电与海工应用场景，形成从方案设计、制造装配到安装调试、
            培训维保的一体化交付能力。我们以安全可靠为底线，以工程落地为导向，为客户创造可衡量的价值。
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>✅ 自主研发：核心部件与控制策略可定制</li>
            <li>✅ 安全合规：多重保护、型式试验、质检可追溯</li>
            <li>✅ 交付闭环：安装/培训/维保全覆盖</li>
            <li>✅ 行业经验：服务国内外风场与海上平台项目</li>
          </ul>
        </div>
      </section>

      {/* 关键数据/里程碑（可选占位） */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-8">关键里程碑</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { k: "10+", v: "年行业经验" },
            { k: "300+", v: "项目交付" },
            { k: "20+", v: "核心专利/认证" },
            { k: "7×24", v: "服务响应" },
          ].map((i) => (
            <div key={i.k} className="rounded-xl border p-6 text-center">
              <div className="text-3xl font-bold">{i.k}</div>
              <div className="text-gray-600 mt-1">{i.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 合作伙伴（Logo 占位栅格） */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-8">合作伙伴</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-16 bg-gray-100 border rounded-lg flex items-center justify-center text-gray-400"
            >
              LOGO
            </div>
          ))}
        </div>
      </section>

      {/* 行动召唤 CTA */}
      <section className="text-center bg-gray-50 rounded-xl p-10">
        <h3 className="text-xl font-semibold mb-2">需要定制化方案？</h3>
        <p className="text-gray-600 mb-6">
          告诉我们你的载荷、行程、环境与工期需求，我们将为你评估与选型。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          联系我们
        </Link>
      </section>
    </div>
  );
}