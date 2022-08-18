import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const route = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Opp's...</h1>
      <h2>That page cannot be found!</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
