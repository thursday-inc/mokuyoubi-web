import { Layout } from "../../components/Layout";
import { Section } from "../../components/Section";

export default function PrivacyPolicyPageEn() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
      <p className="mt-8 text-green-700/80 leading-relaxed">
        This Privacy Policy outlines how the Go game app "Hoshigo"
        (hereinafter "the App") handles user information.
      </p>

      <Section title="1. Information Collected">
        The App may collect the following information:<br />
        ・Information provided during account registration (email, etc.)<br />
        ・Information related to app usage (match results, operation history, etc.)
      </Section>

      <Section title="2. Purpose of Use">
        Collected information is used for the following purposes:<br />
        ・Providing and operating the App<br />
        ・Responding to issues and improving service quality<br />
        ・Preventing unauthorized use and ensuring security
      </Section>

      <Section title="3. Third-Party Disclosure">
        Except as required by law, personal information will not be provided to third parties without the user's consent.
      </Section>

      <Section title="4. Use of External Services">
        The App may use external cloud services to provide its features.<br />
        Any information collected is appropriately managed by these services as well.
      </Section>

      <Section title="5. Information Management">
        Collected information is properly managed to prevent unauthorized access, leakage, or tampering.
      </Section>

      <Section title="6. Deletion of User Information">
        Users may request the deletion of their account and related information via in-app procedures or by contacting support.<br />
        Requested information will be deleted after a certain period, except where retention is legally required.
      </Section>

      <Section title="7. Changes to Privacy Policy">
        This policy may be updated as necessary. Changes will be published on this page.
      </Section>

      <Section title="8. Contact">
        For inquiries regarding this Privacy Policy, please contact us at:<br />
        Email: support@mokuyoubi.org<br />
        Operator: mokuyoubi.org
      </Section>
    </Layout>
  );
}
