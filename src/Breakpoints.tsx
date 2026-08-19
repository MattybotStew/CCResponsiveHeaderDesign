const breakpoints = [
  { label: "base (default, <640px)", width: 375 },
  { label: "sm — 640px", width: 640 },
  { label: "md — 768px", width: 768 },
  { label: "lg — 1024px", width: 1024 },
  { label: "xl — 1280px", width: 1280 },
  { label: "2xl — 1536px", width: 1536 },
];

export default function Breakpoints() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] py-10 px-5">
      <div className="max-w-[1720px] mx-auto mb-10">
        <a href="./#/" className="inline-block text-sm text-[#6a6c74] underline mb-4">
          ← Back to the live header
        </a>
        <h1 className="text-2xl font-bold text-[#2a2a2e]">Header at every Tailwind breakpoint</h1>
        <p className="text-sm text-[#6a6c74] mt-2 max-w-[720px]">
          Each frame is an iframe sized to a Tailwind v4 breakpoint width. Media queries evaluate against the
          iframe's own viewport, so this shows exactly how the header renders at each width.
        </p>
        <p className="text-sm text-[#6a6c74] mt-1 max-w-[720px]">
          The header switches from the hamburger menu to the full desktop nav at <strong>lg (1024px)</strong> and up.
          Click the hamburger inside a small frame to preview the open mobile menu.
        </p>
        <a
          href="./#/header"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 text-sm bg-[#ffe513] text-[#2a2a2e] font-medium px-4 py-2 rounded-none"
        >
          Open header-only view in a new tab
        </a>
      </div>

      <div className="max-w-[1720px] mx-auto flex flex-col gap-8">
        {breakpoints.map((bp) => (
          <section key={bp.label}>
            <h2 className="text-sm font-semibold uppercase tracking-[1px] text-[#6a6c74] mb-2">{bp.label}</h2>
            <div className="bg-white border border-[#e8e8ea] shadow-sm overflow-x-auto">
              <iframe
                title={`Header at ${bp.label}`}
                src="./#/header"
                width={bp.width}
                height={100}
                className="block border-0"
                style={{ minWidth: bp.width }}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
