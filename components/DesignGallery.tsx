"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { DesignItem } from "@/lib/design-work";

type DesignGalleryProps = {
  items: DesignItem[];
};

function tagClassName(featured: boolean) {
  return featured
    ? "border-[var(--color-primary)]/20 bg-[var(--color-primary-highlight)] text-[var(--color-primary)]"
    : "border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-muted)]";
}

function GalleryWallCard({
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
      className="group mb-6 w-full break-inside-avoid text-left outline-none"
    >
      <div className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-md)] transition-all duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:border-[var(--color-primary)]/25 motion-safe:group-hover:shadow-[0_18px_40px_color-mix(in_oklab,var(--color-primary)_10%,transparent)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]">
        <div
          className="relative overflow-hidden bg-[var(--color-primary-highlight)]/15"
          style={{ aspectRatio: item.aspectRatio }}
        >
          <Image
            src={item.images[0] ?? item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            priority={priority}
            className="object-contain p-4 transition-transform duration-300 motion-safe:group-hover:scale-[1.01]"
          />

          {featured ? (
            <span className="absolute left-4 top-4 inline-flex rounded-full border border-[var(--color-primary)]/25 bg-[var(--color-bg)]/90 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)] backdrop-blur-sm">
              Featured
            </span>
          ) : null}
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {item.type}
              </p>
              <h3 className="mt-1 text-base font-normal text-[var(--color-text)] sm:text-[1.05rem]">
                {item.title}
              </h3>
            </div>
            <span className="text-right text-[0.62rem] uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
              {item.year}
            </span>
          </div>

          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            {item.clientOrEvent}
          </p>

          <p className="mt-4 text-sm leading-6 text-[var(--color-text-muted)]">
            {item.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <span
                key={`${item.id}-${tag}`}
                className={`rounded-full border px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.08em] ${tagClassName(featured && index === 0)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}

export function DesignGallery({ items }: DesignGalleryProps) {
  const [activeItem, setActiveItem] = useState<DesignItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalImageLoading, setIsModalImageLoading] = useState(false);
  const [isModalMounted, setIsModalMounted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const orderedItems = useMemo(
    () => [...items].sort((a, b) => Number(b.featured) - Number(a.featured)),
    [items]
  );

  const openModal = useCallback((item: DesignItem) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    lastFocusedElementRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setActiveItem(item);
    setActiveImageIndex(0);
    setIsModalImageLoading(true);
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
      lastFocusedElementRef.current?.focus();
      lastFocusedElementRef.current = null;
    }, 200);
  }, [activeItem]);

  const goToPreviousImage = useCallback(() => {
    if (!activeItem || activeItem.images.length < 2) {
      return;
    }

    setActiveImageIndex((current) =>
      current === 0 ? activeItem.images.length - 1 : current - 1
    );
    setIsModalImageLoading(true);
  }, [activeItem]);

  const goToNextImage = useCallback(() => {
    if (!activeItem || activeItem.images.length < 2) {
      return;
    }

    setActiveImageIndex((current) =>
      current === activeItem.images.length - 1 ? 0 : current + 1
    );
    setIsModalImageLoading(true);
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

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem, closeModal, goToNextImage, goToPreviousImage, isModalMounted]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isModalMounted && activeItem) {
      closeButtonRef.current?.focus();
    }
  }, [activeItem, isModalMounted]);

  const modalImage = activeItem?.images[activeImageIndex] ?? activeItem?.images[0];

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
              Curated wall
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">
              Each piece is shown at its own proportion. No crop, no squeeze, no square-box treatment.
            </p>
          </div>
          <p className="hidden text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)] md:block">
            Click artwork to open full view
          </p>
        </div>

        <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
          {orderedItems.map((item, index) => (
            <GalleryWallCard
              key={item.id}
              item={item}
              featured={item.featured}
              onOpen={openModal}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      {isModalMounted && activeItem ? (
        <div
          className={`fixed inset-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md transition-all duration-200 ${
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
              aria-describedby="design-gallery-description"
              className={`relative w-full max-w-6xl overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl transition-all duration-200 ${
                isModalVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <div className="grid max-h-[calc(100vh-2rem)] overflow-y-auto lg:grid-cols-[1.35fr_0.85fr]">
                <div className="relative border-b border-[var(--color-border)] bg-[var(--color-primary-highlight)]/10 lg:border-b-0 lg:border-r">
                  <div className="relative flex min-h-[58vh] items-center justify-center p-4 sm:p-6 lg:min-h-[78vh]">
                    {isModalImageLoading ? (
                      <div className="absolute inset-0 animate-pulse bg-[var(--color-surface-2)]/70" />
                    ) : null}
                    <div className="relative h-full w-full min-h-[54vh] lg:min-h-[72vh]">
                      <Image
                        src={modalImage ?? activeItem.thumbnail}
                        alt={activeItem.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 68vw"
                        className="object-contain p-4 sm:p-6"
                        onLoad={() => setIsModalImageLoading(false)}
                      />
                    </div>

                    {activeItem.images.length > 1 ? (
                      <>
                        <button
                          type="button"
                          onClick={goToPreviousImage}
                          aria-label="Previous image"
                          className="absolute left-4 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/80 text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-primary)]/35 hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={goToNextImage}
                          aria-label="Next image"
                          className="absolute right-4 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/80 text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-primary)]/35 hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>

                <div className="relative p-6 sm:p-8">
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={closeModal}
                    aria-label="Close modal"
                    className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/80 text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-primary)]/35 hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    {activeItem.type}
                  </p>
                  <h3
                    id="design-gallery-title"
                    className="mt-2 text-2xl font-normal text-[var(--color-text)]"
                  >
                    {activeItem.title}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    {activeItem.clientOrEvent} • {activeItem.year}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeItem.tags.map((tag) => (
                      <span
                        key={`${activeItem.id}-${tag}-modal`}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                      Tools
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activeItem.tools.map((tool) => (
                        <span
                          key={`${activeItem.id}-${tool}`}
                          className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p
                    id="design-gallery-description"
                    className="mt-6 text-sm leading-6 text-[var(--color-text-muted)]"
                  >
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
