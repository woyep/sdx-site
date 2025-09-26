"use client";

import { useEffect, useRef, useState } from "react";

export default function QuoteDialog({
  buttonClass = "bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition",
  buttonText = "获取报价",
}: {
  buttonClass?: string;
  buttonText?: string;
}) {
  const [open, setOpen] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // 打开后把焦点放到第一个输入框（无障碍&体验）
  useEffect(() => {
    if (open) firstFieldRef.current?.focus();
  }, [open]);

  // 点击蒙层关闭
  function onBackdropMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) setOpen(false);
  }

  // Esc 关闭
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* 触发按钮（放在导航右侧） */}
      <button
        type="button"
        className={buttonClass}
        onClick={() => setOpen(true)}
      >
        {buttonText}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-title"
          onMouseDown={onBackdropMouseDown}
        >
          <div
            className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 id="quote-title" className="text-lg font-semibold">
                获取报价
              </h2>
              <button
                aria-label="关闭"
                className="p-1 rounded hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* 阶段1：先用 mailto 占位；阶段2可换成 /api/quote 或 Formspree */}
            <form
              className="space-y-4"
              method="POST"
              action={`mailto:sales@your-company.com`}
              encType="text/plain"
              onSubmit={() => setTimeout(() => setOpen(false), 300)} // 简单关闭
            >
              <div>
                <label className="block text-sm mb-1">姓名</label>
                <input
                  ref={firstFieldRef}
                  name="姓名"
                  required
                  className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">电话</label>
                  <input
                    name="电话"
                    required
                    className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">邮箱（可选）</label>
                  <input
                    type="email"
                    name="邮箱"
                    className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">需求简述</label>
                <textarea
                  name="需求简述"
                  rows={4}
                  placeholder="例如：风电提升机，额定载荷1t，提升高度80m，交期需求……"
                  className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded border hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  提交
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-3">
              我们通常会在 1 个工作日内联系你。
            </p>
          </div>
        </div>
      )}
    </>
  );
}
