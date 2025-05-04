# Create a new Vite project
npm create vite@latest saad-portfolio -- --template react

- React
- Javascript

# Navigate into the project directory
cd saad-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Configure Tailwind to use Poppins font as default
1. Open `tailwind.config.js` and add the following to the `theme` section:
   ```javascript
   theme: {
     extend: {
       fontFamily: {
         sans: ['Poppins', 'sans-serif'],
       },
     },
   },
   ```

2. Import the Poppins font in your CSS file (e.g., `index.css`):
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
   ```

3. Ensure the `content` array in `tailwind.config.js` includes paths to all your template files, e.g.,:
   ```javascript
   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
   ```