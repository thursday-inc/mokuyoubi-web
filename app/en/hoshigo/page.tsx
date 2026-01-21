import { Layout } from "../../components/Layout";
import { Section } from "../../components/Section";

export default function HoshigoPageEn() {
  return (
    <Layout>
      <h1 className="text-5xl font-bold text-center">Hoshigo</h1>
      <p className="mt-4 text-lg text-green-700/70 text-center leading-relaxed">
        A friendly Go game app that anyone can enjoy.
      </p>

      <Section title="🎮 Features">
        ・Simple UI
        <br />
        ・Quick matches
        <br />
        ・Mobile-friendly
      </Section>

      <Section title="🌱 Current MVP">
        Hoshigo is currently in its MVP stage.
        <br />
        We will gradually add more features in the future.
      </Section>

      <footer className="mt-14 text-sm text-green-700/60 text-center">
        <a href="/en/privacy" className="hover:text-green-800 transition">
          Privacy Policy
        </a>
        <span className="mx-2">|</span>
        <a href="/en/terms" className="hover:text-green-800 transition">
          Terms of Service
        </a>
      </footer>
    </Layout>
  );
}
