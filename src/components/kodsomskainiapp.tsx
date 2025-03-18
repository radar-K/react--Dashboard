// EXPANSTRACKER LISTA 

import { useState } from "react";
import ExpanseList from "./ExpanseTracker/components/ExpanseList";
import ExpanseFilter from "./ExpanseTracker/components/ExpanseFilter";
import ExpanseForm from "./ExpanseTracker/components/ExpenseForm"

function App() {
    const [selectedCategory, setSelectedCategory] = useState('');
  
    const [expenses, setExpenses] = useState ([
      { id: 1, description: 'Lunch', amount: 50, category: 'Öl' },
      { id: 2, description: 'Transport', amount: 100, category: 'Ost' },
    ]);
  
    const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;
  
      // Funktion för att ta bort en utgift
      const handleDelete = (id: number) => {
        setExpenses(expenses.filter(expense => expense.id !== id)); // Filtrera bort den utgift med det specifika id:t
      };
  
    return ( 
      <div>
        <div className="mb-5">
          <ExpanseForm  onSubmit={newExpense => 
          setExpenses([ ...expenses, { ...newExpense, id: expenses.length + 1 }])}/>
        </div>
  
  
        <div className="mb-3">
        <ExpanseFilter onSelectCategorie={category => setSelectedCategory(category)}/>
        </div>
        <ExpanseList expenses={visibleExpenses} onDelete={handleDelete}/>
      </div>
    )
  }

  export default App;


//List
// <ListGroup items={items} heading="cities" />   let items = ["westerås", "stockholmia", "en trevlig stad"]; import ListGroup from "./components/ListGroup";


//   const [alertVisible, setAlertVisibility] = useState(false);
//   
 // return (
 //   <div>
 //     {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
 //     <Button onclick={() => setAlertVisibility(true)}>Knapp</Button>

 /**    
  *   const [cartItems, setCartItems] = useState (['product1', 'product2'])
      const [alertVisible, setAlertVisibility] = useState(false);
  * 
  *  <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button onclick={() => setAlertVisibility(true)}>Knapp</Button>

      /* Fragment som grupperar komponenter utan att lägga till extra DOM-noder */

//      <div>
/*       <Like/>
//      </div>
//
//      <div>
//        <NavBar cartItemsCount={cartItems.length}/>
//        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
//      </div>
//      <div>
//        <ExpandableText>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus laboriosam amet velit neque, commodi quasi nostrum voluptatibus saepe minima, expedita, recusandae accusamus nihil vero! Veniam eius, voluptas animi non doloremque exercitationem commodi velit aliquam autem assumenda, impedit corporis, ullam dolore rerum nesciunt dolores esse similique qui omnis sapiente et. Nulla laudantium itaque tempora enim blanditiis quae dolore facilis dolorem veritatis minima perspiciatis modi placeat sequi veniam, excepturi eveniet aspernatur recusandae tempore ullam? Quia dignissimos at dolorem accusamus possimus ipsum qui, inventore aliquam maiores praesentium natus ducimus totam quae delectus, odit fugit cum incidunt, quod veniam id optio odio sequi. 
//        </ExpandableText>
//
//      </div>
//    </div> */
