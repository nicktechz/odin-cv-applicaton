import "../styles/components/Builder.css";
import Configurator from "./Configurator";
import Cv from "./Cv";
export default function Builder() {
  return (
    <section className="builder">
      <Configurator />
      <Cv />
    </section>
  );
}
