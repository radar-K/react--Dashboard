//import { MouseEvent } from "react";

interface Props {
    items: string[];
    heading: string;
}


import { useState } from "react";

function ListGroup({items, heading}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className= { selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => { setSelectedIndex(index); }}
            // onClick={(event) => console.log(item, index, event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
