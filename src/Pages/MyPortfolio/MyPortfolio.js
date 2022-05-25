import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h2 className='p-5 shadow-xl max-w-screen-md mx-auto rounded-md font-bold text-2xl text-primary border border-x-red-400'>My Portfolio</h2>
            <div className='lg:flex lg:justify-center'>
            <div className='card shadow p-5 mt-8 mx-auto w-96'>
                <p><span className='font-bold'>Name:</span> Pranta Das</p>
                <p><span className='font-bold'>email:</span>prantodas043@gmail.com</p>
                <h4 className='font-bold text-xl text-success'>Educational Background</h4>
                <p className='font-bold'>Secondary School Education</p>
                <p>Panjia Secondary School</p>
                <p>2011-2016</p>
                <p className='font-bold'>GPA: 5.00</p>
                <p className='font-bold'>Higher Secondary Education</p>
                <p>Jashore Cantonment College</p>
                <p>2016-2018</p>
                <p className='font-bold'>GPA: 4.42</p>
                <p className='font-bold'>Graduation</p>
                <p>Daffodil International University</p>
                <p>Dept. of CSE</p>
                <p className='font-bold'>Expected to be graduate in August,2022</p>
            </div>
            <div className='card shadow p-5 mt-8 mx-auto w-96'>
                <p className='font-bold text-xl text-success'>Skills</p>
                <ol>
                    <li className='pv-2'>1.HTML/HTML5</li>
                    <li className='pv-2'>2.CSS/CSS3</li>
                    <li className='pv-2'>3.Bootstrap</li>
                    <li className='pv-2'>4.Tailwind CSS</li>
                    <li className='pv-2'>5.JavaScript</li>
                    <li className='pv-2'>6.ES6</li>
                    <li className='pv-2'>7.React js</li>
                    <li className='pv-2'>8.Firebase</li>
                    <li className='pv-2'>9.Node js</li>
                    <li className='pv-2'>19.Express js</li>
                    <li className='pv-2'>11.Mongodb</li>
                    <li className='pv-2'>12.Figma</li>
                </ol>
            </div>
            <div className='card shadow p-5 mt-8 mx-auto w-96'>
                <p className='text-success text-xl font-bold'>My 3 websit link</p>
                <p className='py-5'><a href="https://daily-deals-react.web.app/" alt=''>https://daily-deals-react.web.app/</a></p>
                <p className='py-5'><a href="https://healthy-bite-dfbc3.web.app/" alt=''>https://healthy-bite-dfbc3.web.app/</a></p>
                <p className='py-5'><a href="https://playful-alfajores-13e073.netlify.app/" alt=''>https://playful-alfajores-13e073.netlify.app/</a></p>
            </div>
            </div>
        </div>
    );
};

export default MyPortfolio;