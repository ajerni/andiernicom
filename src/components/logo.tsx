import { Anton, Oswald } from "next/font/google";
import { cn } from "@/lib/utils";

const anton = Anton({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "600" });

// All internal sizing is in em so the wordmark scales from a single font-size
// set on the wrapper.
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex select-none flex-col items-stretch text-[28px] leading-none",
        className
      )}
    >
      <span className="flex items-center gap-[0.5em]">
        <Rule />
        <span
          className={cn(
            oswald.className,
            "whitespace-nowrap text-[0.26em] tracking-[0.32em]"
          )}
        >
          EST. 1976
        </span>
        <Rule />
      </span>

      <span
        className={cn(
          anton.className,
          "my-[0.1em] whitespace-nowrap text-center text-[1em] tracking-[0.01em]"
        )}
      >
        ANDIERNI.COM
      </span>

      <span className="mx-auto flex w-[82%] items-center gap-[0.5em]">
        <Rule />
        <span
          className={cn(
            oswald.className,
            "whitespace-nowrap text-[0.24em] tracking-[0.38em]"
          )}
        >
          PORTFOLIO
        </span>
        <Rule />
      </span>
    </span>
  );
}

function Rule() {
  return <span className="h-[0.1em] min-w-[0.6em] flex-1 bg-current" />;
}
