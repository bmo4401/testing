import dynamic from 'next/dynamic';

const MyLineChart = dynamic(() => import('@/app/MyLineChart'), {
  ssr: false, // Prevent server-side rendering for this dynamic import
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*   <MyLineChart /> */}
      <iframe
        data-tf-redirect-target="_self"
        src="https://dev-vdc-dashboard.navercorp.com/workspaces/12"
        height={600}
        width={600}

        /*         sandbox="allow-top-navigation allow-scripts allow-forms allow-same-origin"
         */
      ></iframe>
      <iframe
        data-tf-redirect-target="_self"
        src="https://zing-mp3-clone-eta.vercel.app"
        height={600}
        width={600}

        /*         sandbox="allow-top-navigation allow-scripts allow-forms allow-same-origin"
         */
      ></iframe>
    </main>
  );
}
