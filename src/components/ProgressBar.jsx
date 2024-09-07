import React, {useEffect,useState} from 'react'

function ProgressBar({progress,color}) {
  
    const [displayProgress, setDisplayProgress] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setDisplayProgress(progress);
      }, 200); // Delay for the animation to start
    }, [progress]);



  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`bg-[${color}] h-2 rounded-full transition-all duration-700 ease-out`}
        style={{ width: `${displayProgress}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar
