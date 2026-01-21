export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-green-800">{title}</h2>
      <div className="mt-4 text-green-700/80 leading-relaxed">{children}</div>
    </section>
  );
}
