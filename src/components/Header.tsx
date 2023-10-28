import Type from "@/components/ui/Type";

export default function Header() {
  return <>
    <h1 class="text-2xl relative w-fit">
      <Type wait={3000} text="Hi, new developers!" />
    </h1>
    <p class="text-sm text-neutral-500 animate-show mb-10">
      Here are the details on our plan.
    </p>
  </>
}