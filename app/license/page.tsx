"use client";

import { useState } from "react";

export default function LicensePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* タイトル */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Open Source Licenses
        </h1>

        {/* 説明 */}
        <p className="text-gray-700 mb-2">
          このアプリはオープンソースソフトウェアを利用しています。
        </p>
        <p className="text-sm text-gray-500 mb-8">
          ※ WGo ライブラリ（web_test/wgo/）は本アプリには含まれていません。
        </p>

        {/* Accordion ヘッダー */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg px-4 py-3 text-left font-semibold text-gray-800 flex justify-between items-center"
        >
          <span>goscorer - MIT License</span>
          <span className="text-gray-500">{open ? "▲ 閉じる" : "▼ 開く"}</span>
        </button>

        {/* Accordion 中身 */}
        {open && (
          <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                <strong>goscorer</strong> - 囲碁の終局判定・得点計算ライブラリ
              </p>
              <a
                href="https://github.com/lightvector/goscorer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                https://github.com/lightvector/goscorer
              </a>
            </div>
            <pre className="text-xs leading-relaxed text-gray-700 whitespace-pre-wrap font-mono">
              {`MIT License

Copyright 2024 David J Wu ("lightvector").

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
