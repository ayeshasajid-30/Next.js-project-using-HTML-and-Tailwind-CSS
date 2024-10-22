
export default async function AboutPage(){
     await new Promise((resolve) => {setTimeout(resolve,5000)      });
    
    return(
         <div>  
             <h1 className="text-3xl font-bold mb-4"> About Page </h1> 
       <p className="text-gray-700 font-medium">
        This is an about page! 
      </p> 
      <br></br>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6">
          <li><strong>Integrity:</strong> We adhere to the highest standards of professionalism and ethics.</li>
          <li><strong>Innovation:</strong> We continuously improve our services to offer cutting-edge solutions.</li>
          <li><strong>Customer Focus:</strong> Your satisfaction is our top priority.</li>
        </ul>
      </section>
        
        </div>
     );
 }


