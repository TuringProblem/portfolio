# Installation Guide

This guide provides detailed installation instructions for the Shifty Neovim plugin.

## Prerequisites

Before installing Shifty, ensure you have:

- Neovim 0.7.0 or higher
- Git (for cloning the repository)
- Language runtimes for the languages you want to use:
  - Python 3.6+
  - Node.js (for JavaScript)
  - Rust compiler (rustc)
  - Java (JDK 8+)
  - GCC or Clang (for C/C++)
  - Lua interpreter (optional)

## Installation Methods

### Using Lazy.nvim (Recommended)

Add this to your Neovim configuration:

```lua
{
  "TuringProblem/shifty-vim",
  config = function()
    require("shifty").setup({
      keymaps = {
        toggle = "<leader>st",
        run = "<leader>sr",
        clear = "<leader>sc",
      }
    })
  end,
}
```

### Using Packer

```lua
use {
  'TuringProblem/shifty-vim',
  config = function()
    require("shifty").setup({
      keymaps = {
        toggle = "<leader>st",
        run = "<leader>sr", 
        clear = "<leader>sc",
      }
    })
  end
}
```

### Using vim-plug

Add to your init.vim or init.lua:

```vim
Plug 'TuringProblem/shifty-vim'
```

Then run `:PlugInstall`

### Manual Installation

1. Clone the repository:
```bash
git clone https://github.com/TuringProblem/shifty-vim.git ~/.local/share/nvim/site/pack/plugins/start/shifty-vim
```

2. Add the setup configuration to your Neovim config:
```lua
require("shifty").setup({
  -- your configuration here
})
```

## Post-Installation

1. Restart Neovim
2. Test the installation by running `:ShiftyInfo`
3. Create a test file and try executing a code block

## Verification

To verify the installation worked correctly:

1. Create a new file: `test_shifty.md`
2. Add a code block:
   ````markdown
   ```python
   print("Hello from Shifty!")
   ```
   ````
3. Place your cursor in the code block
4. Run `:ShiftyToggle` to open the REPL window
5. Run `:ShiftyRun` to execute the code

If you see "Hello from Shifty!" in the output window, the installation was successful!

## Troubleshooting

If you encounter issues during installation:

1. Check Neovim version: `:version`
2. Verify language runtimes are installed and in PATH
3. Check for plugin conflicts
4. Review the error messages carefully

For more help, see the main [documentation](./Shifty.md) or file an issue on GitHub.