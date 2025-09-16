import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 shadow-xl">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-gold animate-pulse" />
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Próxima Prova
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="bg-gradient-primary text-primary-foreground rounded-lg p-3">
              <div className="text-3xl font-bold tabular-nums">{value.toString().padStart(2, "0")}</div>
            </div>
            <div className="text-xs text-muted-foreground mt-2 uppercase">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}