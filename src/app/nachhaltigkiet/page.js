import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import React from "react";

const page = () => {
  return (
    <section className="nachhaltig_wrapper">
      <div className="container">
        <Breadcrumbs />
      </div>
      <div className="nachhaltig_main_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="nachhaltig_main_wrapper_heading">
                Wir schützen die Umwelt mit unserer Nachhaltigkeitsstrategie
              </p>
              <p className="nachhaltig_main_wrapper_para1">
                Ein sehr wichtiger Punkt unserer Nachhaltigkeitsstrategie ist
                es, dass wir auf einen neutralen CO₂-Recyclingprozess setzen.
                Dies bedeutet, dass wir CO₂-neutral arbeiten und dass durch den
                Schmelzvorgang CO₂-neutrales Goldes entsteht.
              </p>
            </div>
            <div className="col-12 col-md-6 nachhaltig_main_wrapper_column"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
