import React from "react";
import Link from "next/link";
import RouteCard from "../components/RouteCard";

function routes() {
  return (
    <div>
      <h1>Routes</h1>
      <Link href="/routes/lake-union-loop">
        <a style={{ textDecoration: "none" }}>
          <RouteCard
            routeName="Lake Union Loop"
            difficulty="Easy"
            distance="6.4"
            elevationGain="193"
            image="lakeunion2.jpg"
          />
        </a>
      </Link>
      <Link href="/routes/seward-park">
        <a style={{ textDecoration: "none" }}>
          <RouteCard
            routeName="Seward Park"
            difficulty="Moderate"
            distance="15.1"
            elevationGain="748"
            image="sewardpark3.jpg"
          />
        </a>
      </Link>
      <Link href="/routes/mercer-island-loop">
        <a style={{ textDecoration: "none" }}>
          <RouteCard
            routeName="Mercer Island Loop"
            difficulty="Hard"
            distance="25.1"
            elevationGain="1678"
            image="mercerisland2.jpg"
          />
        </a>
      </Link>
    </div>
  );
}

export default routes;
