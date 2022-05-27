import React from "react";
import Heading from "../../Components/Heading";

const Blogs = () => {
  const QnA = [
    {
      qestion:"How will you improve the performance of a React Application?", 
      answer:"I do not have anser"
    }, 
    {
      qestion:"What are the different ways to manage a state in a React application?", 
      answer:"I do not have anser"
    }, 
    {
      qestion:"How does prototypical inheritance work?", 
      answer:"I do not have anser"
    }, 
    {
      qestion:"Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts", 
      answer:"I do not have anser"
    }, 
    {
      qestion:"You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?", 
      answer:"I do not have anser"
    }, 
    {
      qestion:"What is a unit test? Why should write unit tests?", 
      answer:"I do not have anser"
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
