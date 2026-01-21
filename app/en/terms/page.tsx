export const metadata = {
  title: "Terms of Service | Hoshigo",
};

import { Layout } from "../../components/Layout";
import { Section } from "../../components/Section";

export default function TermsPageEn() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center">Terms of Service</h1>

      <p className="mt-8 text-green-700/80 leading-relaxed">
        These Terms of Service (hereinafter "Terms") define the conditions for using
        the Go game app "Hoshigo" (hereinafter "the App").
        <br />
        Users agree to these Terms when using the App.
      </p>

      <Section title="1. Service Description">
        The App provides a service to enjoy Go matches.
        <br />
        The App is currently offered as an MVP (Minimum Viable Product),
        and features or content may change without prior notice.
      </Section>

      <Section title="2. Conditions of Use">
        Users are responsible for using the App at their own risk.
      </Section>

      <Section title="3. Prohibited Actions">
        Users must not engage in the following actions:
        <br />
        ・Acts that violate laws or public order and morals
        <br />
        ・Use for illegal purposes
        <br />
        ・Interfering with the operation of the App
        <br />
        ・Causing disadvantage or discomfort to other users
        <br />
        ・Unauthorized access or data tampering
      </Section>

      <Section title="4. Account Management">
        Users are responsible for properly managing their account information.
        <br />
        The operator is not responsible for damages caused by unauthorized use of accounts.
      </Section>

      <Section title="5. Disclaimer">
        The App is provided as-is.
        <br />
        The operator is not responsible for any direct or indirect damages arising from the use of the App.
        <br />
        The operator is also not responsible for malfunctions, downtime, or data loss.
      </Section>

      <Section title="6. Changes or Termination of Service">
        The operator may change or terminate the service without prior notice to users.
      </Section>

      <Section title="7. Suspension or Deletion of Accounts">
        If users violate these Terms, the operator may suspend access or delete accounts without prior notice.
      </Section>

      <Section title="8. Changes to Terms">
        These Terms may be updated as necessary.
        <br />
        Updated Terms take effect when published on this page.
      </Section>

      <Section title="9. Governing Law">
        These Terms are governed by and construed in accordance with Japanese law.
      </Section>

      <Section title="10. Contact">
        For inquiries regarding these Terms, please contact:
        <br />
        Email: support@mokuyoubi.org
        <br />
        Operator: mokuyoubi.org
      </Section>
    </Layout>
  );
}
