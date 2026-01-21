import { Layout } from "../components/Layout";
import { Section } from "../components/Section";

export default function HoshigoPage() {
  return (
    <Layout>
      <h1 className="text-5xl font-bold text-center">星碁（ほしご）</h1>
      <p className="mt-4 text-lg text-green-700/70 text-center leading-relaxed">
        だれでも気軽に遊べる、
        <br />
        やさしい囲碁対局アプリ。
      </p>

      <Section title="🎮 特徴">
        ・シンプルなUI
        <br />
        ・すぐ対局できる
        <br />
        ・スマホで快適
      </Section>

      <Section title="🌱 現在MVP">
        星碁は現在MVPです。
        <br />
        今後、機能を少しずつ追加していきます。
      </Section>

      <footer className="mt-14 text-sm text-green-700/60 text-center">
        <a href="privacy" className="hover:text-green-800 transition">
          プライバシーポリシー
        </a>
        <span className="mx-2">|</span>
        <a href="terms" className="hover:text-green-800 transition">
          利用規約
        </a>
      </footer>
    </Layout>
  );
}
