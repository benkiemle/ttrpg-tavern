import Link from "next/link";

export default function Foo() {
    return (
        <div>
            <h1>Foo</h1>
            <p>
                This is <code>pages/foo/index.tsx</code>.
            </p>
            <p>
                Check out <Link href="/foo/bar">bar</Link>.
            </p>
            <div></div>
        </div>
    );
}