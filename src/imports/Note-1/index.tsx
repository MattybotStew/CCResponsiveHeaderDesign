function H2Tagline() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="H2-Tagline">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Red_Hat_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d3b6d] text-[24px] w-full">
        <p className="leading-[1.2]">Note</p>
      </div>
    </div>
  );
}

export default function Note() {
  return (
    <div className="bg-[#f6ff00] content-stretch flex flex-col gap-[13px] items-start justify-center p-[30px] relative size-full" data-name="Note">
      <H2Tagline />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#404f5e] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.2]">We love the square and expanded line in the selected state.</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.2]">{`We don't like the yellow side square option and would like to keep the square confined to the upper part of the nav bar.`}</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.2]">Could we lighten the font weight across the entire nav bar? Regular or demi would work well.</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[1.2]">For the hover state, rather than changing the color to black, could we just make the font bold? Same color, just heavier weight.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}