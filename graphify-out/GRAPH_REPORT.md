# Graph Report - .  (2026-05-15)

## Corpus Check
- Corpus is ~13,448 words - fits in a single context window. You may not need a graph.

## Summary
- 105 nodes · 78 edges · 1 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_UI Components|UI Components]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 19 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (36 total, 1 thin omitted)

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `UI Components` to `Alert Dialog`, `Breadcrumb`, `Context Menu`, `Avatar`, `Card`, `Carousel`, `Tooltip`, `Alert`, `Calendar`?**
  _High betweenness centrality (0.312) - this node is a cross-community bridge._
- **Should `UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._