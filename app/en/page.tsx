"use client";

import { Layout } from "../components/Layout";
import { useRouter } from "next/navigation";

export default function HomeEN() {
  const router = useRouter();

  return (
    <Layout>
      {/* 言語切り替えボタン */}
      <div className="flex justify-end gap-4 mb-8">
        <button
          className="px-4 py-2 rounded bg-green-800/10 text-green-800 hover:bg-green-800/20 transition"
          onClick={() => router.push("/")} // 日本語トップへ遷移
        >
          日本語
        </button>
        <button
          className="px-4 py-2 rounded bg-green-800/10 text-green-800 hover:bg-green-800/20 transition"
          onClick={() => router.push("/en")} // 英語トップへ遷移
        >
          English
        </button>
      </div>

      <h1 className="text-5xl font-bold text-green-800">mokuyoubi.org</h1>

      <p className="mt-4 text-lg text-green-700/70">
        A small team making apps and services.
      </p>

      <a
        href="/en/hoshigo"
        className="inline-block mt-10 px-8 py-3 rounded-full bg-green-800/10 text-green-800 hover:bg-green-800/20 transition"
      >
        ▶ See our products
      </a>
    </Layout>
  );
}
