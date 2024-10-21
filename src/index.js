import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { motion } from "framer-motion";
import reportWebVitals from './reportWebVitals';


// lazy loading
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Suspense fallback={<> <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
    <span id='spanloading'>Loading...</span> </>
    }>
      <App />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
