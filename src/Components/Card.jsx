
const Card = ({ title, children }) => {
    return (
      <div className="mt-8 shadow-lg border border-1 rounded-md p-4 h-[200px] shadow-pink-400">
        {title&&<div className="flex justify-between mb-4">
          <div className="hover:text-green-500">{title}</div>
        </div>}
        {children}
      </div>
    );
  };

export default Card