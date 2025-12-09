'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

let sharedScriptPromise: Promise<void> | null = null;

interface SplineViewerProps {
  url: string;
  className?: string;
  style?: React.CSSProperties;
}

export function SplineViewer({ url, className, style }: SplineViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splineViewerRef = useRef<HTMLElement | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(min-width: 1024px)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktopQuery = window.matchMedia('(min-width: 1024px)');

    const handleMotionChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    const handleDesktopChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);

    motionQuery.addEventListener('change', handleMotionChange);
    desktopQuery.addEventListener('change', handleDesktopChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      desktopQuery.removeEventListener('change', handleDesktopChange);
    };
  }, []);

  const allowSpline = useMemo(() => isDesktop && !prefersReducedMotion, [isDesktop, prefersReducedMotion]);

  // Defer loading until the viewer is near the viewport to reduce initial payload.
  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined' || !allowSpline) return;

    const scheduleLoad = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => setShouldLoad(true), { timeout: 1500 });
      } else {
        setTimeout(() => setShouldLoad(true), 750);
      }
    };

    if (!('IntersectionObserver' in window)) {
      scheduleLoad();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible) {
          scheduleLoad();
          observer.disconnect();
        }
      },
      { rootMargin: '280px 0px', threshold: 0.05 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [allowSpline]);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined' || !shouldLoad || !allowSpline) return;

    const checkSplineLoaded = () => {
      try {
        return customElements.get('spline-viewer') !== undefined;
      } catch {
        return false;
      }
    };

    const loadSplineScript = () => {
      if (checkSplineLoaded()) {
        sharedScriptPromise = sharedScriptPromise ?? Promise.resolve();
        return sharedScriptPromise;
      }
      if (sharedScriptPromise) return sharedScriptPromise;

      const existingScript = document.querySelector<HTMLScriptElement>('script[data-spline-viewer]');
      if (existingScript) {
        if (existingScript.dataset.loaded === 'true' || checkSplineLoaded()) {
          sharedScriptPromise = Promise.resolve();
          return sharedScriptPromise;
        }

        sharedScriptPromise = new Promise((resolve, reject) => {
          const handleLoad = () => {
            existingScript.dataset.loaded = 'true';
            resolve();
          };

          const handleError = () => reject(new Error('Failed to load Spline viewer script'));

          existingScript.addEventListener('load', handleLoad, { once: true });
          existingScript.addEventListener('error', handleError, { once: true });
        });

        return sharedScriptPromise;
      }

      sharedScriptPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@splinetool/viewer@1.10.99/build/spline-viewer.js';
        script.type = 'module';
        script.crossOrigin = 'anonymous';
        script.dataset.splineViewer = 'true';

        script.addEventListener(
          'load',
          () => {
            script.dataset.loaded = 'true';
            resolve();
          },
          { once: true }
        );

        script.addEventListener(
          'error',
          () => {
            reject(new Error('Failed to load Spline viewer script'));
          },
          { once: true }
        );

        document.body.appendChild(script);
      });

      return sharedScriptPromise;
    };

    const createSplineViewer = (): (() => void) => {
      if (!containerRef.current) return () => { };

      const splineViewer = document.createElement('spline-viewer') as HTMLElement;
      splineViewer.setAttribute('url', url);

      if (className) {
        splineViewer.className = className;
      }

      if (style) {
        if (style.minHeight) {
          splineViewer.style.minHeight = typeof style.minHeight === 'number' ? `${style.minHeight}px` : style.minHeight;
        }
        if (style.height) {
          splineViewer.style.height = typeof style.height === 'number' ? `${style.height}px` : style.height;
        }
        if (style.maxHeight) {
          splineViewer.style.maxHeight = typeof style.maxHeight === 'number' ? `${style.maxHeight}px` : style.maxHeight;
        }
        if (style.width) {
          splineViewer.style.width = typeof style.width === 'number' ? `${style.width}px` : style.width;
        }
      }

      containerRef.current.appendChild(splineViewer);
      splineViewerRef.current = splineViewer;

      // Hide the "Built with Spline" badge - aggressive approach
      const hideBadge = () => {
        try {
          // Method 1: Hide via shadow DOM
          if (splineViewer.shadowRoot) {
            // Try multiple selector strategies
            const allElements = splineViewer.shadowRoot.querySelectorAll('*');
            allElements.forEach((el) => {
              const htmlEl = el as HTMLElement;
              const text = htmlEl.textContent?.toLowerCase() || '';
              const href = (htmlEl as HTMLAnchorElement).href?.toLowerCase() || '';

              // Hide if it contains badge-related text or links
              if (
                text.includes('built with') ||
                text.includes('spline') ||
                href.includes('spline.design') ||
                href.includes('splinetool.com') ||
                htmlEl.className?.toLowerCase().includes('badge') ||
                htmlEl.className?.toLowerCase().includes('watermark') ||
                htmlEl.getAttribute('href')?.includes('spline')
              ) {
                htmlEl.style.cssText =
                  'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; position: absolute !important; left: -9999px !important;';
                htmlEl.removeAttribute('href');
              }
            });

            // Also target specific selectors (be more selective to avoid hiding legitimate content)
            const selectors = [
              'a[href*="spline"]',
              'a[href*="splinetool"]',
              '[class*="watermark"]',
              '[class*="badge"]',
              '[id*="badge"]',
              '[id*="watermark"]',
            ];

            selectors.forEach((selector) => {
              try {
                const elements = splineViewer.shadowRoot!.querySelectorAll(selector);
                elements.forEach((el) => {
                  const htmlEl = el as HTMLElement;
                  const text = htmlEl.textContent?.toLowerCase() || '';
                  const href = (htmlEl as HTMLAnchorElement).href?.toLowerCase() || '';
                  // Only hide if it's clearly a badge/watermark
                  if (text.includes('built with') || text.includes('spline') || href.includes('spline')) {
                    htmlEl.style.cssText =
                      'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important;';
                  }
                });
              } catch {
                // Ignore selector errors
              }
            });
          }

          // Method 2: Hide via main DOM (for badges that escape shadow DOM)
          const allLinks = document.querySelectorAll('a');
          allLinks.forEach((link) => {
            const htmlEl = link as HTMLElement;
            const text = htmlEl.textContent?.toLowerCase() || '';
            const href = (link as HTMLAnchorElement).href?.toLowerCase() || '';
            if (
              href.includes('spline.design') ||
              href.includes('splinetool.com') ||
              (text.includes('built with') && text.includes('spline'))
            ) {
              htmlEl.style.cssText =
                'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; position: absolute !important; left: -9999px !important;';
              htmlEl.removeAttribute('href');
            }
          });

          // Method 3: Inject CSS into shadow DOM to hide badges (more reliable)
          if (splineViewer.shadowRoot) {
            let styleEl = splineViewer.shadowRoot.querySelector('style#spline-badge-hider') as HTMLStyleElement;
            if (!styleEl) {
              styleEl = document.createElement('style');
              styleEl.id = 'spline-badge-hider';
              splineViewer.shadowRoot.appendChild(styleEl);
            }
            styleEl.textContent = `
              a[href*="spline"],
              a[href*="splinetool"],
              [class*="badge"],
              [class*="watermark"],
              [id*="badge"],
              [id*="watermark"] {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
              }
            `;
          }
        } catch {
          // Silently fail if shadow DOM access is restricted
        }
      };

      // Hide badge multiple times as Spline loads (more frequent checks)
      const intervals = [0, 250, 750, 1500];
      const timeouts = intervals.map((delay) => setTimeout(hideBadge, delay));

      // Observe shadow DOM changes with throttling
      let hideBadgeTimeout: NodeJS.Timeout | null = null;
      const observer = new MutationObserver(() => {
        // Throttle badge hiding to avoid performance issues
        if (hideBadgeTimeout) {
          clearTimeout(hideBadgeTimeout);
        }
        hideBadgeTimeout = setTimeout(() => {
          hideBadge();
        }, 50);
      });

      let checkShadowRoot: NodeJS.Timeout | null = null;

      // Wait for shadow DOM to be available
      checkShadowRoot = setInterval(() => {
        if (splineViewer.shadowRoot) {
          observer.observe(splineViewer.shadowRoot, {
            childList: true,
            subtree: true,
            attributes: true,
          });
          if (checkShadowRoot) {
            clearInterval(checkShadowRoot);
            checkShadowRoot = null;
          }
        }
      }, 100);

      // Also observe the element itself
      observer.observe(splineViewer, {
        childList: true,
        subtree: true,
        attributes: true,
      });

      // Return cleanup function
      return () => {
        timeouts.forEach((timeout) => clearTimeout(timeout));
        if (checkShadowRoot) {
          clearInterval(checkShadowRoot);
        }
        observer.disconnect();
        if (splineViewerRef.current && splineViewerRef.current.parentNode) {
          splineViewerRef.current.parentNode.removeChild(splineViewerRef.current);
        }
      };
    };

    let cancelled = false;

    loadSplineScript()
      .then(() => {
        if (cancelled) return;
        cleanupRef.current = createSplineViewer();
      })
      .catch((error) => {
        console.warn('Spline viewer script failed to load', error);
      });

    return () => {
      cancelled = true;
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [allowSpline, className, shouldLoad, style, url]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{
        position: 'relative',
        minWidth: '100%',
        minHeight: '100%',
      }}
    />
  );
}
