import "./App.css";
import Award from "./Components/Award";
import Header from "./Components/Header";
import Trophy from "./Components/Trophy";
import EquipmentImage from '../src/assets/3.png';
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex flex-row items-start justify-center gap-32">
        <Trophy />
        <Award />
      </div>
      <div className="ml-5">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.{" "}
        </p>
      </div>
      <div className="mx-20">
        <img
          src={EquipmentImage}
          alt="all equipment image"
          style={{ height: "300px", width: "100%" }}
        />
        <figcaption className="text-center">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </figcaption>
      </div>
      <hr className=" my-5" style={{ height: "3px", background: "red" }} />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
