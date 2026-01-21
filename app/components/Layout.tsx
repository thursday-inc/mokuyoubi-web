export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-green-100 to-green-300 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full mx-auto px-6 py-16 text-green-800 text-center">
        {children}
      </div>
    </main>
  );
}
