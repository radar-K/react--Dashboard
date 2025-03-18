.js   – Vanlig JavaScript-kod
.jsx  – JavaScript med JSX (React-komponenter) syntaxförlängning för JavaScript som gör att du kan skriva HTML-liknande kod i JavaScript.
.ts   – TypeScript (JavaScript med typkontroll) lägger till statiskt typkontroll.
.tsx  – TypeScript med JSX 
.json – Datafil i JSON-format () lättviktigt format för att lagra och överföra data, oftast i textformat. JSON är både läsbart för människor och lätt att bearbeta för maskiner. 
.md   – Markdown för dokumentation



arrow function why & when //  onClick={() => onDelete(expenses.id)}
 Om vi använder onClick={onDelete(expenses.id)} utan en arrow function 
 skulle funktionen onDelete omedelbart anropas när komponenten renderas, vilket inte är det vi vill.
 Vi vill istället att den ska anropas när användaren faktiskt klickar på knappen, och med en arrow function
 kan vi säkerställa att det händer vid rätt tillfälle.

___________________________________________________________________________________________________________________

| useState                                       | Används för att lagra och uppdatera data   

const [state, setState] = useState(startvärde);

När du använder useState, får du två saker:
🔹 count(ett värde) → Det nuvarande tillståndet (state)
🔹 setCount(En funktion) → En funktion som uppdaterar värdet

🔹 useState(0) → 0 är startvärdet

+------------------------------------------------+-------------------------------------------------------------------------------------+
| useReduce                                      | tar mer data än useState   
| 
| const [state, dispatch] = useReducer(reducer, initialState);
|
| state → Det nuvarande värdet.
| dispatch → En funktion för att skicka en action (händelse) som ändrar state.
| reducer → En funktion som definierar hur state ska uppdateras.
| initialState → Startvärdet för state.
                                                                                         
+------------------------------------------------+-------------------------------------------------------------------------------------+
| useEffect                                      | Hjälper till att hantera saker som händer "utanför" själva komponenten, som att prata med en server eller ändra DOM.                  
| 
🔹 Första argumentet: Funktionen som körs vid render eller förändring. // Vad som ska hända.
🔹 Andra argumentet ([dependency]): Lista som styr när funktionen körs. // När det ska hända (beroenden).

| useEffect(() => {
|  // Kod som körs vid render eller vid ändring av beroenden             useEffect(() => {...}, []) → Körs bara vid första renderingen.
| }, [dependency]);                                                      useEffect(() => {...}, [state]) → Körs när state ändras.
|                                                                        useEffect(() => { return () => {...} }, []) → Kör en cleanup när komponenten tas bort.

När ska man använda useEffect?
✅ Hämta data från en API (t.ex. fetch eller axios).
✅ Uppdatera document.title eller manipulera DOM:en.
✅ Lyssna på händelser (t.ex. resize, scroll, keydown).
✅ Städa upp resurser när en komponent avmonteras.

                                                                                  
+------------------------------------------------+-------------------------------------------------------------------------------------+
|                                                |                                                                                             |
+------------------------------------------------+-------------------------------------------------------------------------------------+

