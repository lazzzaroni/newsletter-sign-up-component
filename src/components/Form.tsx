import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";

const list = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

const mailSchema = z.object({
  mail: z.string().email({ message: "Valid email required" }),
});

export type Mail = z.infer<typeof mailSchema>;

export default function Form({ onSubmit }: { onSubmit: SubmitHandler<Mail> }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Mail>({
    resolver: zodResolver(mailSchema),
  });

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
              srcSet="/newsletter-sign-up-component/illustration-sign-up-desktop.svg"
            />
            <img
              src="/newsletter-sign-up-component/illustration-sign-up-mobile.svg"
              alt="Illustration"
              className="h-auto w-full"
            />
          </picture>
        </div>
      </div>
      <div
        className={cn(
          "w-full p-6 text-neutral-dark-slate-grey",
          "lg:pl-16 lg:pr-10 lg:pt-20"
        )}
      >
        <h1 className={cn("py-4 text-4xl font-semibold", "lg:text-6xl")}>
          Stay updated!
        </h1>
        <p className="py-2">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="flex flex-col gap-2.5 py-4">
          {list.map((item) => (
            <li className="flex gap-4" key={item[0]}>
              <Image
                width={0}
                height={0}
                src="/newsletter-sign-up-component/icon-success.svg"
                alt=""
                className={cn("h-5 w-5")}
              />
              {item}
            </li>
          ))}
        </ul>
        <form className="pt-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-2 flex justify-between text-xs font-semibold">
              <label htmlFor="mail" className="">
                Email address
              </label>
              {errors.mail?.message && (
                <span className="text-primary-tomato">
                  {errors.mail?.message}
                </span>
              )}
            </div>
            <input
              id="mail"
              type="text"
              placeholder="email@company.com"
              className={cn(
                "block w-full rounded-lg border px-6 py-4 text-inherit",
                {
                  "bg-primary-tomato/25 text-primary-tomato":
                    errors.mail?.message,
                }
              )}
              {...register("mail")}
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-neutral-dark-slate-grey py-4 font-normal text-white hover:bg-gradient-to-r hover:from-primary-tomato/80 hover:to-primary-tomato hover:drop-shadow-2xl focus:outline-none focus:ring-1 focus:ring-primary-tomato"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </section>
  );
}
