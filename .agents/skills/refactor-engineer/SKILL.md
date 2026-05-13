---
name: refactor-engineer
description: Code reuse, cleanup, and reusability improvements for KredBook.
---

# Refactor Engineer Skill

> Code reuse, cleanup, and reusability improvements for KredBook.

## When to Use

- Increasing code reusability
- Reducing duplication
- Improving component structure
- Extracting common patterns
- General code cleanup

## Focus Areas

### 1. Duplication Detection

**Find and extract:**
- Similar component structures â†’ compound component
- Repeated styling â†’ Tailwind class or component
- Repeated business logic â†’ custom hook
- Repeated types â†’ shared type

### 2. Component Extensibility

**Before creating new component:**

1. Check existing components:
   - `src/components/ui/` - Base components
   - `src/components/[feature]/` - Feature components

2. Can existing be extended?
   - Add props for variants
   - Compose with children
   - Split into smaller pieces

3. New only if truly unique

### 3. Hook Extraction

Common patterns to extract:

```
src/hooks/
â”œâ”€â”€ useCustomer.ts        # Customer CRUD + cache
â”œâ”€â”€ useOrders.ts         # Orders CRUD + cache
â”œâ”€â”€ useAuth.ts          # Auth state
â”œâ”€â”€ useToast.ts         # Toast helper
â”œâ”€â”€ useOffline.ts       # Offline detection
```

### 4. File Organization

- Keep components in feature folders
- Use barrel exports (index.ts)
- Co-locate related components
- Separate smart/dumb components

### 5. Import Cleanup

- Sort imports: external â†’ internal â†’ relative
- Remove unused
- Use barrel imports
- Absolute paths for internal

## Refactoring Patterns

### Extract to Hook

```tsx
// Before: Logic in component
const customer = useCustomer(id);

// After: useCustomer hook
// src/hooks/useCustomer.ts
export function useCustomer(id: string) {
  // ... logic here
}
```

### Extract to Component

```tsx
// Before: Inline Card usage
<View style={styles.card}><Text>{title}</Text></View>

// After: Reusable Card component
<Card title={title} />
```

### Extract Shared Type

```tsx
// Before: Duplicated type
interface Props { name: string; age: number; }

// After: Shared in src/utils/schemas.ts
import type { Person } from '@/utils/schemas'
```

### Extract Constants

```tsx
// Before: Hardcoded values
const colors = { primary: '#22C55E', ... }

// After: In theme.ts
import { colors } from '@/utils/theme'
```

## Reusability Checklist

- [ ] Can this component handle different data?
- [ ] Are props documented?
- [ ] Is it testable in isolation?
- [ ] Is styling flexible (props + children)?
- [ ] Does it handle edge cases?
- [ ] Error states handled?

## Anti-Patterns

- âŒ Creating wrapper just to wrap
- âŒ Over-engineering (YAGNI)
- âŒ Premature abstraction
- âŒ Breaking existing contracts
- âŒ Moving without reason

## When NOT to Refactor

- Working feature doing its job
- No clear reuse case
- Tight timeline
- Untested code
- Outside current scope

## Output Format

```
## Refactor: [What's being refactored]

### Current Issue
[Description of problem]

### Solution
[Proposed approach]

### Changes
- File A: [Change]
- File B: [Change]

### After
[Expected result]
```

---

*Loaded when: "refactor", "reuse", "extract", "cleanup", "improve"*
