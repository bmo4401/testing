import dynamic from 'next/dynamic';

const MyLineChart = dynamic(() => import('@/app/MyLineChart'), {
  ssr: false, // Prevent server-side rendering for this dynamic import
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyLineChart />
    </main>
  );
}
