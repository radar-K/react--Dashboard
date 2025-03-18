import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const Like = () => {
  const [status, setStatus] = useState(false);  // Status; om ikonen ska vara ifylld eller inte

  return (
    <div onClick={() => setStatus(!status)}> 
      {status ? (
        <FaHeart color="#ff6b81" size={20} />
      ) : (
        <FaRegHeart size={20} />
      )}
    </div> // condition(status) ? if valueTrue fill heart : if valueFalse change icon
  );
};

export default Like;
