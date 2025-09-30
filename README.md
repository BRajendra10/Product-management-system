## Product Management App

This is a simple Product Management App built with React and Redux Toolkit, featuring a backend powered by JSON Server. The app allows you to view and add products, with all data updates reflected in real time on the server. State management is handled globally using Redux Toolkit, not local component state.

### Features

- **Backend Setup:** Uses [JSON Server](https://github.com/typicode/json-server) to provide a mock REST API for products.
- **Redux Toolkit:** State management is implemented using Redux Toolkit for predictable and scalable state updates.
- **Fetch & Post:** Products are fetched from and posted to the JSON Server using Redux async thunks.
- **Add Product:** Users can add new products through a form. On submission, the product is posted to the server and the UI updates in real time.
- **Real-Time Updates:** All product data is synced with the server, ensuring the UI always reflects the latest data.
- **No Local State:** All product-related state is managed via Redux Toolkit, not local React state.

### Getting Started

1. **Install dependencies:**
	```bash
	npm install
	```

2. **Start JSON Server:**
	```bash
	npx json-server --watch src/db.json --port 3001
	```

3. **Start the React App:**
	```bash
	npm run dev
	```

### Project Structure

- `src/features/ProductsSlice.js`: Redux slice for product state and async actions (fetch, add).
- `src/screens/AddProduct.jsx`: Form to add new products.
- `src/screens/Products.jsx`: Displays the list of products.
- `src/db.json`: JSON Server database file.
- `src/store/store.js`: Redux store setup.

### Notes

- All product data is managed globally via Redux Toolkit.
- Adding a product updates the server and Redux state in real time.
- No product state is stored locally in React components.

---
Feel free to customize and extend this app for your own product management needs!

