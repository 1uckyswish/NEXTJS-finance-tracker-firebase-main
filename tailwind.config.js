/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'auto': 'auto', // add auto width option
      }
    },
  },
   plugins: [require('daisyui')],
   daisyui: {
    themes: [
      {
        'dracula': {
          

 'primary' : '#ff80bf',


          

 'primary-focus' : '#ffb3d9',


          

 'primary-content' : '#1b1c22',



          

 'secondary' : '#b9ffb3',


          

 'secondary-focus' : '#8aff80',


          

 'secondary-content' : '#1b1c22',



          

 'accent' : '#ffffb3',


          

 'accent-focus' : '#ffff80',


          

 'accent-content' : '#1b1c22',



          

 'neutral' : '#22212c',


          

 'neutral-focus' : '#1b1c22',


          

 'neutral-content' : '#d5ccff',



          

 'base-100' : '#302f3d',


          

 'base-200' : '#22212c',


          

 'base-300' : '#1b1c22',


          

 'base-content' : '#d5ccff',



          

 'info' : '#1c92f2',


          

 'success' : '#8cdec0',


          

 'warning' : '#ff9900',


          

 'error' : '#ff5724',



          

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
