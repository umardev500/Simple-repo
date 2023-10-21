import { RepoListing } from "@/components/molecules";
import { useState } from "react";

export const RepoList = () => {
  const [data] = useState([
    {
      title: "pixel8Labs-api",
      desc: "Awesome Api from us for general development (all-at-once)",
    },
    {
      title: "QuantumCircuitSimulator-v1.6.x",
      desc: "A Python library for simulating and visualizing quantum circuits, perfect for learning and experimenting with quantum computing concepts.",
    },
    {
      title: "EcoFriendlyApp",
      desc: "An open-source mobile app encouraging eco-friendly habits! Track your carbon footprint, set sustainability goals, and contribute to a greener planet, one step at a time.",
    },
  ]);

  return (
    <div className="">
      {data.map((item, i) => {
        return <RepoListing title={item.title} desc={item.desc} key={i} />;
      })}
    </div>
  );
};
