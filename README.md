# Checkbox task

Cross-platform desktop application that demonstrates a master checkbox for controlling a group of child checkboxes.

The project is implemented with **React 19**, **TypeScript**, **Vite**, and **Tauri 2**. The web UI is packaged as a native desktop application by Tauri, while the checkbox behavior is kept in a reusable React component and custom hook.

## Behavior

- Clicking a child checkbox toggles only that checkbox.
- The master checkbox automatically reflects the current group state.
- Clicking the master checkbox selects all children when none are selected, and clears all children otherwise.
- The partial state is displayed with a minus icon; the full state is displayed with a check icon.

## Project structure

```text
src/
├── App.tsx
└── components/MultiCheckbox/
    ├── CheckboxList.tsx   # Compound components and checkbox context
    ├── MultiCheckbox.tsx  # Public component exports
    ├── useCheckboxes.ts   # React state and checkbox actions
    ├── helpers.ts         # State-map and aggregate-state logic
    └── types.ts           # Checkbox data types and aggregate states
src-tauri/                 # Tauri application and desktop configuration
```

## Requirements

### Tooling

- Bun
- Node.js
- JavaScript
- Rust
- Cargo

### Linux system dependencies

- `ibsoup3-devel`
- `javascriptcoregtk4.1-devel`
- `webkit2gtk4.1-devel`

## Development

Install dependencies:

```bash
bun install
```

Start the web development server:

```bash
bun run dev
```

Run the Tauri desktop application in development mode:

```bash
bun run tauri dev
```

Initialize the Android project once:

```bash
bun run tauri android init
```

Run the application on an Android emulator or connected device:

```bash
bun run tauri android dev
```

Create a production frontend build:

```bash
bun run build
```

## Technology stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Icons
- Tauri 2 + Rust
