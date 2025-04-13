import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { addDays, format, isToday, isBefore, startOfDay } from "date-fns";

interface DateTimeSelectionProps {
  selectedFormula: string;
  selectedStudio: string;
}

// Available time slots (would typically come from API)
const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00", "18:00"
];

// Mock function to determine if a time slot is available
// In a real app, this would check against booked slots in the database
function isTimeSlotAvailable(date: Date, time: string): boolean {
  // Just for demo purposes, make some slots unavailable
  const dateString = format(date, "yyyy-MM-dd");
  const randomUnavailable = `${dateString}-${time}` === `${format(new Date(), "yyyy-MM-dd")}-11:00`
    || `${dateString}-${time}` === `${format(new Date(), "yyyy-MM-dd")}-14:00`
    || `${dateString}-${time}` === `${format(addDays(new Date(), 1), "yyyy-MM-dd")}-10:00`;

  return !randomUnavailable;
}

// Gets the price with weekend surcharge if applicable
function getPriceWithSurcharge(basePrice: number, date: Date): number {
  const day = date.getDay();
  const isWeekend = day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  return isWeekend ? basePrice * 1.2 : basePrice;
}

export function DateTimeSelection({ selectedFormula, selectedStudio }: DateTimeSelectionProps) {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(today);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Simulated base price (would come from the selected formula in a real app)
  const basePrice = selectedFormula === "premium-plus" ? 420 : 200;
  const priceWithSurcharge = selectedDate ? getPriceWithSurcharge(basePrice, selectedDate) : basePrice;

  return (
    <div className="max-w-[1300px] mx-auto p-6 py-0">
      <div className="flex flex-col lg:flex-row gap-6 py-6">
        <div className="w-full lg:w-2/3">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Select Date and Time</h1>
            <p>Choose when you'd like to book the studio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-4">
              <h2 className="text-lg font-semibold mb-4">Date</h2>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => isBefore(date, startOfDay(today))}
                className="rounded-md border"
              />
            </Card>

            <Card className="p-4">
              <h2 className="text-lg font-semibold mb-4">Time</h2>
              {selectedDate ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {timeSlots.map((time) => {
                    const isAvailable = isTimeSlotAvailable(selectedDate, time);
                    return (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className={`
                          ${selectedTime === time ? "bg-orange-500 hover:bg-orange-600 text-white" : ""}
                          ${!isAvailable ? "opacity-50 cursor-not-allowed" : ""}
                        `}
                        onClick={() => isAvailable && setSelectedTime(time)}
                        disabled={!isAvailable}
                      >
                        {time}
                      </Button>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-4 text-gray-500">
                  Please select a date first
                </div>
              )}
            </Card>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Your Booking Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Formula:</span>
                <span className="font-medium">{selectedFormula.replace(/-/g, ' ')}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Studio:</span>
                <span className="font-medium">{selectedStudio.replace(/-/g, ' ')}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">
                  {selectedDate ? (
                    <>
                      {format(selectedDate, "EEEE, MMMM d, yyyy")}
                      {isToday(selectedDate) && " (Today)"}
                    </>
                  ) : (
                    "Not selected"
                  )}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">{selectedTime || "Not selected"}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">1 hour</span>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base price:</span>
                  <span className="font-medium">${basePrice.toFixed(2)}</span>
                </div>

                {selectedDate && (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) && (
                  <div className="flex justify-between text-orange-500">
                    <span>Weekend surcharge (20%):</span>
                    <span>${(basePrice * 0.2).toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between mt-2 font-bold">
                  <span>Total price:</span>
                  <span>${priceWithSurcharge.toFixed(2)}</span>
                </div>
              </div>

              <Button
                className="w-full mt-4 bg-orange-500 hover:bg-orange-600"
                disabled={!selectedDate || !selectedTime}
                asChild
              >
                <Link
                  href={`/services?formula=${selectedFormula}&studio=${selectedStudio}&date=${selectedDate?.toISOString()}&time=${selectedTime}`}
                >
                  Continue to Services
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
