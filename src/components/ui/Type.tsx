export interface TypeProps {
  text: string;
  wait: number;
}

const Type = ({ text, wait }: TypeProps) => {
  const chars = text.split("");
  const refs: HTMLSpanElement[] = [];
  let cursor: HTMLDivElement | undefined;

  setTimeout(() => {
    if (!cursor) return;

    const charWidth = refs[0].getBoundingClientRect().width;

    cursor.classList.remove("animate-blink");

    for (let i = 0; i < refs.length; i++) {
      setTimeout(() => {
        refs[i].classList.remove("opacity-0");
        cursor!.style.setProperty("--offset", charWidth * (i + 1) + "px");
      }, (i + 1) * 100);
    }
  }, wait);

  setTimeout(() => {
    if (!cursor) return;

    cursor.classList.add("animate-blink");
  }, wait + text.length * 100);

  return (
    <>
      {chars.map((char) => (
        <span ref={(el) => refs.push(el)} class="opacity-0">
          {char}
        </span>
      ))}
      <div
        class="w-[2px] absolute inset-y-0 left-[var(--offset)] bg-violet-500 animate-blink"
        ref={cursor}
      />
    </>
  );
};

export default Type;
