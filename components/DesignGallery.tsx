"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { DesignItem } from "@/lib/design-work";

type FilterValue = "All" | "Logo" | "Banner" | "Invitation" | "Social";

type DesignGalleryProps = {
  items: DesignItem[];
};

const FILTERS: Array<{ label: string; value: FilterValue }> = [
  { label: "All", value: "All" },
  { label: "Logos", value: "Logo" },
  { label: "Banners", value: "Banner" },
  { label: "Invitations", value: "Invitation" },
  { label: "Social", value: "Social" },
];

function GalleryCard({
  item,
  featured,
  onOpen,
  priority = false,
}: {
  item: DesignItem;
  featured: boolean;
  onOpen: (item: DesignItem) => void;
  priority?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-label={`Open ${item.title}`}
      className="group w-full text-left rounded-2xl border border-slate-800/70 bg-slate-900/60 overflow-hidden transition-all duration-200 hover:border-slate-600/80 hover:bg-slate-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <div
        className={`relative overflow-hidden bg-slate-950 ${
          featured ? "aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={item.images[0] ?? item.thumbnail}
          alt={item.title}
          fill
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 58vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          loading={priority ? "eager" : "lazy"}
          className="object-cover transition-all duration-200 group-hover:scale-[1.03]"
        />
      </div>

      <div className={featured ? "p-5" : "p-4"}>
        {featured ? (
          <>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.65rem] tracking-[0.18em] uppercase text-slate-500">
                  {item.type}
                </p>
                <h3 className="mt-1 text-base font-normal text-slate-50">
                  {item.title}
                </h3>
              </div>
            </div>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
              {item.clientOrEvent} • {item.year}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={`${item.id}-${tag}`}
                  className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 line-clamp-2 text-sm text-slate-300">
              {item.description}
            </p>
          </>
        ) : (
          <>
            <p className="text-[0.65rem] tracking-[0.18em] uppercase text-slate-500">
              {item.type}
            </p>
            <h3 className="mt-1 text-sm font-normal text-slate-50">
              {item.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={`${item.id}-${tag}`}
                  className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </button>
  );
}

export function DesignGallery({ items }: DesignGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  const [activeItem, setActiveItem] = useState<DesignItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalMounted, setIsModalMounted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") {
      return items;
    }

    return items.filter((item) => item.type === activeFilter);
  }, [activeFilter, items]);

  const featuredItems = useMemo(
    () => visibleItems.filter((item) => item.featured),
    [visibleItems]
  );

  const gridItems = useMemo(
    () => visibleItems.filter((item) => !item.featured),
    [visibleItems]
  );

  const openModal = useCallback((item: DesignItem) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setActiveItem(item);
    setActiveImageIndex(0);
    setIsModalMounted(true);
    requestAnimationFrame(() => setIsModalVisible(true));
  }, []);

  const closeModal = useCallback(() => {
    if (!activeItem) {
      return;
    }

    setIsModalVisible(false);
    closeTimerRef.current = setTimeout(() => {
      setIsModalMounted(false);
      setActiveItem(null);
      setActiveImageIndex(0);
    }, 200);
  }, [activeItem]);

  const goToPreviousImage = useCallback(() => {
    if (!activeItem || activeItem.images.length < 2) {
      return;
    }

    setActiveImageIndex((current) =>
      current === 0 ? activeItem.images.length - 1 : current - 1
    );
  }, [activeItem]);

  const goToNextImage = useCallback(() => {
    if (!activeItem || activeItem.images.length < 2) {
      return;
    }

    setActiveImageIndex((current) =>
      current === activeItem.images.length - 1 ? 0 : current + 1
    );
  }, [activeItem]);

  useEffect(() => {
    if (!isModalMounted) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalMounted]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalMounted || !activeItem) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPreviousImage();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem, closeModal, goToNextImage, goToPreviousImage, isModalMounted]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const featuredCount = Math.min(featuredItems.length, 3);

  const featuredSpanClass = (index: number) => {
    if (featuredCount === 1) {
      return "lg:col-span-12";
    }

    if (index === 0) {
      return "lg:col-span-7 lg:row-span-2";
    }

    return "lg:col-span-5";
  };

  const modalImage = activeItem?.images[activeImageIndex] ?? activeItem?.images[0];

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap items-center gap-3">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`min-h-11 rounded-full border px-4 py-2 text-[0.65rem] tracking-[0.18em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  isActive
                    ? "border-slate-50 bg-slate-50 text-slate-950"
                    : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400">
            Featured work
          </h2>
          <p className="text-xs text-slate-500">
            Larger featured cards with an asymmetric desktop layout.
          </p>
        </div>

        {featuredItems.length > 0 ? (
          <>
            <div className="grid gap-6 lg:grid-cols-12 lg:auto-rows-[minmax(0,auto)]">
              {featuredItems.slice(0, 3).map((item, index) => (
                <div key={item.id} className={featuredSpanClass(index)}>
                  <GalleryCard item={item} featured onOpen={openModal} priority={index === 0} />
                </div>
              ))}
            </div>
            {featuredItems.length > 3 ? (
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredItems.slice(3).map((item) => (
                  <GalleryCard key={item.id} item={item} featured onOpen={openModal} />
                ))}
              </div>
            ) : null}
          </>
        ) : (
          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 px-5 py-8 text-sm text-slate-400">
            No featured items match this filter.
          </div>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400">
            Full grid
          </h2>
          <p className="text-xs text-slate-500">
            Remaining work shown in a compact responsive grid.
          </p>
        </div>

        {gridItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridItems.map((item) => (
              <GalleryCard key={item.id} item={item} featured={false} onOpen={openModal} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 px-5 py-8 text-sm text-slate-400">
            No additional items match this filter.
          </div>
        )}
      </section>

      {isModalMounted && activeItem ? (
        <div
          className={`fixed inset-0 z-50 bg-slate-950/85 transition-all duration-200 ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
          role="presentation"
        >
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="design-gallery-title"
              className={`relative w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900 shadow-2xl transition-all duration-200 ${
                isModalVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <div className="grid max-h-[calc(100vh-2rem)] overflow-y-auto lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative border-b border-slate-800/70 bg-slate-950 lg:border-b-0 lg:border-r">
                  <div className="relative aspect-[4/3] w-full lg:aspect-[5/6]">
                    <Image
                      src={modalImage ?? activeItem.thumbnail}
                      alt={activeItem.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>

                  {activeItem.images.length > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={goToPreviousImage}
                        aria-label="Previous image"
                        className="absolute left-4 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-100 transition-all duration-200 hover:border-slate-500 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={goToNextImage}
                        aria-label="Next image"
                        className="absolute right-4 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-100 transition-all duration-200 hover:border-slate-500 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </>
                  ) : null}
                </div>

                <div className="relative p-6 sm:p-8">
                  <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Close modal"
                    className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full border border-slate-700 bg-slate-950/60 text-slate-100 transition-all duration-200 hover:border-slate-500 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <p className="text-[0.65rem] tracking-[0.18em] uppercase text-slate-500">
                    {activeItem.type}
                  </p>
                  <h3
                    id="design-gallery-title"
                    className="mt-2 text-2xl font-normal text-slate-50"
                  >
                    {activeItem.title}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">
                    {activeItem.clientOrEvent} • {activeItem.year}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeItem.tags.map((tag) => (
                      <span
                        key={`${activeItem.id}-${tag}-modal`}
                        className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <p className="text-[0.65rem] tracking-[0.18em] uppercase text-slate-500">
                      Tools
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activeItem.tools.map((tool) => (
                        <span
                          key={`${activeItem.id}-${tool}`}
                          className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-6 text-slate-300">
                    {activeItem.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
