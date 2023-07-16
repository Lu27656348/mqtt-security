import React from "react";
import Lectores from "@/components/Lectores";
import Estadisticas from "@/components/Estadisticas";

export function Home() {

  
  return (
    <div className="mt-12">
      <Estadisticas />
      <Lectores  />
    </div>
  );
}

export default Home;

    