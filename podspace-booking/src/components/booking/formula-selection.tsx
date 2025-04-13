import { Button } from "@/components/ui/button";
import Link from "next/link";

// This would typically come from an API/database
const formulas = [
  {
    id: "premium-plus",
    name: "Premium+",
    price: 420,
    description: "Our most comprehensive package with full editing services",
    features: [
      "Brief reception",
      "Complete footage review",
      "2 revisions included",
      "Delivery within 5 business days",
      "Podcast export in WAV format",
      "Color correction",
      "Audio enhancement",
      "Dynamic introduction",
      "Dynamic intro text",
      "Text overlay design",
      "Introduction sound design",
    ],
    isPopular: true,
    label: "Full editing",
  },
  {
    id: "advanced",
    name: "Advanced",
    price: 200,
    description: "Pre-editing services for podcast creators",
    features: [
      "On-site operator",
      "Episode pre-editing (horizontal format)",
      "Audio synchronization",
      "Delivery of raw camera footage",
      "File reception within 48h to 72h business hours",
      "Automatic file backup for 14 days",
    ],
    isPopular: false,
    label: "Pre-editing",
  },
  {
    id: "subscription",
    name: "Subscription",
    price: 650,
    description: "Monthly subscription with unlimited studio access (subject to availability)",
    features: [
      "Unlimited studio access (subject to availability)",
      "On-site technical support",
      "10% Discounts on additional services (Full editing…)",
      "File storage space",
      "Priority booking access",
      "3-month commitment",
    ],
    isPopular: false,
    label: "Limited launch offer",
    isSubscription: true,
  },
];

export function FormulaSelection() {
  return (
    <div className="max-w-[1300px] mx-auto p-6 py-0">
      <div className="flex items-start relative">
        <div className="flex-1 py-6 lg:border-r lg:pr-8">
          <div className="mb-12">
            <div>
              <div className="flex flex-col-reverse lg:flex-row gap-4 justify-between items-start">
                <div className="mb-8 max-w-xl">
                  <h1 className="text-2xl font-bold mb-2">Choose your formula</h1>
                  <p>We offer different services to suit your needs.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 w-full lg:mt-0 mt-6 mb-6">
                {formulas.map((formula) => (
                  <div
                    key={formula.id}
                    className={`md:w-1/2 relative flex border max-w-[800px] rounded-[8px] transition-all hover:shadow-lg ${
                      formula.isPopular
                        ? "bg-gradient-to-b hover:from-orange-500/5 to-transparent border-orange-500 shadow-orange-500"
                        : "hover:border-black/20 hover:bg-[rgba(248,248,248)]"
                    }`}
                  >
                    {formula.isPopular && (
                      <div className="bg-orange-500 inline-flex gap-1 items-center text-white absolute rounded-t top-[-26px] lg:-rotate-90 lg:top-40 h-[26px] lg:-left-[26px] lg:right-auto right-4 origin-top-left text-sm px-1.5">
                        Best option
                      </div>
                    )}
                    <div className="flex flex-col gap-8 p-6 w-full">
                      <div>
                        <h2 className="font-bold">{formula.name}</h2>
                        <p className="text-sm flex flex-wrap gap-2">
                          <span className="flex items-center gap-2">
                            <span className="font-semibold inline-flex flex-row-reverse">
                              {formula.price}
                              <span>$</span>
                            </span>
                          </span>
                          {formula.isSubscription ? " per month" : " per hour"} (Incl. VAT) *
                        </p>
                        <div className={`${formula.label === "Limited launch offer" ? "mt-2 inline-flex justify-center whitespace-nowrap rounded-full px-2 py-1 text-xs font-medium text-white bg-purple-600" : "bg-black text-white inline-block px-2 py-1 rounded-full text-xs mt-2"}`}>
                          {formula.label}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold mb-2">Included</h3>
                        <ul className="grid sm:grid-cols-1 gap-3">
                          {formula.features.map((feature, index) => (
                            <li key={index}>
                              {!formula.isSubscription && (
                                <div className="bg-black w-1 h-1 rounded-full inline-block mb-1 mr-2"></div>
                              )}
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        className={`text-sm md:text-md mt-auto p-3 ${
                          formula.isSubscription
                            ? "w-full"
                            : ""
                        } bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-white border border-orange-500/20 transition-all`}
                        asChild
                      >
                        {formula.isSubscription ? (
                          <a
                            href="https://buy.stripe.com/6oEg234id0llcYo000"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Subscribe
                          </a>
                        ) : (
                          <Link href={`/studios?formula=${formula.id}`}>
                            Choose this formula
                          </Link>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-sm">
                Price valid excluding weekends. On Saturday and Sunday, a 20% surcharge is applied.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
