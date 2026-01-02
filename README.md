![Uploading Screenshot 2026-01-02 130235.png…]()
![Uploading Screenshot 2026-01-02 130223.png…]()
📸 React Image Gallery with Pagination

A responsive React application that fetches and displays images from the Picsum API with smooth pagination. Users can navigate between pages using Next and Prev buttons, while a loading state ensures a good user experience during data fetching.

🚀 Features

📄 Paginated image gallery

🔄 Dynamic data fetching using Axios

⚛️ Built with React Hooks (useState, useEffect)

🧩 Reusable Card component

⏳ Loading indicator during API calls

🎨 Styled using Tailwind CSS

🌐 External image links open in new tab

🛠️ Tech Stack

React (Vite)

Axios

Tailwind CSS

Picsum Photos API

📂 Project Structure
src/
│── Components/
│   └── Card.jsx
│── App.jsx
│── main.jsx

⚙️ How It Works

index state controls pagination

useEffect triggers API call whenever index changes

Images are rendered using a reusable Card component

Loading text appears while data is being fetched

▶️ Run Locally
npm install
npm run dev

📌 API Used
https://picsum.photos/v2/list?page=1&limit=30

💡 Learning Outcomes

Understanding React render cycle

Proper use of useEffect dependency array

State batching & async state updates

Component reusability & pagination logic
