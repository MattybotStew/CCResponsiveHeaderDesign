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
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#404f5e] text-[16px] w-[228px]" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
        <p className="leading-[1.2]">
          hover for drop down menu item
          <br aria-hidden />
          font weight change to Bold
        </p>
      </div>
    </div>
  );
}