import Image from "next/image";

import { cn } from "@/lib/utils";

export default function Success({
  email,
  onClick,
}: {
  email: string;
  onClick: () => void;
}) {
  return (
    <section
      className={cn(
        "flex h-[812px] w-[375px] flex-col justify-between bg-neutral-white p-6",
        "lg:h-[520px] lg:w-[504px] lg:rounded-3xl lg:px-16 lg:py-12"
      )}
    >
      <div className={cn("pt-32", "lg:p-0")}>
        <Image
          width={0}
          height={0}
          src="/newsletter-sign-up-component/icon-success.svg"
          alt=""
          className="h-16 w-16"
        />
        <h1
          className={cn(
            "pb-6 pt-10 text-4xl font-bold",
            "lg:text-6xl lg:leading-[0.95]"
          )}
        >
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to
          <span className="font-bold"> {email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>
      </div>
      <button
        onClick={onClick}
        className={cn(
          "mb-4 w-full rounded-lg bg-neutral-dark-slate-grey py-4 font-normal text-white hover:bg-gradient-to-r hover:from-primary-tomato/80 hover:to-primary-tomato hover:drop-shadow-2xl focus:outline-none focus:ring-1 focus:ring-primary-tomato"
        )}
      >
        Dismiss message
      </button>
    </section>
  );
}
