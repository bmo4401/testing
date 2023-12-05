import dynamic from 'next/dynamic';
import Link from 'next/link';

const MyLineChart = dynamic(() => import('@/app/MyLineChart'), {
  ssr: false, // Prevent server-side rendering for this dynamic import
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*   <MyLineChart /> */}
      <iframe
        id="idFrame"
        title="Widex Moment Application"
        allow="geolocation; microphone; camera"
        src="https://dev-vdc-dashboard.navercorp.com/workspaces/12"
        width={600}
        height={600}
        sandbox="allow-forms allow-scripts allow-top-navigation allow-same-origin"
      ></iframe>
      <Link
        href={'https://dev-vdc-dashboard.navercorp.com/workspaces/12'}
        target="idFrame"
      >
        Click
      </Link>
    </main>
  );
}
