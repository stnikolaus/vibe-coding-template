export default function DashboardPage() {
  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium mb-6">Dashboard</h1>
      <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto text-center">
        <p className="text-gray-700">
          Welcome to your dashboard! This is what users will see when they login.
        </p>
      </div>
    </section>
  );
}
