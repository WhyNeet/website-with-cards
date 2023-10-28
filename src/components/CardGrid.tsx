import { Card } from "@/components/ui/Card";
import { cards } from "@/lib/cards";
import { For } from "solid-js";

export default function CardGrid() {
  return (
    <div class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      <For each={cards}>
        {({
          description,
          details,
          detailsText,
          icon,
          iconText,
          price,
          title,
        }) => (
          <Card
            icon={icon}
            description={description}
            details={details}
            detailsText={detailsText}
            iconText={iconText}
            price={price}
            title={title}
          />
        )}
      </For>
    </div>
  );
}
