'use client'
import Link from "next/link";
import useSWR from "swr";

async function fetcher(url: string) {
  const resp = await fetch(url);
  return resp.text();
}

export default function Page() {
  const { data, error } = useSWR("/api", fetcher, { refreshInterval: 1000 });
  
  return (
     <div>
      <h1>Hello, world!</h1>
      <p>This is <code>pages/index.tsx</code>.</p>
      <p>Check out <Link href="/foo">foo</Link>.</p>

      <h2>Memory allocation stats from Go server</h2>
      {error && <p>Error fetching profile: <strong>{error}</strong></p>}
      {!error && !data && <p>Loading ...</p>}
      {!error && data && <pre>{data}</pre>}
    </div>
  );
}
