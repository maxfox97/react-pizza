import React, { useState } from 'react';

function Categories({items, onClick}) {
    
const [activeItem,setActiveItem] = useState(null);

const onSelectItem = (index) => {
    setActiveItem(index)
}    



  return (
    <div className="categories">
    <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
        {items &&
        items.map((item,index) => <li 
        key={`${item}_${index}`} 
        onClick={() => onSelectItem(index)}
        className={activeItem === index ? 'active' : ''}
        >
        {item}
        </li>
        )}
    </ul>
  </div>
  )
}

// class Categories extends React.Component {
//     state = {
//         activeItem: 3,

//     }

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index,
//         })
//     }

//     render() {
//         const {items, onClick} = this.props;
//         return(
//             <div className="categories">
//               <ul>
//                      {items.map((item,index) => <li 
//                      key={`${item}_${index}`} 
//                      onClick={() => this.onSelectItem(index)}
//                      className={this.state.activeItem === index ? 'active' : ''}
//                      >
//                     {item}
//                      </li>
//                      )}
//                  </ul>
//                </div>
//         )
//     }
// }


export default Categories;