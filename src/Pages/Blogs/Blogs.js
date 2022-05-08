import React from 'react';

const Blogs = () => {
    return (
        <div class="accordion w-50 mx-auto mt-5" id="accordionPanelsStayOpenExample">
            <h2>All queries Answer:</h2>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Q1: Difference between javascript and nodejs
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <h4>Javascript and Node.js </h4>
                        <ul>
                            <li>Javascript একটা programming language</li>
                            <li>Node.js একটা রান টাইম environment</li>
                            <li>Javascript ব্যবহার হয় font end এর জন্য</li>
                            <li>Node.js ব্যবহার হয় server site এর জন্য</li>
                            <li>Javascript শুধুমাত্র browser য়ে রান হয়</li>
                            <li>কিন্তু Node.js browser এর বাহিরে রান হতে সাহায্য করে</li>
                            <li>Javascript তৈরি হয়েছে c++ দিয়ে</li>
                            <li>আর Node.js তৈরি হয়েছে Javascript, c, c++ দিয়ে</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Q2: Differences between sql and nosql databases.
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        <h4>Differences between sql and nosql databases.</h4>
                        <ul>
                            <li>sql হলো Relational Database Management system.</li>
                            <li>NoSql হলো Non-relational database system</li>
                            <li>sql ডাটাবেজে data suitedable ভাবে থাকে না</li>
                            <li>nosql ডাটাবেজে data suitedable ভাবে থাকে</li>
                            <li>sql ডাটাগুলো verticalyy scalable</li>
                            <li>nosql ডাটাগুলো horizontally  scalable</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Q3. When should you use nodejs and when should you use mongodb
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <h5>When should you use nodejs and when should you use mongodb</h5>
                    <ul>
                        <li>আমাদের কোন react app তৈরি করতে গিয়ে যদি দেখি আমাদের সাইটে কোন data server থেকে আনতে হয় তখন আমরা node.js use করি। আর যখন আমাদের কাছে আমাদের app এর জন্য data থাকে তখন আমরা mongodb database add করি node.js এর সাথে। </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;