export default function Contact() {
  return (
    <div className="max-w-xl mx-auto">
      <h1>联系我们</h1>
      <div className="hr" />
      <form className="space-y-3">
        <input className="w-full border rounded-lg p-2" placeholder="您的姓名" required />
        <input type="email" className="w-full border rounded-lg p-2" placeholder="邮箱" required />
        <textarea className="w-full border rounded-lg p-2 h-32" placeholder="留言内容" required />
        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition" type="button">
          发送（占位）
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4">电话：0335-5185656 ｜ 邮箱：info@shengdexin.com</p>
    </div>
  );
}