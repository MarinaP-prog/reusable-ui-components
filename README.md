## 🧱 Component Structure

This project follows a modular architecture with fully reusable, dynamic UI components. Each component lives in its own
folder, has isolated logic and styling, and is designed for easy scaling and clean code practices.

---

### 🔄 Component Philosophy

Each component is:

- **Isolated** – lives in its own directory with separate logic and styles
- **Dynamic** – built from data using utility functions
- **Reusable** – can be inserted anywhere with custom content
- **Self-contained** – manages its own event handling and state

---

### 📦 What Each Component Does

- **`burger/`**  
  Responsive mobile navigation (burger menu).  
  Includes toggle logic, dropdowns, and click-outside detection.

- **`navigation/`**  
  Desktop navigation bar with dropdowns on hover.  
  Renders links dynamically via `createNavLinks`.

- **`accordion/`**  
  Accordion section with collapsible items.

- **`blog/`**  
  Dynamically generated blog cards.  
  Displays title, content preview, and a buttons.  
  Full post is shown directly on the page (not via modal).

- **`search/`**  
  Contains logic and UI components for searching blog articles by title or author.

- **`pagination/`**  
  Contains logic and UI components for paginating article lists.

---

### 🧰 Utility Functions (`/utils`)

- **`createNavLinks.js`**  
  Creates `<ul>` navigation from an array of links, with optional dropdowns.
-
- **`blogUtils.js`**  
  Handles storing and retrieving blog-related data from `localStorage`.

- **`filteredItems.js`**  
  Filters and displays articles based on selected criteria.

- **`idGenerator.js`**  
  Generates unique IDs and stores them in `localStorage` for later use.

---

### 🔗 How It All Works Together

1. `index.js` imports components and utility functions.
2. Components are rendered dynamically based on data structures.
3. Each UI element is inserted into the DOM in its dedicated container.
4. CSS is scoped per component to ensure clean separation.
5. Responsive design is implemented:
    - Burger menu appears on small screens.
    - Desktop navigation hides on mobile; the search bar is placed above the articles.

---

### 💡 Why This Structure

- Encourages **clean code and separation of concerns**
- Prepares for frameworks like **React**
- Makes components **easy to test, scale, and maintain**
- Helps practice **modular thinking** from day one