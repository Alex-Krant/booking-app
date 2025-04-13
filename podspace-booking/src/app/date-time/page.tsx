import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DateTimeSelection } from "@/components/booking/date-time-selection";
import { StudioStepsNavigation } from "@/components/booking/studio-steps-navigation";

export default function DateTimePage({
  searchParams
}: {
  searchParams: { formula?: string, studio?: string }
}) {
  return (
    <>
      <Header />
      <div className="flex-1">
        <StudioStepsNavigation currentStep={3} />
        <DateTimeSelection
          selectedFormula={searchParams.formula || ""}
          selectedStudio={searchParams.studio || ""}
        />
      </div>
      <Footer />
    </>
  );
}
