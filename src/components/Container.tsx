
import { cn } from "@/lib/utils";


export default function Container() {
  return (
    <section
      className={cn(
        "flex h-[842px] w-[375px] flex-col bg-neutral-white",
        "lg:h-[641px] lg:w-[928px] lg:rounded-3xl lg:flex-row"
      )}
    >
      <div className="w-full lg:p-16">
        <div className=" bg-neutral-grey lg:h-full"></div>
      </div>
      <div className="p-6">
        <div className="w-[400px] h-full bg-primary-tomato rounded-xl"></div>
      </div>
    </section>
  );
}
