# TODO APP USING REACT JS AND TAILWIND CSS 
### Setting up project 

npm create vite@latest
cd projectname
npm install 
npm run dev 


# installing tailwind 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# building
npm run build
npm run preview

# deploying  Netlify CLI
npm install -g netlify-cli

#### Create a new site in Netlify
ntl init

##### Deploy to a unique preview URL
ntl deploy
netlify deploy --prod