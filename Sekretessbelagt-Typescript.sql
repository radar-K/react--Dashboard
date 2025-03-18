🌶️🌶️🌶️ Viktiga Skillnader mellan TypeScript och JavaScript för React 🌶️🌶️🌶️
<=======================================================================>
• <Typkontroll> TypeScript är statiskt typat, vilket innebär att typer deklareras vid kompilering, medan JavaScript är dynamiskt typat, 
där typer kontrolleras vid körning. I TypeScript måste du specificera datatyper för variabler, medan JavaScript gör det 
automatiskt.
((((TypeScript: Statiskt typad // JavaScrip: Dynamiskt typad))))

• <Kompilering> TypeScript kräver kompilering(kod som datorn kan förstå) till JavaScript innan det kan köras, 
medan JavaScript körs direkt i webbläsaren eller servern. (Processen är automatiserad i Next.js)

• <Syntax och funktioner> TypeScript erbjuder ytterligare funktioner som interface, generics, och enums som inte finns i
 JavaScript. Det ger mer strukturerad och lättförstod kod.


| **Kommando/Metod**                             | **Förklaring**                                                                                       
+------------------------------------------------+-------------------------------------------------------------------------------------+   
|  Interface                                     |  Används för att definiera strukturen på ett objekt, säkerställer att 
|                                                   objektet följer en viss mall.
( E X E M P E L )
| interface Person {
|     name: string;
|     age: number;
| }
|
| function greet(person: Person): string {
|     return `Hello, ${person.name}. You are ${person.age} years old.`;
| }

| ) I vanlig JavaScript, är motsvarande ett objekt ->
|
| const alice = { name: "Alice", age: 30 };
| const bob = { name: "Bob", age: 25 };
|
| console.log(greet(alice)); // "Hello, Alice. You are 30 years old."
| console.log(greet(bob));   // "Hello, Bob. You are 25 years old."
+------------------------------------------------+-------------------------------------------------------------------------------------+
|  Props - Properties                            
|
|  > Props används för att skicka data mellan komponenter. Data skickas från    
|    föräldrarkomponenten till ett barnkomponent, & gör komponenter dynamiska och återanvändbara
| 
|  > Props är objekt som innehåller data som skickas till en komponent.
|  > Props är read-only, vilket innebär att en komponent inte kan förändra sina egna props, utan får dem som indata.
|  > Props gör det möjligt för barnkomponenter att ta emot data från sina föräldrar och rendera UI baserat på denna data.  
|

🍎🍎🍎🍎 -- F U N K T I O N    VS   R E A C T K O M P O N E N T -- 🍎🍎🍎🍎
_________________________________________________________________________________________________________________
Funktionen har inget att göra med UI:t direkt – den handlar om att bearbeta data, utför beräkningar eller logik, 
och returnerar resultat t.ex. en sträng eller ett objekt. Påverkar inte direkt UI

En React-komponent är en funktion eller klass som används för att definiera delar av användargränssnittet (UI).
En komponent tar emot data (oftast via props), och renderar dessa data i form av JSX, som React använder för att 
skapa UI-element.

<Logik & beräknning som retunerar ett resultat vs dynamiskt innehåll i UI baserat på data (props)>
___________________________________________________________________________________________________________________

| Generics                                                                              
+------------------------------------------------+-------------------------------------------------------------------------------------+
| enums - enumeration                            |                                                                                             |
+------------------------------------------------+-------------------------------------------------------------------------------------+
|                                                |                                                                                             |
+------------------------------------------------+-------------------------------------------------------------------------------------+
|                                                |                                                                                             |
+------------------------------------------------+-------------------------------------------------------------------------------------+




<llllllllllllllllllllll> G R I D <lllllllllllllllllllllllllll>

  ( E X E M P E L )
|--------------------------------------------------|
| .grid-container {                                |
|   display: grid;                                 |
|   grid-template-columns: 1fr 2fr 1fr;            |   Skapar tre kolumner: två lika stora och en dubbelt så stor som de andra                                                 |     
| }                                                |
|                                                  |
| .item1 {                                         |   Elementet (item) tar plats från kolumn 1 till 2      
|   grid-column: 1 / 2;                            |
| }                                                |
|                                                  |
| .item2 {                                         |
|   grid-column: 2 / 4;                            |   Elementet sträcker sig från kolumn 2 till 4
| }                                                |
|--------------------------------------------------|



🎃🎃🎃🎃🎃🎃 -- M E D I A   Q U E R Y S -- 🎃🎃🎃🎃🎃🎃
<=========================================================>

🍎🍎🍎🍎🍎 --<xxxxxxxxxx> HOIST <xxxxxxxxx>-- 🍎🍎🍎🍎🍎🍎 
____________________________________________________________________