import React, { useEffect, useState } from 'react';

const SentenceDisplay = () => {
  const sentences = [    
    "<span class='text-blue-500'>Akash</span> has scored <span class='text-blue-500'>9/10</span> in self-awareness test <span class='text-blue-500'>Just now</span>",
    "<span class='text-blue-500'>250+</span> Students has taken our self-awareness test in last <span class='text-blue-500'>24 Hours</span>",
    "<span class='text-blue-500'>1250 </span>Students Reported Improvement in their Grades with<span class='text-blue-500'> Hyggex learning</span>",
    "<span class='text-blue-500'>4235+</span> Students take our Sectional Tests on a<span class='text-blue-500'> weekly basis</span>",
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-left ">
      <div className="text-center">
        <div className="text-l text-blue-800 font-semibold" dangerouslySetInnerHTML={{ __html: sentences[index] }} />
      </div>
    </div>
  );
};

export default SentenceDisplay;
