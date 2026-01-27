---
sidebar_position: 2
---
<div align="center">

```
     ____  ___________     __
   / __ \/ ____/ ____/    / /
  / / / / __/ / __/ __   / / 
 / /_/ / /___/ /___/ /__/ /  
/_____/_____/_____/\_//__/  
```

# DEEJ - Text Editor Extraordinaire

**Author:** `@Override`

![GitHub](https://img.shields.io/badge/Vim-Motions-%23019733?style=for-the-badge&logo=vim&logoColor=white)
![Editor](https://img.shields.io/badge/Text-Editor-%23007ACC?style=for-the-badge)
![Language](https://img.shields.io/badge/Built--in-Scripting-%23FF6B6B?style=for-the-badge)

**A powerful text editor with Vim motions and built-in text-based scripting capabilities**

</div>

---

## 📖 Table of Contents

- [Demo](#-demo)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Vim Motions Guide](#-vim-motions-guide)
- [Built-in Scripting Language](#-built-in-scripting-language)
- [TODO Function](#-todo-function)
- [Editor Modes](#-editor-modes)
- [Installation](#-installation)
- [Contributing](#-contributing)

---

## 🎬 Demo

<div align="center">

![DEEJ Demo](https://github.com/user-attachments/assets/4c6d22d8-7583-4079-9992-f0ebe3ebbd4e)

</div>

---

## ✨ Features

- 🎯 **Vim Motions** - Full Vim-style navigation and editing
- 📝 **Note-taking** - Efficient note-taking capabilities
- 🔧 **Text Editor** - Powerful text editing features
- 🚀 **Built-in Scripting** - Custom text-based scripting language
- ✅ **TODO Management** - Built-in TODO function for task tracking
- 🎨 **Multiple Modes** - Normal, Insert, and Visual modes

---

## 🚀 Getting Started

DEEJ is more than just a note-taking application—it's a comprehensive text editor with its own scripting language and powerful features for managing your workflow.

### Quick Start

1. Launch DEEJ
2. Use Vim motions to navigate (see guide below)
3. Switch between modes using the keybindings
4. Use the built-in TODO function to manage tasks

---

## 📚 Vim Motions Guide

### Navigation Commands

| Command | Normal Mode | Visual Mode | Insert Mode | Description |
|---------|-------------|-------------|-------------|-------------|
| **UP** | `j` | `j` | — | Move cursor up one line |
| **DOWN** | `k` | `k` | — | Move cursor down one line |
| **LEFT** | `h` | `h` | — | Move cursor left one character |
| **RIGHT** | `l` | `l` | — | Move cursor right one character |
| **NEXT WORD →** | `w` | `w` | — | Jump to next word (forward) |
| **PREV WORD ←** | `b` | `b` | — | Jump to previous word (backward) |

### Mode Switching

| Mode | From Normal | From Visual | From Insert | Description |
|------|-------------|-------------|-------------|-------------|
| **Normal** | — | `ESC` | `ESC` | Command and navigation mode |
| **Insert** | `i` | `i` | — | Text insertion mode |
| **Visual** | `v` | — | `ESC` then `v` | Text selection mode |

---

## 💻 Built-in Scripting Language

DEEJ features a powerful text-based scripting language that enables you to extend functionality directly within your documents.

---

## ✅ TODO Function

The TODO function allows you to create and manage task lists directly in your documents.

### Basic Syntax

The TODO function must follow this exact syntax:

```
**TODO**(item;)
```

### Key Rules

1. **Wrapper**: Must be wrapped with double asterisks: `**TODO**`
2. **Parentheses**: Must use `()` to contain items
3. **Semicolon**: Must end with a semicolon `;` inside the parentheses
4. **Multiple Items**: Separate items with commas `,`

### Examples

#### Single Item

```
**TODO**(finish documentation;)
```

Creates a TODO table with one item: "finish documentation"

#### Multiple Items

```
**TODO**(finish documentation, review code, update tests;)
```

Creates a TODO table with three items:
- finish documentation
- review code
- update tests

### Visual Example

<div align="center">

![TODO Function Demo](https://github.com/user-attachments/assets/4e164541-cc0b-4dfc-8073-961568486f28)

</div>

---

## 🎮 Editor Modes

### Normal Mode

Default mode for navigation and commands. Use this mode to:
- Navigate through your document
- Execute commands
- Enter other modes

**Enter Normal Mode:** Press `ESC` from any other mode

### Insert Mode

Text editing mode for inserting and modifying content.

**Enter Insert Mode:** Press `i` from Normal mode

### Visual Mode

Selection mode for highlighting and manipulating blocks of text.

**Enter Visual Mode:** Press `v` from Normal mode

---

## 📥 Installation

*Installation instructions coming soon*

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

---

## 📄 License

*License information to be added*

---

<div align="center">

**Made with ❤️ by @Override**

</div>
