# 📝 Notes App – React

A simple, clean and responsive Notes Taking Application built using **React.js** and **Tailwind CSS**.  
This app allows users to quickly add and delete notes in real time with a beautiful sticky-note style UI.

---

## 🚀 Features

- ✍️ Add new notes with title and description  
- 🗑️ Delete notes instantly  
- ⚡ Real-time updates using React state  
- 📱 Fully responsive layout  
- 🎨 Modern and minimal user interface  
- 💻 Built using functional components and hooks  

---

## 🛠️ Tech Stack

- **React.js** – Frontend Library  
- **Tailwind CSS** – Styling  
- **Lucide React** – Icons  
- **JavaScript (ES6+)**

---

## 📸 Application Overview

The app has two main sections:

### Left Section
- Form to add new notes  
- Input field for note title  
- Textarea for note details  
- Submit button to add note  

### Right Section
- Displays all recently added notes  
- Each note is shown as a sticky note card  
- Delete button available on each note  

---

## ⚙️ Installation & Setup

Follow the steps below to run this project on your local system:

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to Project Folder

```bash
cd notes-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## 📂 Project Structure

```
notes-app/
│── src/
│   │── App.jsx        # Main application component
│   │── main.jsx       # React root file
│   │── index.css      # Tailwind CSS styles
│── package.json
│── vite.config.js
│── README.md
```

---

## 🧩 How the App Works

- The application uses React `useState` hooks to manage:
  - Note title  
  - Note details  
  - List of notes  

### Adding a Note

- User enters title and details  
- Clicks **Add Note** button  
- Data is stored in state array  
- UI updates instantly  

### Deleting a Note

- Each note card has a delete button  
- Clicking it removes that note from state  
- UI re-renders immediately  

---

## 💻 Code Highlights

### State Management

```javascript
const [title, setTitle] = useState('')
const [details, setDetails] = useState('')
const [task, setTask] = useState([])
```

### Add Note Function

```javascript
const submitHandler = (e) => {
  e.preventDefault();
  const copyTask = [...task];
  copyTask.push({ title, details });
  setTask(copyTask);
  setTitle('');
  setDetails('');
}
```

### Delete Note Function

```javascript
const deleteNote = (idx) => {
  const copyTask = [...task];
  copyTask.splice(idx, 1);
  setTask(copyTask);
}
```

---

## 🔮 Future Enhancements

Some features that can be added in future versions:

- ✏️ Edit existing notes  
- 💾 Save notes using Local Storage  
- 🔍 Search and filter notes  
- 🏷️ Add tags or categories  
- 🌙 Dark / Light mode toggle  
- 📌 Pin important notes  

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the project  
2. Create your feature branch  
3. Commit your changes  
4. Push to the branch  
5. Open a pull request  

---

## 📜 License

This project is completely free to use and open-source.

---

### ⭐ If you found this project helpful, please give it a star on GitHub!
