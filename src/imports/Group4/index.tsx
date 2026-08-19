function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] items-start justify-center left-0 px-[10px] py-[20px] top-0 w-[390px]">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Berthold_Akzidenz_Grotesk_BE:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a6c74] text-[14px] tracking-[1px] uppercase w-full">leadership</p>
      <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Berthold_Akzidenz_Grotesk_BE:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a6c74] text-[14px] tracking-[1px] uppercase w-full">Senior Associates</p>
      <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Berthold_Akzidenz_Grotesk_BE:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6a6c74] text-[14px] tracking-[1px] uppercase w-full">Associates</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="contents relative size-full">
      <Frame />
    </div>
  );
}