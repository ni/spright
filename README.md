# Spright

Welcome to the Spright monorepo. This repository is used to build UI components and patterns using the [Nimble Design System](https://nimble.ni.dev) technology stack.

## What are the different types of Spright components?

Examples include:
1. "Molecule" components which combine Nimble "atom" components. For example, a group of card buttons with a specific layout.
2. Product-specific components. For example, a configuration pane that uses product-specific terminology or connects to a product-specific data model.
3. Data-connected components. For example, a table that populates itself by making HTTP requests to a specific service.
4. Experimental components that are trying out new UX patterns to see if they should someday be promoted to Nimble.

## How are Spright components organized?

Spright components are organized into packages by product. Each product can provide one or more component packages built on FAST and Nimble (analogous to `@ni/nimble-components`). They may optionally also provide Angular and Blazor integration packages for those components, analogous to `@ni/nimble-angular` and `NimbleBlazor`. If a component is needed by multiple products, we can consider adding it to a core Spright package or to Nimble itself.

## Why Spright?

"Spright" is an archaic variant of "sprite" that is the root of "sprightly"; think of it as a rapidly moving peer of Nimble.

This concept is inspired by the "recipes" concept in [Design System Pace Layers](https://bigmedium.com/ideas/design-system-pace-layers-slow-fast.html). The goals are:

1. Keep Nimble's core components at a high level of quality and reusability.
2. Allow innovative new contributions to follow Nimble's architecture, leverage its infrastructure, and start on a path to being part of Nimble without being unnecessarily slowed by the rigorous process needed to achieve the first goal.
