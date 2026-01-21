import { Layout } from "../components/Layout";
import { Section } from "../components/Section";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center">プライバシーポリシー</h1>
      <p className="mt-8 text-green-700/80 leading-relaxed">
        本プライバシーポリシーは、囲碁アプリ「星碁（ほしご）」
        （以下「本アプリ」）における、ユーザー情報の取り扱いについて
        定めるものです。
      </p>

      <Section title="1. 取得する情報">
        本アプリでは、以下の情報を取得する場合があります。<br />
        ・アカウント登録時に提供される情報（メールアドレス等）<br />
        ・アプリの利用状況に関する情報（対局結果、操作履歴など）
      </Section>

      <Section title="2. 利用目的">
        取得した情報は、以下の目的で利用します。<br />
        ・本アプリの提供および運営のため<br />
        ・不具合対応やサービス品質向上のため<br />
        ・不正利用防止およびセキュリティ確保のため
      </Section>

      <Section title="3. 第三者提供">
        法令に基づく場合を除き、本人の同意なく
        第三者に個人情報を提供することはありません。
      </Section>

      <Section title="4. 外部サービスの利用">
        本アプリでは、サービス提供のために
        外部のクラウドサービスを利用する場合があります。<br />
        これらのサービスにおいても、取得した情報は適切に管理されます。
      </Section>

      <Section title="5. 情報の管理">
        取得した情報は、適切な方法で管理し、
        不正アクセス、漏洩、改ざん等の防止に努めます。
      </Section>

      <Section title="6. ユーザー情報の削除">
        ユーザーは、アプリ内の手続きまたはお問い合わせを通じて、
        自身のアカウントおよび関連する情報の削除を申請することができます。<br />
        削除申請が行われた情報は、法令上保存が必要な場合を除き、
        一定期間経過後に削除されます。
      </Section>

      <Section title="7. プライバシーポリシーの変更">
        本ポリシーは、必要に応じて変更されることがあります。
        変更後の内容は、本ページにて公表します。
      </Section>

      <Section title="8. お問い合わせ">
        本プライバシーポリシーに関するお問い合わせは、以下までご連絡ください。<br />
        メールアドレス：support@mokuyoubi.org<br />
        運営者：mokuyoubi.org
      </Section>
    </Layout>
  );
}
