
 // Interface används för att definiera strukturen för ett objekt i TypeScript. 
// Interface används om komponenten har flera props för att göra koden mer läsbar & lätt att förstå
interface Expense {                       // Expenses - Beskriver strukturen för en individuell utgift
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {                     // Props - Beskriver datat och funktionerna som skickas till en komponent
    expenses: Expense[]              // En array av Expense-objekt
    onDelete: (id:number) => void;  // En funktion för att ta bort en utgift
}


const ExpanseList = ({ expenses, onDelete }: Props) => {   // props är objektet som innehåller information som skickas till komponenten.
  return (                                      // { expenses } innebär att vi använder destrukturering för att hämta ut expenses direkt från props.
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </tr>
        </thead>

        {/*  .map iterera igenom en lista frånb arrayen expenses och rendera varje objekt i en tabellrad */ }
        <tbody>
            {expenses.map(expenses => <tr key={expenses.id}>   
                <td>{expenses.description}</td>
                <td>{expenses.amount}</td>
                <td>{expenses.category}</td>

                <td> {/*Anropa onDelete-funktionen och skickar expenses.id som argument, som identifiera vilken specifik post som ska raderas. */}
                    <button className="btn btn-outline-danger" onClick={() => onDelete(expenses.id)} >Delete</button>
                </td>
                </tr> )}
        </tbody>
        <tfoot>
            <tr> 
                <td>Total</td>
                <td>{expenses.reduce((acc, expenses) => expenses.amount + acc, 0).toFixed(2)}</td> {/* Summera arrayen och returnerar det totala beloppet.  */}
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
  )
}

export default ExpanseList
