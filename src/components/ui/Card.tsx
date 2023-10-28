import { For, createSignal } from "solid-js";

export interface CardProps {
  title: string;
  icon: (props: any) => any;
  description: string;
  iconText: string;
  details?: CardDetailsItem[] | string[];
  detailsText?: string;
  price?: Price;
}

export type Price = { value: number; prefix: string };

export const Card = ({
  title,
  icon: Icon,
  description,
  iconText,
  details,
  detailsText,
  price,
}: CardProps) => {
  const [isRevealed, setIsRevealed] = createSignal(false);

  return (
    <div
      onClick={() => setIsRevealed((prev) => !prev)}
      class="rounded-xl bg-neutral-800/20 p-[1px] relative h-72 overflow-hidden before:absolute before:h-44 before:w-44 before:bg-white/40 before:rounded-full before:blur-2xl before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:left-[var(--mouse-x)] before:top-[var(--mouse-y)] shadow-2xl shadow-transparent hover:shadow-violet-400/10 will-change-transform group card cursor-pointer"
    >
      <div class="bg-neutral-900/80 rounded-xl h-full pointer-events-none relative">
        <span
          class={`absolute top-4 right-4 text-sm text-neutral-500 ${
            isRevealed() ? "opacity-0" : "opacity-0 group-hover:opacity-100"
          } transition-opacity duration-500`}
        >
          Click to reveal details
        </span>
        <div
          class={`${
            isRevealed() ? "-translate-y-72" : "translate-y-0"
          } transition-transform duration-500 absolute inset-6 flex flex-col justify-end`}
        >
          <div class="opacity-40 mb-6 flex items-center gap-10">
            {<Icon stroke-width={1} class="h-32 w-32 text-violet-200" />}
            <div class="rounded-xl p-3 text-4xl font-bold bg-gradient-to-t from-violet-400 to-amber-50 text-neutral-900 border border-neutral-100 shadow-sm group-hover:shadow-black group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
              {iconText}
            </div>
          </div>
          <h1 class="font-semibold mb-1.5">{title}</h1>
          <p class="text-sm text-neutral-500 leading-4">{description}</p>
        </div>
        <div
          class={`${
            isRevealed() ? "translate-y-0 scale-100" : "translate-y-72 scale-90"
          } transition-transform duration-500 absolute inset-6 flex flex-col`}
        >
          <h2 class="mb-4">{title}</h2>
          <div class="text-sm text-neutral-500">
            {detailsText ? <p class="mb-2">{detailsText}</p> : null}
            {details ? <CardDetails items={details} /> : null}
          </div>
          <span class="flex-1" />
          {price ? (
            <div class="flex justify-between items-end">
              <span class="desc-list-title overflow-hidden whitespace-nowrap text-sm text-neutral-500">
                {price.prefix}
              </span>
              <span class="shrink-0 text-lg font-semibold">${price.value}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export interface CardDetailsItem {
  name: string;
  value: string | number;
}

export const CardDetails = ({
  items,
}: {
  items: CardDetailsItem[] | string[];
}) => {
  return (
    <ul class={typeof items[0] === "string" ? "list-disc list-inside " : ""}>
      <For each={items}>
        {(item) => (
          <li class={typeof item === "string" ? "" : "flex justify-between"}>
            {typeof item === "string" ? (
              item
            ) : (
              <>
                <span class="desc-list-title overflow-hidden whitespace-nowrap">
                  {item.name}
                </span>
                <span class="shrink-0 text-neutral-300">{item.value}</span>
              </>
            )}
          </li>
        )}
      </For>
    </ul>
  );
};
