export const metadata = {
  title: "利用規約 | 星碁",
};

import { Layout } from "../components/Layout";
import { Section } from "../components/Section";

export default function TermsPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center">利用規約</h1>

      <p className="mt-8 text-green-700/80 leading-relaxed">
        本利用規約（以下「本規約」）は、
        囲碁アプリ「星碁（ほしご）」（以下「本アプリ」）の
        利用条件を定めるものです。
        <br />
        ユーザーは、本規約に同意した上で、 本アプリを利用するものとします。
      </p>

      <Section title="1. サービス内容">
        本アプリは、囲碁の対局を楽しむためのサービスです。
        <br />
        本アプリは現在、MVP（最小構成）として提供されており、
        機能や内容は予告なく変更される場合があります。
      </Section>

      <Section title="2. 利用条件">
        ユーザーは、自己の責任において 本アプリを利用するものとします。
      </Section>

      <Section title="3. 禁止事項">
        ユーザーは、以下の行為を行ってはなりません。
        <br />
        ・法令または公序良俗に反する行為
        <br />
        ・不正な目的での利用
        <br />
        ・本アプリの運営を妨げる行為
        <br />
        ・他のユーザーに不利益や不快感を与える行為
        <br />
        ・不正アクセスやデータ改ざん等の行為
      </Section>

      <Section title="4. アカウント管理">
        ユーザーは、自身のアカウント情報を適切に管理する責任を負うものとします。
        <br />
        アカウントの不正利用によって生じた損害について、
        運営者は責任を負いません。
      </Section>

      <Section title="5. 免責事項">
        本アプリは、現状のまま提供されます。
        <br />
        本アプリの利用により生じた 直接的または間接的な損害について、
        運営者は一切の責任を負いません。
        <br />
        また、本アプリの不具合、停止、データ消失等についても、
        運営者は責任を負いません。
      </Section>

      <Section title="6. サービスの変更・終了">
        運営者は、ユーザーへの事前通知なく、
        本アプリの内容を変更、または提供を終了することがあります。
      </Section>

      <Section title="7. 利用停止・削除">
        ユーザーが本規約に違反した場合、
        運営者は、事前通知なく本アプリの利用を停止、
        またはアカウントを削除することがあります。
      </Section>

      <Section title="8. 規約の変更">
        本規約は、必要に応じて変更されることがあります。
        <br />
        変更後の規約は、本ページにて公表された時点で 効力を生じるものとします。
      </Section>

      <Section title="9. 準拠法">
        本規約は、日本法に準拠し、解釈されるものとします。
      </Section>

      <Section title="10. お問い合わせ">
        本規約に関するお問い合わせは、以下までご連絡ください。
        <br />
        メールアドレス：support@mokuyoubi.org
        <br />
        運営者：mokuyoubi.org
      </Section>
    </Layout>
  );
}
