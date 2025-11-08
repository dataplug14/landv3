'use client';

import React, { useEffect, useRef } from 'react';

interface SplineViewerProps {
  url: string;
  className?: string;
  style?: React.CSSProperties;
}

export function SplineViewer({ url, className, style }: SplineViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splineViewerRef = useRef<HTMLElement | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    // Wait for Spline script to load
    const checkSplineLoaded = () => {
      try {
        return customElements.get('spline-viewer') !== undefined;
      } catch {
        return false;
      }
    };

    const createSplineViewer = (): (() => void) => {
      if (!containerRef.current) return () => {};

      const splineViewer = document.createElement('spline-viewer') as HTMLElement;
      splineViewer.setAttribute('url', url);
      
      if (className) {
        splineViewer.className = className;
      }
      
      if (style) {
        if (style.minHeight) {
          splineViewer.style.minHeight = typeof style.minHeight === 'number' 
            ? `${style.minHeight}px` 
            : style.minHeight;
        }
        if (style.height) {
          splineViewer.style.height = typeof style.height === 'number' 
            ? `${style.height}px` 
            : style.height;
        }
        if (style.maxHeight) {
          splineViewer.style.maxHeight = typeof style.maxHeight === 'number' 
            ? `${style.maxHeight}px` 
            : style.maxHeight;
        }
        if (style.width) {
          splineViewer.style.width = typeof style.width === 'number' 
            ? `${style.width}px` 
            : style.width;
        }
      }

      containerRef.current.appendChild(splineViewer);
      splineViewerRef.current = splineViewer;

      // Hide the "Built with Spline" badge
      const hideBadge = () => {
        try {
          if (splineViewer.shadowRoot) {
            const selectors = [
              'a[href*="spline"]',
              'a[target="_blank"]',
              '.spline-watermark',
              '[class*="watermark"]',
              '[class*="badge"]',
              'a[href*="splinetool"]',
            ];
            
            selectors.forEach((selector) => {
              const elements = splineViewer.shadowRoot!.querySelectorAll(selector);
              elements.forEach((el) => {
                const htmlEl = el as HTMLElement;
                if (htmlEl.textContent?.toLowerCase().includes('built with') || 
                    htmlEl.textContent?.toLowerCase().includes('spline')) {
                  htmlEl.style.display = 'none';
                  htmlEl.style.visibility = 'hidden';
                  htmlEl.style.opacity = '0';
                  htmlEl.style.pointerEvents = 'none';
                }
              });
            });
          }

          // Also check main DOM
          const badges = document.querySelectorAll('a[href*="spline"], a[href*="splinetool"]');
          badges.forEach((badge) => {
            const htmlBadge = badge as HTMLElement;
            if (htmlBadge.textContent?.toLowerCase().includes('built with') ||
                htmlBadge.textContent?.toLowerCase().includes('spline')) {
              htmlBadge.style.display = 'none';
              htmlBadge.style.visibility = 'hidden';
              htmlBadge.style.opacity = '0';
              htmlBadge.style.pointerEvents = 'none';
            }
          });
        } catch (e) {
          // Silently fail if shadow DOM access is restricted
        }
      };

      // Hide badge multiple times as Spline loads
      const intervals = [0, 500, 1000, 2000, 3000];
      const timeouts = intervals.map((delay) => setTimeout(hideBadge, delay));
      
      // Observe shadow DOM changes
      const observer = new MutationObserver(() => {
        hideBadge();
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

    // If Spline is already loaded, create viewer immediately
    if (checkSplineLoaded()) {
      cleanupRef.current = createSplineViewer();
    } else {
      // Wait for script to load (check every 100ms, max 5 seconds)
      let attempts = 0;
      const maxAttempts = 50;
      const checkInterval = setInterval(() => {
        attempts++;
        if (checkSplineLoaded()) {
          clearInterval(checkInterval);
          cleanupRef.current = createSplineViewer();
        } else if (attempts >= maxAttempts) {
          clearInterval(checkInterval);
          console.warn('Spline viewer script failed to load');
        }
      }, 100);

      return () => {
        clearInterval(checkInterval);
        if (cleanupRef.current) {
          cleanupRef.current();
        }
      };
    }

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [url, className, style]);

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
