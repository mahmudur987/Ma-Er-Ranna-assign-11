import React from "react";

const Juice = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[400px] bg-gray-100">
      <div className="md:w-1/3 p-8">
        <img
          className="w-full rounded-full"
          src="https://images.unsplash.com/photo-1526424382096-74a93e105682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div className="md:w-2/3 text-xl p-8 text-start">
        <h2 className="text-4xl text-blue-700 font-bold mb-4">
          Organic Fruite Juice and Milk shake
        </h2>
        <p className="mb-4">
          Order all your office grocery essentials & office fruit with eatfruit.
          We will assign your a dedicated account manager whom will source all
          of your groceries for the office at ultra competitive prices.
        </p>
        <p className="mb-4">
          Aliquam finibus ex vitae est congue auctor. Praesent volutpat nisi
          eget tortor vulputate, sed tincidunt urna pharetra. Fusce finibus quam
          purus, ac eleifend nibh mattis at. Sed a fermentum urna. Sed iaculis
          consectetur nisi, in elementum felis consequat in. Fusce eget libero
          non leo finibus eleifend.
        </p>
        <p>
          Curabitur nec orci sagittis, malesuada tellus nec, feugiat libero. Ut
          finibus, neque id pellentesque ullamcorper, purus diam fermentum est,
          non consequat sem lorem sit amet sem.
        </p>
      </div>
    </div>
  );
};

export default Juice;
