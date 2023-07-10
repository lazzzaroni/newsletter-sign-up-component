import { cn } from "@/lib/utils";

export default function Container() {
  return (
    <section
      className={cn(
        "flex h-[842px] w-[375px] flex-col bg-neutral-white",
        "lg:h-[641px] lg:w-[928px] lg:flex-row-reverse lg:rounded-3xl"
      )}
    >
      <div className="lg:p-6">
        <div className="h-full w-auto rounded-xl lg:w-[400px]">
          <picture>
            <source
              media="(min-width:1024px)"
              srcSet="/illustration-sign-up-desktop.svg"
            />
            <img
              src="/illustration-sign-up-mobile.svg"
              alt="Illustration"
              className="h-auto w-full"
            />
          </picture>
        </div>
      </div>
      <div className="w-full lg:p-16">
        <h1>Stay updated!</h1>{" "}
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters </li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <label htmlFor="">
          Email address <input type="text" placeholder="email@company.com" />
        </label>
        <button>Subscribe to monthly newsletter</button>
      </div>
    </section>
  );
}
