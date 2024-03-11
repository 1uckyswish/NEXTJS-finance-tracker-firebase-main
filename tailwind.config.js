/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
 plugins: [require("daisyui")],
daisyui: {
    themes: [
      {
        'new drac': {
          

 'primary' : '#ff80bf',


          

 'primary-focus' : '#ffb3d9',


          

 'primary-content' : '#1b1c22',



          

 'secondary' : '#8aff80',


          

 'secondary-focus' : '#b9ffb3',


          

 'secondary-content' : '#1b1c22',



          

 'accent' : '#ffff80',


          

 'accent-focus' : '#ffffb3',


          

 'accent-content' : '#1b1c22',



          

 'neutral' : '#22212c',


          

 'neutral-focus' : '#1b1c22',


          

 'neutral-content' : '#d5ccff',



          

 'base-100' : '#302f3d',


          

 'base-200' : '#22212c',


          

 'base-300' : '#1b1c22',


          

 'base-content' : '#d5ccff',



          

 'info' : '#6EBDFF',


          

 'success' : '#77dd77',


          

 'warning' : '#FF964F',


          

 'error' : '#FF3D33',



          

'--rounded-box': '1rem',          


          

'--rounded-btn': '.5rem',        


          

'--rounded-badge': '1.9rem',      



          

'--animation-btn': '.25s',       


          

'--animation-input': '.2s',       



          

'--btn-text-case': 'uppercase',   


          

'--navbar-padding': '.5rem',      


          

'--border-btn': '1px',            


        },
      },
    ],
  },
  
};
