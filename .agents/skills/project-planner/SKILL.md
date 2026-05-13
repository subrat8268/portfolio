---
name: project-planner
description: Task breakdown, work estimation, and project planning for KredBook.
---

# Project Planner Skill

> Task breakdown, work estimation, and project planning for KredBook.

## When to Use

- Starting new feature work
- Breaking down requirements
- Estimating effort
- Planning sprints
- Setting up new modules

## Planning Framework

### 1. Understand Before Planning

Before creating a plan:
- Read `docs/prd.md` for product requirements
- Read `docs/ARCHITECTURE.md` for system design
- Read `docs/design-system.md` for UI requirements
- Understand existing code structure

### 2. Task Decomposition

Break down into:
1. **Atomic tasks** - Single file/small change
2. **Dependent tasks** - Must complete before others
3. **Parallel tasks** - Can do simultaneously

### 3. Estimation Guide

| Type | Example | Time |
|------|---------|------|
| Simple | Add a button | 15 min |
| Medium | New list with state | 1-2 hr |
| Complex | New screen flow | 4-8 hr |
| Very Complex | New feature | 1+ day |

### 4. Work Unit Template

```
## [Feature Name]

### Phase 1: Foundation
- [ ] Task 1
- [ ] Task 2

### Phase 2: Core Implementation  
- [ ] Task 3
- [ ] Task 4

### Phase 3: Polish
- [ ] Task 5
- [ ] Task 6

### Notes
- [Key decisions, dependencies]
```

## Standard Workflow

For any feature:

1. **Plan** â†’ break into tasks
2. **Tech Lead** â†’ architecture review (if complex)
3. **Implementation** â†’ build incrementally
4. **Review** â†’ code reviewer check
5. **Polish** â†’ UI designer check
6. **Refactor** â†’ if needed

## Common Patterns

### New Screen
1. Create component in `src/components/[feature]/`
2. Add route in `app/`
3. Add store if needed in `src/store/`
4. Add API if needed in `src/api/`

### New Component
1. Place in appropriate folder
2. Follow existing patterns
3. Use design tokens
4. Add to index.ts if folder has barrel

### New API
1. Use Supabase MCP
2. Create typed function
3. Add to React Query hook
4. Add error handling

### New Data Type
1. Add to `src/utils/schemas.ts`
2. Use for state, props
3. Share across features

## Complexity Indicators

### Low Complexity (1-2 hrs)
- Single component change
- Small UI fix
- Single file edit

### Medium Complexity (2-8 hrs)
- New component with state
- New screen flow
- Simple feature

### High Complexity (8+ hrs)
- New feature across screens
- Database changes
- Complex navigation

## Output Format

```
## Plan: [Feature Name]

### Overview
[2-3 sentence description]

### Tasks

| # | Task | Type | Estimate | Depends |
|---|------|------|---------|---------|
| 1 | [Task] | [Component/State/...] | [Time] | - |
| 2 | [Task] | ... | ... | 1 |

### Execution Order
1. Task 1 (foundation)
2. Task 2 (depends on 1)
...

### Risks
- [Potential issues to watch]

### Success Criteria
- [How to verify done]
```

---

*Loaded when: "plan", "break down", "estimate", "task", "feature"*
