Code Review and Documentation
1. Libraries & Frameworks Used
Tool Purpose
React.js- Main frontend framework for building the dashboard UI
Vite- Frontend build tool for fast development and hotreloading
JavaScript(ES6)- Language used for building logic and components
HTML & CSS- Structure and styling of the user interface

2. Key Components & Functions
-App.jsx
• Main entry point of the application.
• Fetches mock data from /public/data.json using fetch() in useEffect.
• Holds application state:
o user (profile data)
o tasks (task list)
• Handles:
o toggleTask() – toggles task completion status
o updateUser() – updates profile info
-components/Profile.jsx
• Displays user profile with:
o Image
o Name
o Email
• Includes editable form to update profile data.
• Has editing state to toggle between view and edit modes.
• Shows circular profile image with gradient border.
-components/TaskList.jsx
• Lists tasks with checkboxes.
• Uses onToggle(task.id) to handle completion.
• Applies line-through style for completed tasks.
• UI features gradient hover and responsive design.
-components/Statistics.jsx
• Calculates:
o completed tasks
o pending tasks
• Shows a progress bar visually representing task completion.

3. Folder Structure Overview
── public/
 ── data.json # Mock API data (user info & tasks)
 ── src/
 ── components/
 ── Profile.jsx # User profile display + edit form
 ── TaskList.jsx # Task list with checkboxes
 ── Statistics.jsx # Statistics and progress bar

 ── App.jsx # Main app logic and state management
 ── main.jsx # React DOM entry point
 ── App.css # Global and component-specific styles
 ── index.html # Root HTML file
── package.json # Project metadata and dependencies
