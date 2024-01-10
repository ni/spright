# Contributing to Spright

This repository generally uses the same tooling and policies as Nimble. Review the [Nimble CONTRIBUTING document](https://github.com/ni/nimble/blob/main/CONTRIBUTING.md) for an overview. This document describes areas where Spright varies from Nimble.

## Code ownership

The Nimble team provides high-level oversight of this repo but the code in this repository is inner source. Packages are owned by the team that created them. Bug fixes and new features should be contributed by the team that needs them.

## Code quality

Code should adhere to NI and Nimble standards for quality and test coverage. Spright components may choose to compromise from Nimble standards on features like visual design or API breadth, but should always have a level of quality suitable for use in production applications.

## Documentation

Storybook documentation for components should include a **Usage Guidance** section that explains what the component should and should not be used for. This could include information about feature gaps, guidance about when to use the component rather than a comparable Nimble component, and context about why the component is in Spright rather than Nimble.
