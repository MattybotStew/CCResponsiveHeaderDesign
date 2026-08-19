import { useState, useRef } from "react";

import svgPaths from "../imports/svg-owbugrl009";
import searchPaths from "../imports/svg-br7l0hf89z";
import mobilePaths from "./imports/MbNewHeadOpen2Option2/svg-bx9zx6t2fb";

function CooperCarryLogo() {
  return (
    <div className="relative" style={{ width: "153px", height: "48.682px" }}>
      <div className="absolute" style={{ top: "69.89%", left: "0.07%", right: "0.43%", bottom: "0.65%" }}>
        <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 152.237 14.34" preserveAspectRatio="xMidYMid meet">
          <path d={svgPaths.p1cde6900} fill="#919195" />
          <path d={svgPaths.p2e4c7b00} fill="#919195" />
          <path d={svgPaths.p1d894300} fill="#919195" />
          <path d={svgPaths.p2781bd00} fill="#919195" />
          <path d={svgPaths.p1a1f5ac0} fill="#919195" />
          <path d={svgPaths.p26778400} fill="#919195" />
          <path d={svgPaths.p30a43d00} fill="#919195" />
          <path d={svgPaths.pbf2bc00} fill="#919195" />
          <path d={svgPaths.p4568c00} fill="#919195" />
          <path d={svgPaths.p3cbb3c00} fill="#919195" />
          <path d={svgPaths.p172bf600} fill="#919195" />
        </svg>
      </div>
      <div className="absolute" style={{ top: "7.61%", left: "84.56%", right: "0.4%", bottom: "45.11%" }}>
        <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 23.0182 23.018" preserveAspectRatio="xMidYMid meet">
          <path d={svgPaths.pa05c900} fill="#919195" />
          <path d={svgPaths.p122cf440} fill="#919195" />
          <path d={svgPaths.p3ac894f0} fill="#919195" />
          <path d={svgPaths.p23429800} fill="#919195" />
          <path d={svgPaths.p25a7d040} fill="#919195" />
        </svg>
      </div>
      <div className="absolute" style={{ top: "0.54%", left: "82.17%", right: "8.73%", bottom: "70.98%" }}>
        <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 13.9166 13.8638" preserveAspectRatio="xMidYMid meet">
          <path d={svgPaths.p355ed380} fill="#919195" />
          <path d={svgPaths.p2b5c4400} fill="#919195" />
        </svg>
      </div>
    </div>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg fill="none" viewBox="0 0 24.4795 24.4817" className={`flex-shrink-0 rotate-180 ${className}`} aria-label="Search">
      <path d={searchPaths.p295f7700} fill="currentColor" />
    </svg>
  );
}

const navItems = ["People", "Studios", "Services", "Insights", "Firm", "News", "Careers", "Contact"];

const peopleDropdownItems = ["Leadership", "Senior Associates", "Associates"];
const firmDropdownItems = ["About", "Awards", "Equity, Diversity, Inclusion"];
const studiosDropdownItems = [
  "Experiential Graphic Design", "Government & Civic", "Higher Education",
  "Hospitality", "Interior Design", "International", "K-12 Education",
  "Landscape Architecture", "Mixed-Use", "Multifamily Residential",
  "Office Workplace", "Restaurants", "Retail", "Science + Technology",
  "The Johnson Studio", "Transit + TOD", "Urban Design + Planning",
];
const servicesDropdownItems = [
  "Architecture", "Branding", "Experiential Graphic Design",
  "Historic Rehabilitation, Adaptive Re-Use & Conversions",
  "Interior Design", "Landscape Architecture", "Programming + Predesign",
  "Sustainability Services", "Urban Design + Planning",
];

const dropdownMap: Record<string, string[]> = {
  People: peopleDropdownItems,
  Studios: studiosDropdownItems,
  Services: servicesDropdownItems,
  Firm: firmDropdownItems,
};

const navLinkClass =
  "font-normal text-[#6a6c74] tracking-[1px] uppercase leading-6 whitespace-nowrap opacity-75 hover:font-bold transition-all duration-150";

const mobileItemClass =
  "font-normal text-[#6a6c74] tracking-[1px] uppercase leading-6 text-[14px]";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [fadingItem, setFadingItem] = useState<string | null>(null);
  const activeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchActive, setSearchActive] = useState(false);

  function toggleMenu() {
    setMenuOpen((open) => {
      if (!open) setMobileExpanded(null);
      return !open;
    });
  }

  function showDropdown(item: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(item);
  }

  function hideDropdown() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  }

  function toggleMobile(item: string) {
    setMobileExpanded(mobileExpanded === item ? null : item);
  }

  return (
    <>
      <header className={`bg-white w-full border-b border-[#e8e8ea] relative z-50 ${menuOpen ? "max-lg:hidden" : ""}`}>
        <div className="flex items-center justify-between px-5 md:px-8 lg:px-10 h-[90px] max-w-[1720px] mx-auto">
          {/* Logo */}
          <a href="/" aria-label="Cooper Carry home" className="flex-shrink-0" style={{ transform: "scale(0.75)", transformOrigin: "left center" }}>
            <CooperCarryLogo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-stretch gap-6 xl:gap-7 self-stretch">
            {navItems.map((item) => {
              const isActive = activeItem === item;
              const hasDrop = item in dropdownMap;
              return (
                <div
                  key={item}
                  className="relative self-stretch flex items-center"
                  onMouseEnter={hasDrop ? () => showDropdown(item) : undefined}
                  onMouseLeave={hasDrop ? hideDropdown : undefined}
                >
                  <a
                    href={`/${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (activeTimer.current) clearTimeout(activeTimer.current);
                      if (fadeTimer.current) clearTimeout(fadeTimer.current);
                      setFadingItem(null);
                      setActiveItem(item);
                      activeTimer.current = setTimeout(() => setFadingItem(item), 4000);
                      fadeTimer.current = setTimeout(() => { setActiveItem(null); setFadingItem(null); }, 4700);
                    }}
                    className={`${navLinkClass} text-[13px] xl:text-[14px] group relative block`}
                  >
                    {item}
                    {isActive && (
                      <span className={`absolute bottom-[-12px] left-0 right-0 h-[4px] bg-[#ffe513] transition-opacity duration-700 ${fadingItem === item ? "opacity-0" : "opacity-100"}`} />
                    )}
                    {!isActive && (
                      <span className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-[#ffe513] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                    )}
                  </a>

                  {hasDrop && openDropdown === item && (
                    item === "Studios" ? (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-white border border-[#e8e8ea] shadow-md z-50 animate-[fadeSlideDown_0.18s_ease-out] grid grid-cols-2"
                        onMouseEnter={() => showDropdown(item)}
                        onMouseLeave={hideDropdown}
                      >
                        {dropdownMap[item].map((label, i) => (
                          <a key={label} href={`/${item.toLowerCase()}/${label.toLowerCase().replace(/\s+/g, "-")}`}
                            className={`relative block px-6 py-4 font-normal text-[#6a6c74] text-[13px] tracking-[1px] uppercase transition-all duration-200 opacity-75 hover:opacity-100 hover:font-bold hover:bg-[#f9f7f4] border-t border-[#e8e8ea] ${i < 2 ? "border-t-0" : ""}`}>
                            {label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[390px] bg-white border border-[#e8e8ea] shadow-md z-50 animate-[fadeSlideDown_0.18s_ease-out]"
                        onMouseEnter={() => showDropdown(item)}
                        onMouseLeave={hideDropdown}
                      >
                        {dropdownMap[item].map((label, i) => (
                          <a key={label} href={`/${item.toLowerCase()}/${label.toLowerCase().replace(/\s+/g, "-")}`}
                            className={`relative block px-6 py-5 font-normal text-[#6a6c74] text-[13px] tracking-[1px] uppercase transition-all duration-200 opacity-75 hover:opacity-100 hover:font-bold hover:bg-[#f9f7f4] ${i > 0 ? "border-t border-[#e8e8ea]" : ""}`}>
                            {label}
                          </a>
                        ))}
                      </div>
                    )
                  )}
                </div>
              );
            })}
            <button
              aria-label="Search"
              onClick={() => setSearchActive((active) => !active)}
              className={`ml-1 w-[50px] h-[50px] rounded-none self-center flex items-center justify-center flex-shrink-0 text-[#6a6c74] hover:text-[#2a2a2e] transition-colors ${searchActive ? "bg-[#ffe513]" : "bg-[#f5f5f5]"}`}
            >
              <SearchIcon className="w-[18px] h-[18px]" />
            </button>
          </nav>

          {/* Mobile / tablet hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className="flex lg:hidden text-[#6a6c74] flex-col gap-[5px] p-1"
          >
            <span className="block w-5 h-[1.5px] bg-[#6a6c74]" />
            <span className="block w-5 h-[1.5px] bg-[#6a6c74]" />
            <span className="block w-5 h-[1.5px] bg-[#6a6c74]" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-white flex flex-col overflow-y-auto">
          {/* Mobile header bar — matches closed header layout */}
          <div className="flex items-center justify-between px-5 h-[90px] shrink-0 border-b border-[#e8e8ea] bg-white">
            <a href="/" aria-label="Cooper Carry home" className="flex-shrink-0" style={{ transform: "scale(0.75)", transformOrigin: "left center" }}>
              <CooperCarryLogo />
            </a>
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex lg:hidden text-[#6a6c74] p-1"
            >
              <svg fill="none" viewBox="0 0 20 20" className="w-5 h-5" strokeLinecap="round">
                <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" />
                <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>

          {/* Nav list */}
          <div className="flex flex-col px-5 pt-2 pb-4 flex-1">
            {navItems.map((item) => {
              const hasDrop = item in dropdownMap;
              const isExpanded = mobileExpanded === item;
              return (
                <div key={item}>
                  <button
                    className="w-full flex items-center justify-between gap-[10px] py-[22px]"
                    onClick={() => hasDrop ? toggleMobile(item) : setMenuOpen(false)}
                  >
                    <span className={`${mobileItemClass} text-left`}>{item}</span>
                    {hasDrop && (
                      <svg
                        fill="none"
                        viewBox="0 0 8.3914 13.9575"
                        className={`w-[8px] h-[14px] flex-shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-90" : "-rotate-90"}`}
                      >
                        <path clipRule="evenodd" d={mobilePaths.p1374180} fill="#6A6C74" fillRule="evenodd" />
                      </svg>
                    )}
                  </button>

                  {/* Sub-items */}
                  {hasDrop && isExpanded && (
                    <div className="flex flex-col gap-[20px] px-[10px] pb-[20px]">
                      {dropdownMap[item].map((sub, i) => (
                        <div key={sub}>
                          <a
                            href={`/${item.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                            className={`${mobileItemClass} block`}
                            onClick={() => setMenuOpen(false)}
                          >
                            {sub}
                          </a>
                          {i < dropdownMap[item].length - 1 && <div className="mt-[20px] w-full h-px bg-[#d9d9d9]" />}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="w-full h-px bg-[#d9d9d9]" />
                </div>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="shrink-0 p-5 bg-[#f9f7f4]">
            <div className="flex items-stretch border border-[#d9d9d9] bg-white">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 min-w-0 px-5 py-4 font-normal text-[#6a6c74] text-[14px] tracking-[1px] uppercase placeholder:text-[#6a6c74] outline-none bg-white text-center border-0"
              />
              <button aria-label="Search" className="w-[50px] h-[50px] bg-[#ffe513] rounded-none flex items-center justify-center flex-shrink-0">
                <svg fill="none" viewBox="0 0 24.4795 36.3064" className="w-[20px] h-[20px] rotate-180">
                  <path d={mobilePaths.pb114000} fill="#6A6C74" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
