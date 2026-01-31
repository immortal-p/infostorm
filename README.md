# 🌪 Infostorm — RSS Aggregator

Infostorm is a lightweight, modern **RSS aggregator** built with **React + TypeScript**. It allows users to subscribe to multiple RSS feeds and read updates from different sources in one clean, fast interface.

The project focuses on **simplicity, performance, and modern tooling**, and is optimized for easy deployment on platforms like **Vercel**.

---

## 🚀 Features

* 📡 Subscribe to RSS feeds via URL
* 📰 Aggregate posts from multiple sources
* ✅ URL validation and error handling
* 👁 Mark posts as read / unread
* 🌍 Internationalization support (i18n)
* ⚡ Fast build and optimized production bundle
* 🎨 Utility-first styling with Tailwind CSS v4

---

## 🛠 Tech Stack

* **React** — UI library
* **TypeScript** — static typing
* **Vite** — fast build tool and dev server
* **Tailwind CSS v4** — styling (CSS Engine mode)
* **Redux** — state management
* **i18next** — internationalization

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/immortal-p/infostorm.git
cd infostorm
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 🏗 Production Build

To build the project for production:

```bash
npm run build
```

The optimized static files will be generated in the `dist/` directory and are ready to be deployed (for example, on **Vercel**).

---

## 📁 Project Structure

```
infostorm/
├─ src/
│  ├─ app/            # Application entry and providers
│  ├─ components/     # UI components
│  ├─ shared/         # Shared utilities and logic
│  ├─ locales/        # Translation resources
│  └─ index.css       # Tailwind entry point
├─ index.html
├─ package.json
├─ tailwind.config.ts
├─ vite.config.ts
└─ README.md
```

---

## 🎨 Tailwind CSS Configuration

This project uses **Tailwind CSS v4 in CSS Engine mode**.

Tailwind is imported directly in CSS without PostCSS:

```css
@import "tailwindcss";
```

This approach:

* removes the need for PostCSS configuration
* speeds up the build process
* reduces CSS output size
* avoids legacy `@tailwind base/components/utilities` directives

---

## 🌍 Internationalization (i18n)

Infostorm supports multiple languages using **i18next**. All translation files are located in:

```
src/locales/
```

This allows easy extension and localization of the application.

---

## 🤝 Contributing

Contributions are welcome!

To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes using clear commit messages
4. Open a Pull Request

Please try to follow **conventional commit** style where possible.

---

## 📄 License

This project is licensed under the terms specified in the `LICENSE` file (if present).

---

## 💡 Notes

Infostorm is designed as a clean portfolio-quality project demonstrating:

* modern frontend architecture
* performance-aware build configuration
* practical usage of React, TypeScript, and Tailwind

If you have questions or suggestions — feel free to open an issue.
