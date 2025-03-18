import categorires from "../categories"

interface Props {
    onSelectCategorie: (category: string) => void  // beskriver en funktionens signatur. Argument category av typ string = void, inget värde retuneras
}

// När användaren ändrar sitt val i dropdown-listan (select), triggas onChange-händelsen, och värdet 
// för det valda alternativet (event.target.value) skickas till onSelectCategorie-funktionen. 
// Detta gör att du kan hantera det valda värdet i komponentens föräldra-komponen

// 1. <select>-tagg (en dropdown-lista)  2. form-select är en CSS-klass som kan tillämpas för att styla dropdown-listan
// 3. onChange: är en händelsehanterare som lyssnar på förändringar i en inputkontroll, triggas varje gång användaren ändrar sitt val i dropdown-listan.
// 4. event.target.value: Här hämtar vi det val som användaren har valt från dropdown-listan


const ExpanseFilter = ({onSelectCategorie}: Props ) => {
  return (
    <div>
      <select className="form-select" onChange={(event) => onSelectCategorie(event.target.value) }>
      {categorires.map(category => <option key={category} value={category} label={category} ></option>)}
      </select>



    </div>
  )
}

export default ExpanseFilter
