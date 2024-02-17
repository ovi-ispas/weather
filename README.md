# 📦 Weather Monorepo

## 🧩 Component Library (Storybook)

- **Source:** `packages/ui-lib`
- **Deploy Preview:** [weather-ui.ovi-in-the.cloud](https://weather-ui.ovi-in-the.cloud)

## ☀️ Weather App (Remix with SSR)

- **Source:** `apps/remix-app`
- **Deploy Preview:** [weather-app.ovi-in-the.cloud](https://weather-app.ovi-in-the.cloud)

## 📝 Notes

- The weather app imports UI components from the component library (React) which are rendered on the server using **SSR** and then hydrated on the client to provide the best User Experience and improved Web Core Vitals metrics.

- It is built on standard Web Platform technologies with **Progressive Enhancement** in mind and it can also run WITHOUT JavaScript (you can try it by disabling javascript and reloading the page)! After the JS bundle loads, the navigation is automatically switched to Client-Side navigation and waterfall requests, race conditions and request cancelling is done out-of-the box.

- The app also uses **ONE** Web Component built using [Lit](https://lit.dev/) (the copyright element in the footer), where it has a minimal impact on the performance of the whole app due to the lack of SSR support (it can only load on the Client side).

## 📎 Related Github Repo

- [UI Libs & Monorepo Apps ](https://github.com/ovi-ispas/ui-lib-monorepo)

## 🏷️ About Author

- **Web:** [ovi.is](https://ovi.is)
- **Twitter:** [@ovi_ispas](https://twitter.com/ovi_ispas)
