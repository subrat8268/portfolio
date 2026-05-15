# Enhanced Sticky Navbar with Glassmorphism + Glow

**Date:** 2026-05-15
**Status:** Approved

## Overview

Transform the existing navbar into an elegant, interactive component featuring a frosted glass effect that's immediately visible, with a soft radial accent glow that enhances when scrolled.

## Design Choices

- **Default state**: Full glass effect from top (no scroll required)
- **Scrolled state**: Enhanced blur with radial accent glow behind the navbar
- **Glow style**: Soft radial glow using accent color at low opacity

## States

### Default (not scrolled)
- Full frosted glass effect: `backdrop-blur-xl`
- Background: `color-mix(in oklab, var(--bg-page) 70%, transparent)`
- Subtle border using theme's border color

### Scrolled (past 50px threshold)
- Same blur intensity maintained
- Radial accent glow behind navbar using box-shadow
- Slightly more opaque background: `color-mix(in oklab, var(--bg-page) 85%, transparent)`
- Subtle glow: `box-shadow: 0 0 30px rgba(accent-color, 0.2)`

## Implementation Details

1. Add scroll state detection using `useState` + `useEffect` with scroll listener
2. Use 50px scroll threshold to trigger scrolled state
3. Apply conditional classes based on scroll state
4. Use CSS custom property for glow color (accent at 20-30% opacity)
5. 300ms ease transitions for all state changes

## Visual Specifications

- **Glow color**: Use existing accent color (`var(--accent)`) at 20-30% opacity
- **Glow position**: Behind entire navbar as radial/box-shadow effect
- **Border**: Subtle always, slightly more prominent on scroll
- **Transitions**: 300ms ease for all visual changes