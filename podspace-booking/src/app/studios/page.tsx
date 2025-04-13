import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StudioSelection } from "@/components/booking/studio-selection";
import { StudioStepsNavigation } from "@/components/booking/studio-steps-navigation";

export default function StudiosPage({
  searchParams
}: {
  searchParams: { formula?: string }
}) {
  return (
    <>
      <Header />
      <div className="flex-1">
        <StudioStepsNavigation currentStep={2} />
        <StudioSelection selectedFormula={searchParams.formula || ""} />
      </div>
      <Footer />
    </>
  );
}
