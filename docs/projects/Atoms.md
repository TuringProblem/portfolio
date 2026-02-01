---
sidebar_position: 1
---

<div align="center">

# ⚛️ Atoms

### A Modern Typst UI Library for Computer Science

**Build beautiful papers, research documents, and brainstorming materials with elegant, reusable components**

![Typst](https://img.shields.io/badge/Typst-UI_Library-%23239DAD?style=for-the-badge&logo=typst&logoColor=white)
![Status](https://img.shields.io/badge/Status-Beta-%23FFA500?style=for-the-badge)
![Components](https://img.shields.io/badge/Components-Growing-%2300C853?style=for-the-badge)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Installation](#-installation)
- [Components](#-components)
  - [Card](#-card)
  - [Button](#-button)
- [Usage Examples](#-usage-examples)
- [API Reference](#-api-reference)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)

---

## 🎯 Overview

Atoms is a comprehensive UI component library for [Typst](https://typst.app/), designed specifically for computer science papers, research documents, and technical brainstorming materials. Build professional-looking documents with modular, customizable components.

### Why Atoms?

- 🎨 **Beautiful Defaults** - Carefully crafted components that look great out of the box
- 🔧 **Highly Customizable** - Fine-tune every aspect to match your style
- 📚 **Research-Focused** - Built with academic and technical writing in mind
- 🚀 **Easy to Use** - Simple, intuitive API for rapid development

> **Note:** Atoms is currently in Beta. APIs may change as we refine the library based on user feedback.

---

## 📥 Installation

```typst
// Import individual components
#import "@preview/atoms:0.1.0": card, basicButton

// Or import the entire library
#import "@preview/atoms:0.1.0": *
```

*Note: Package installation instructions will be updated once published to Typst Universe.*

---

## 🧩 Components

### 🃏 Card

Create visually appealing card components with headers, custom styling, and flexible content areas. Perfect for highlighting key information, creating callouts, or organizing content into distinct sections.

**Status:** 🚧 In Active Development

#### Features

- Custom headers with title and icon support
- Configurable padding, border radius, and borders
- Flexible content area
- Responsive design

#### Quick Example

```typst
#import "src/molecules/cards/example.typ": *

#let myCardConfig = (
    header: (
        title: "Important Note",
        icon: emoji.hand
    ),
    padding: 16pt,
    radius: 8pt,
    border: (
        width: 0.5pt,
        color: none,
        style: "solid"
    ),
)

#card(config: myCardConfig)[
    This is the content inside your card.
    Add any Typst content here!
]
```

#### Visual Example

<div align="center">

<img src="https://raw.githubusercontent.com/TuringProblem/atoms/refs/heads/main/images/example-card.gif" />

</div>

#### Configuration Options

| Parameter | Type | Description |
|-----------|------|-------------|
| `header` | Dictionary | Header configuration with `title` and `icon` |
| `padding` | Length | Internal padding of the card |
| `radius` | Length | Border radius for rounded corners |
| `border` | Dictionary | Border styling with `width`, `color`, and `style` |

---

### 🔘 Button

Flexible button component with multiple variants, sizes, and full styling control. Create consistent, professional buttons throughout your documents.

**Status:** ✅ Stable

#### Features

- Multiple variants (primary, secondary, etc.)
- Custom colors for background, stroke, and text
- Adjustable sizing and dimensions
- Block-level or inline display options

#### Quick Example

```typst
#import "src/molecules/buttons/basic.typ": *

#basicButton(
    [Click Me!],
    variant: "secondary",
    bg-color: rgb("#000000"),
    stroke: 0.5pt + rgb("#ff0000"),
    text-color: rgb("#00ff00"),
    radius: 8pt,
    width: 100%,
)
```

#### Visual Example

<div align="center">

<img src="https://github.com/TuringProblem/atoms/blob/main/images/example-buttons.gif?raw=true" />

</div>

#### API Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `content` | Content | ✅ | Button text or content |
| `variant` | String | ✅ | Button style variant (e.g., "primary", "secondary") |
| `size` | String | ✅ | Button size preset |
| `fill` | Color | ❌ | Background fill color |
| `stroke` | Length + Color | ❌ | Border stroke styling |
| `text-color` | Color | ❌ | Text color override |
| `radius` | Length | ❌ | Border radius for rounded corners |
| `width` | Length | ❌ | Button width (use `100%` for full width) |
| `block` | Boolean | ❌ | Display as block-level element |

---

## 💡 Usage Examples

### Creating a Styled Research Card

```typst
#let researchCard = (
    header: (
        title: "Key Finding",
        icon: emoji.lightbulb
    ),
    padding: 20pt,
    radius: 12pt,
    border: (
        width: 1pt,
        color: rgb("#239DAD"),
        style: "solid"
    ),
)

#card(config: researchCard)[
    Our analysis shows a 47% improvement in processing time
    when using the optimized algorithm compared to the baseline.
]
```

### Button Variations

```typst
// Primary Action Button
#basicButton(
    [Submit Paper],
    variant: "primary",
    bg-color: rgb("#239DAD"),
    text-color: white,
    width: 100%,
)

// Secondary Button
#basicButton(
    [Cancel],
    variant: "secondary",
    stroke: 1pt + rgb("#999999"),
    radius: 4pt,
)
```

---

## 📚 API Reference

### Type Definitions

- **Dictionary**: [Typst Dictionary Type](https://typst.app/docs/reference/foundations/dictionary/)
- **String**: [Typst String Type](https://typst.app/docs/reference/foundations/str/)
- **Color**: [Typst Color Type](https://typst.app/docs/reference/visualize/color/)
- **Length**: [Typst Length Type](https://typst.app/docs/reference/layout/length/)

---

## 🗺️ Roadmap

### Coming Soon

- [ ] **Alert Components** - Success, warning, error, and info alerts
- [ ] **Badge Components** - Labels and status indicators
- [ ] **Tooltip Components** - Contextual hover information
- [ ] **Grid System** - Flexible layout components
- [ ] **Table Enhancements** - Styled table components
- [ ] **Code Block Styling** - Enhanced code display options

### In Progress

- [x] Button Component (Stable)
- [ ] Card Component (Active Development)

---

## 🤝 Contributing

Contributions are welcome! Whether it's bug reports, feature requests, or code contributions, we'd love your help making Atoms better.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-component`)
3. Commit your changes (`git commit -m 'Add amazing component'`)
4. Push to the branch (`git push origin feature/amazing-component`)
5. Open a Pull Request

---

## 📄 License

*License information to be added*

---

<div align="center">

**Built with ❤️ for the Typst community**

[Documentation](https://github.com/TuringProblem/atoms) • [Report Bug](https://github.com/TuringProblem/atoms/issues) • [Request Feature](https://github.com/TuringProblem/atoms/issues)

</div>
