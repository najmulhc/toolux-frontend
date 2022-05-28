import React from "react";
import Heading from "../../Components/Heading";

const Blogs = () => {
  const QnA = [
    {
      qestion:"How will you improve the performance of a React Application?", 
      answer:"We can Improve ther performance of a React App by doing some simple task and by keeping some things in mind while developing. First of all we should use local state if we can and do not use prop-drilling unnecessirily. Then, we can devide a big component into pieces that helps loading time to be fast. We can also use lazy loading to our images that enhances performance the most."
    }, 
    {
      qestion:"What are the different ways to manage a state in a React application?", 
      answer:"There are some options to chose from when it comes to manage states in a React app. First for most, useState hook is a good opion of local state management. but if we need to use the state from a global parsepective, then we may consider using Redux for this. We can also use contextAPI for this case as well."
    },
    {
      qestion:"Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts", 
      answer:"We use state to store variables that will be changed in the UI. If we change the value of the state directly, it won't change the actual state directly and that will create a pending state transition. This will make some error in the multiple components where we are using the value of it. So we should not hardcode the state value directly and use setState() funtion instead."
    }, 
    {
      qestion:"You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?", 
      answer: "I will use array Filter method to find the produ cts that's name includes the text I am searched for. The code should look like this / const filteredProducts =  products.filter(product => product.name.includes(searchingText)). The filteredProduct variable will return the products in an array that's name includes the name I have searched."
    }, 
    {
      qestion:"What is a unit test? Why should write unit tests?", 
      answer:"Unit test means an automated test of an application using units(small chunks of code ). It helps developers to think through the desing of an application before implementing the whole code. This helps to decide nit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages."
    }, 
  ];
  return (
    <main className="container mx-auto">
      <Heading>Blog</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-8">
        {QnA.map((set) => (
          <div className="bg-primary bg-opecity-30 rounded-md shadow-sm p-8 text-left">
            <h1 className="text-2xl text-slate-900 font-semibold mb-8">{set.qestion}</h1>
            <p className="font-medium text-slate-800 text-lg mt-4 text-left mb-8">{ set.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blogs;
