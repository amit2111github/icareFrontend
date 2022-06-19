import React from "react";
import { Doctor, dna, Doctor2, Hospital, Medicine, Bee } from "./imports";
import "./brand2.css";

const Brand = () => (
  <div className="gpt3__brand section__padding" id="hospitals">
    <div>
      <img src={Hospital} />
    </div>
    <div>
      <img src={Medicine} />
    </div>
    <div>
      <img src={Doctor} />
    </div>
    <div>
      <img src={Doctor2} />
    </div>
    <div>
      <img src={dna} />
    </div>
    <div>
      <img src={Bee} />
    </div>
  </div>
);

export default Brand;
