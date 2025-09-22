import Hero from "../components/Hero";
import NursingServices from "../components/NursingServices";
import PhysiotherapyServices from "../components/PhysiotherapyServices";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <NursingServices />
      <PhysiotherapyServices />
    </div>
  );
};

export default Index;
