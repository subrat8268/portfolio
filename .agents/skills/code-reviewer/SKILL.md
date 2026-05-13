---
name: code-reviewer
description: Bug detection, code quality, and best practice enforcement for KredBook.
---

# Code Reviewer Skill

> Bug detection, code quality, and best practice enforcement for KredBook.

## When to Use

- After implementation completes
- Before declaring task complete
- When fixing bugs
- At code review phase in workflow

## Focus Areas

### 1. Type Safety

**MUST CHECK:**
- âœ… No `as any` type casts
- âœ… No `@ts-ignore` or `@ts-expect-error`
- âœ… All props are typed
- âœ… Return types specified
- âœ… Schema types from schemas.ts used

### 2. Component Quality

**MUST CHECK:**
- âœ… Functional components only (no class)
- âœ… Proper memoization where needed (useMemo, useCallback)
- âœ… No inline function definitions in render
- âœ… Props destructured at top level
- âœ… Loading and error states handled

### 3. State Management

**MUST CHECK:**
- âœ… Zustand stores have proper types
- âœ… Selector is typed
- âœ… No derived state in components (compute in store)
- âœ… Async actions handle loading/error states

### 4. Performance

**MUST CHECK:**
- âœ… FlatList uses keyExtractor (not index)
- âœ… Proper getItemLayout for lists
- âœ… Images use proper sizing
- âœ… No unnecessary re-renders

### 5. Security

**MUST CHECK:**
- âœ… No sensitive data in logs
- âœ… No hardcoded secrets
- âœ… Proper error messages (no leak internals)
- âœ… Auth checks before protected actions

### 6. Accessibility

**MUST CHECK:**
- âœ… All touchables have min 44pt hit area
- âœ… Text has proper contrast
- âœ… Labels on inputs (not just placeholder)
- âœ… Keyboard dismissible

### 7. UX Patterns

**MUST CHECK:**
- âœ… Optimistic UI (immediate feedback)
- âœ… Toast for success/error
- âœ… Loading states for async
- âœ… Empty states for lists
- âœ… Pull to refresh

## Review Checklist

```
## Code Review: [File]

### Issues Found

| Severity | Issue | Location | Fix |
|----------|-------|----------|-----|
| [High]   | [Issue] | [Line] | [Suggested fix] |

### Suggestions

- [Improvement suggestion]

### Looks Good

- [âœ“] Good pattern observed
```

## Severity Definitions

| Level | Meaning | Blocks Merge |
|-------|---------|---------------|
| Critical | Runtime crash | Yes |
| High | Bug, data loss | Yes |
| Medium | Performance, UX | Optional |
| Low | Style, best practice | No |

## KredBook Specific Checks

- âœ… Uses colors from theme.ts (not hardcoded)
- âœ… Uses spacing tokens
- âœ… Uses lucide-react-native icons
- âœ… Status uses color tokens (success/danger/warning)
- âœ… Amounts are bold + color coded

---

*Loaded when: "review", "code review", "check quality", "bug", "issue"*
