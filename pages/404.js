import Link from "next/link";

export default function Notfound() {
  return (
    <div id="notfound-body">
      <div>
        <h3>Oops</h3>
        <h1>404</h1>
        <p>Page Not Found :(</p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
}
