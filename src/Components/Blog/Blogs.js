import React from 'react';
import { Helmet } from "react-helmet";

const Blogs = () => {
    return (
        <div>

            <Helmet>
                <title>Blog</title>
            </Helmet>

            <div className='border-4 border-green-900 p-5 m-5'>
                <h1 className='font-bold text-2xl'>Question .1  :what Difference between SQL and NoSQL ? </h1>
                <h1 className=' font-extrabold underline  text-red-600'>Answer</h1>

                <p>
                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.

                    There are five practical differences between SQL and NoSQL:

                    <ol>
                        <li>
                            01 .Language

                        </li>
                        <li>
                            2.   Scalability

                        </li>
                        <li>
                            3.                       Structure
                        </li>
                        <li>
                            4.   Properties

                        </li>
                        <li>
                            5. Support and communities

                        </li>
                    </ol>
                </p>
            </div>


            <div className='border-4 border-green-900 p-5 m-5'>
                <h1 className='font-bold text-2xl'>Question .2  :What is JWT, and how does it work?</h1>
                <h1 className=' font-extrabold underline  text-red-600'>Answer</h1>
                <p>
                    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. <br />

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.<br />

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.<br />
                </p>
            </div>


            <div className='border-4 border-green-900 p-5 m-5'>
                <h1 className='font-bold text-2xl'>Question .3  : What is the difference between javascript and NodeJS?</h1>
                <h1 className=' font-extrabold underline  text-red-600'>Answer</h1>
                <p>1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.<br />

                    As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.<br /><br />

                    2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.<br /><br />

                    3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.<br /><br />

                    4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.<br /><br />

                    Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.<br /><br />

                    5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.<br />
                </p>
            </div>
            <div className='border-4 border-green-900 p-5 m-5'>
                <h1 className='font-bold text-2xl'>Question .3  : How does NodeJS handle multiple requests at the same time?  </h1>
                <h1 className=' font-extrabold underline  text-red-600'>Answer</h1>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>





        </div>
    );
};

export default Blogs;