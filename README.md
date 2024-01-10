# Spright

Welcome to the Spright monorepo. This repository is used to build UI components and patterns using the [Nimble Design System](https://nimble.ni.dev) technology stack.

## What are the different types of Spright components?

Examples include:
1. "Molecule" components which combine Nimble "atom" components. For example, a group of card buttons with a specific layout.
2. Product-specific components. For example, a configuration pane that uses product-specific terminology or connects to a product-specific data model.
3. Data-connected components. For example, a table that populates itself by making HTTP requests to a specific service.
4. Experimental components that are trying out new UX patterns to see if they should someday be promoted to Nimble.

## How are Spright components organized?

Spright components are organized into packages by product. Each product can provide one or more component packages built on FAST and Nimble (analagous to `@ni/nimble-components`). They may optionally also provide Angular and Blazor integration packages for those components, analagous to `@ni/nimble-angular` and `NimbleBlazor`. If a component is needed by multiple products, we can consider adding it to a core Spright package or to Nimble itself.
