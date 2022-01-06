import Flex from "@react-css/flex";

import activeViewStore from "../../Shared/Store/activeViewStore";
import "./About.css";
import gina from "../../img/gina.png";
import kryuger from "../../img/Kryuger.png";

export default function About() {
  const setActiveView = activeViewStore((state) => state.setActiveView);
  setActiveView("About");

  return (
    <div>
      <div className="card m-3">
        <div className="card-body">
          <h2 className="card-title">About</h2>
          <Flex column gap={20}>
            <Flex row>
              <img
                alt=""
                className="w-25"
                src="https://www.pharmaceutical-technology.com/wp-content/uploads/sites/10/2018/05/1l-image-WuXi-Biologics-Drug-Substance-Manufacturing-Facility-800x600.jpg"
              />
              <div className="about-text">
                <h4>Delta pharmaceuticals</h4>
                <Flex column gap={20}>
                  <span>
                    Delta pharmaceuticals Corp. is a government funded
                    biological research institude pioneering revolutionary and
                    scientific medical developments to enchance human evolution.
                    From vaccines to medical equipments, Delta pharmaceuticals
                    aim to drive innovation and ground breaking discoveries.
                    Delta pharmaceuticals Corp. is located in Fukushima, Japan
                    with over 10000 staffs employed.
                  </span>
                  <span>
                    With the rise of the type 2 variant of the Gina virus, Delta
                    pharmaceuticals paves way for the new frontier of vaccines
                    to combat its spread and fatality.
                  </span>
                </Flex>
              </div>
            </Flex>
            <Flex row>
              <div className="about-text">
                <h4>Founder</h4>
                <span>
                  Delta pharmaceuticals was founded in 1985 by senior researcher
                  Dr. Berezovich Kryuger. when developing a vaccine for the type
                  1 Gina virus with the assistance of Sagittarius Labs and
                  Archimedes Frontier. Kryger is a former researcher in Makrov
                  Russian National Research Medical University and developed a
                  cure for Polio and AIDS (Acquired Immunodefeciency Syndrome)
                  and won numerous nobel prizes for his contributions to modern
                  medicine.
                </span>
              </div>
              <div className="w-25">
                <div className="w-75 mx-auto">
                  <img alt="" src={kryuger} className="w-100" />
                </div>
              </div>
            </Flex>
            <Flex row>
              <img alt="" src={gina} style={{ width: "18vw" }} />
              <div className="about-text">
                <h4>Gina Virus</h4>
                <span>
                  The Gina Virus is a potent biological agent capable of
                  replication within hosts. Symptoms include fever, rash. In
                  later stages of infection, internal bleeding which can lead to
                  hypoxia and eventually death. Type 1 Gina virus ravaged the
                  outskirts of Russia and was contained by Russian authorities.
                  However, workers started feeling its symptoms after 2 weeks
                  incubation which led to an extensive research to develop a
                  cure to combat the disease. The research was led by Delta
                  Pharmaceuticals and its partnerships with Sagittarius Labs and
                  Archimedes Frontier. After the first vaccine rollout for Type
                  1 Gina virus, a new variant of the disease emerged as Type 2
                  with even more severe symptoms which includes loss of breath,
                  muscle fatigue which can progress into paralysis and
                  eventually patients can fall into coma and eventually, death.
                </span>
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
}
