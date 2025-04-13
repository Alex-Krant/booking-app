import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FormulaSelection } from "@/components/booking/formula-selection";
import { StudioStepsNavigation } from "@/components/booking/studio-steps-navigation";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <StudioStepsNavigation currentStep={1} />
        <FormulaSelection />
      </div>
      <Footer />
    </>
  );
}
