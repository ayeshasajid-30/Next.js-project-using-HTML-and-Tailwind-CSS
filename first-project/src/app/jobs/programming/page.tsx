
export default function ProgrammingPage(){
  return(
    <div>
       <h1 className="text-3xl font-bold mb-4">Programming Page!</h1>
      
      <p className="mb-8">
        Explore our programming job openings and resources to kickstart or advance your coding career. We offer opportunities for beginners and experts alike, as well as courses and tutorials to help you improve your skills.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Current Programming Job Openings</h2>
        <ul className="list-disc pl-6">
          <li><strong>Frontend Developer:</strong> Experience with React and TypeScript is a plus.</li>
          <li><strong>Backend Developer:</strong> Skills in Node.js, Express, and database management.</li>
          <li><strong>Full-Stack Developer:</strong> Comfortable working with both frontend and backend technologies.</li>
        </ul>
      </section>

    </div>
  );
}