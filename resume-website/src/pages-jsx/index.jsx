import React from 'react';
import * as motion from "framer-motion/client";
import ReactDOM from 'react-dom/client';
import reportWebVitals from '../reportWebVitals';

const Index = (
  <div>
    <h1>Main Page</h1>
    <body>
    <nav>
        <a href="index.html">Logo</a>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="resume.html">Resume</a></li>
            <li><a href="touchdesigner.html">Touchdesigner</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    <Section>
        <h1>Main Page</h1>
        <p>Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Illum eos maxime, inventore cum, eius iste veritatis 
        libero excepturi facere necessitatibus, consectetur vel nam! Distinctio sint eligendi
        inventore ad facilis optio.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eum accusantium expedita neque at incidunt soluta. Modi et maiores, iusto, a illo eaque sequi
        quae magni blanditiis quis officia minus similique!</p>
    </Section>
    </body>
  </div>
);

ReactDOM.render(Index, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
