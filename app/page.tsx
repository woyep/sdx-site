import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
 {/* Hero 区 */}
       <section className="text-center py-20 rounded-lg">
        {/* Hero 图片 */}
      <div className="relative w-full h-[600px] bg-gray-200 rounded-md flex items-center justify-center">
  <span className="text-gray-500 text-xl">占位图</span>
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
    <h1 className="text-4xl font-bold text-white">圣德信轻型起重设备</h1>
    <p className="text-lg text-gray-200 mt-4">
      专注于风电提升机、海上平台吊机、KBK 轻型起重系统的研发与制造
    </p>
  </div>
</div>
          <div className="flex justify-center gap-6 mt-6">
            <Link href="/about"    className="btn btn-outline">关于我们</Link>
            <Link href="/products" className="btn btn-primary">产品中心</Link>
            <Link href="/contact"  className="btn btn-outline">联系我们</Link>
           </div>
      </section>
  
      {/* 三块内容区 */}
      <section className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <Image
            src="/placeholder.png"
            alt="风电提升机"
            width={300}
            height={200}
            className="mx-auto rounded-md"
          />
          <h2 className="text-xl font-semibold mt-4">风电提升机</h2>
          <p className="text-gray-600 mt-2">
            高效安全的风电运维提升方案，广泛应用于国内外风场。
          </p>
        </div>

        <div className="text-center">
          <Image
            src="/placeholder.png"
            alt="海上平台吊机"
            width={300}
            height={200}
            className="mx-auto rounded-md"
          />
          <h2 className="text-xl font-semibold mt-4">海上平台吊机</h2>
          <p className="text-gray-600 mt-2">
            自主研发的海上平台吊机，具备多段速控制与安全保护。
          </p>
        </div>

        <div className="text-center">
          <Image
            src="/placeholder.png"
            alt="KBK 系统"
            width={300}
            height={200}
            className="mx-auto rounded-md"
          />
          <h2 className="text-xl font-semibold mt-4">KBK 轻型起重系统</h2>
          <p className="text-gray-600 mt-2">
            灵活模块化设计，适合车间生产线和物料搬运。
          </p>
        </div>
      </section>
      
    </div>
  );
}
