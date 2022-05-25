import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Questiion 1.</h2>
                    <p className='font-bold text-success'>How will you improve the performance of a React Application?</p>
                    <p>Answer:There are a lot possible ways to improve the performancr of A React Application.Like we can use react fragment to avoid adding extra node to the DOM.When working with React, there are cases where we will need to render multiple elements or return a group of related items.To make the render smooth we can use the react fragment.Another way of optimizing a React app is by making sure we bundle our app for production before deploying. By default, our app is in development mode, which means React will include helpful warnings. This can be very useful while we are developing.We can also use react lazy and react suspense for lazy loading components.Lazy loading is a great technique for optimizing and speeding up the render time of our app. The idea of lazy loading is to load a component only when it is needed. React comes bundled with the React.lazy API so that we can render a dynamic import as a regular component.We can use react memorization for component memorization. When a function is rendered using this technique, it saves the result in memory, and the next time the function with the same arguments is called it returns the saved result without executing the function again, saving us bandwidth.Besides we should avoid anonymous function.Because anonymous functions are not assigned an identifier they are not persistent whenever a component inevitably gets rendered again. This causes  to allocate new memory each time this component is re-rendered, instead of allocating a single piece of memory only once, like when named functions are being used.This how we can improve the experience of react application. </p>
                </div>
                <div class="card-body">
                    <h2 class="card-title">Questiion 2.</h2>
                    <p className='font-bold text-success'>What are the different ways to manage a state in a React application?</p>
                    <p>There are four types of state we need to manage in our react app.Local state,global state,server state ,url state.There are a lot ways to manage state in react.Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in a manner way because each state update re-renders all relevant components.Global state is data we manage across multiple components and it is necessary when we want to get and update data anywhere in our app, or in multiple components at least.For server state data that comes from an external server that must be integrated with our UI state.For url state data that exists on our URLs, including the pathname and query parameters.</p>
                </div>
                <div class="card-body">
                    <h2 class="card-title">Questiion 3.</h2>
                    <p className='font-bold text-success'>How does prototypical inheritance work?</p>
                    <p>Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.In a word,
                        prototypical inheritance refers to the ability to access object properties from another object. We use a javascript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our js code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one javascript object to another through a reference pointer function.
                        When we attempt to access a property or method of an object, javascript will first search on the object itself, and if it is not found, it will search the objects prototype. If after finding in both the object and its prototype still no match is found, javascript will check the prototype of the linked object, and continue searching until the end of the prototype chain is completed.
                    </p>
                </div>
                <div class="card-body">
                    <h2 class="card-title">Questiion 4.</h2>
                    <p className='font-bold text-success'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
                    <p>To implement the search the product by name if the product name is unique we can use the 'find' javascript array methods.Using find it wiil loop through every product once it get the first matched product name it will return the product as an object.If there are possibility of having duplicate names we can use the 'filter' method that will return all the matched name product in an array.</p>
                </div>
                <div class="card-body">
                    <h2 class="card-title">Questiion 4.</h2>
                    <p className='font-bold text-success'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</p>
                    <p>
                        We know that react, keeps tracking record of all its virtual DOM. Whenever a change happens, all the components are rendered and this new virtual DOM is then compared with the previous virtual DOM. Only the when the changed differences found are then reflected in the original DOM. So,we can understand that if we set the state directly, it will change the reference of the state in the previous virtual DOM as well. So, React will not be able to see that there is a change of the state and so it will not be reflected or rendered in the original DOM until we reload our application.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;