## För att installera och köra appen

```
För att starta appen skriver du nedan i terminalen.

$ npm install
$ npm start

(terminalen kan öppnas via kortkommandot ctrl + j)
```

## **Problemformulering**

Jag har valt att göra en hemsida där du kan sortera personer efter förnamn, efternamn eller personlighetstyp (färg). Detta gör du enkelt genom att klicka på kategorien du vill sortera efter.

Jag har även gjort en funktion som gör det möjligt att direkt dela in personer i grupper, användaren väljer hur många personer de vill ha i varje grupp och därefter slumpas alla personer och delas in i grupper av antalet som användaren skrivit in. 

Jag har också gjort så att när man startar hemsidan eller trycker på återställ knappen så ska varje person ha ett gruppnummer var, vilket är indelat via index och inte slumpmässigt. 

## **Dokumentation**
Jag började med att göra en HTML fil samt en Javascript fil och länkade ihop dessa med hjälp av script src kommandot. 

Sedan hämtade jag data från användare via en github reposition vid namn frontend-1_data. Datan jag hämtade var i json-format, detta la jag sedan in i mappen "data/dev/users".
Denna data är sparad i arrayer. 
Jag gjorde sedan en funktion vid namn getUsers, som fetchar informationen jag behöver.  

#
Jag skapade sedan en ny div class vid namn container som jag lämnade tom i HTML-filen. Jag gjorde en ny variabel i min JS-fil och döpte den till Container och länkade den med div classen "Container" från HTML-filen. Denna använder jag för att lägga in information på hemsidan på rätt plats. 

Jag gjorde också en ny variabel i min JS-fil vid namn userComponent, där jag la in en div class med all user information jag behöver (förnamn, efternamn, personlighetsfärg & grupp). Jag döpte div classen till userWrapper, varför jag gjorde detta var för att jag senare ska ha det lättare att styla min hemsida. 

Därefter gjorde jag nya variabler med nya namn med datan jag hämtat från mina json-filer i "dev/data/users". Dessa variabler använder jag senare i olika funktioner.

#

I mina funktioner använder jag en metod kallad addEventListener, detta är en metod som "lyssnar" och agerar, i detta fall lyssnar den på "click", så när jag klickar med musen på knappen jag gjort så kommer funktionen att köras. 

Mina sort funktioner jämför alla namn och delar in de i bokstavsordning. Detta har jag applicerat på förnamn, efternamn och personlighetsfärg. Gruppnummret delas in i nummerordning men det är samma koncept. 

I varje sort funktion har jag lagt in Container.innerHTML="", detta för att rensa hela innerHTML:en varje gång jag vill sortera på nytt. 

Efter varje sort funktion har jag skrivit ut en map metod. Som skriver ut informationen som finns i  userComponent men baserat på sort-funktionen, dvs alfabetisk ordning. 

# 

Jag har gjort en assignGroup funktion som delar in grupperna på index, size & array. Alla personer har en egen index siffra, som börjar på 0. 
Size är den storlek jag vill att varje grupp ska ha, t.ex har jag satt standarden som 1, så att alla får varsin grupp till en början. Array i denna funktion är alla användare.

I funktionen har jag sedan gjort en ny variabel som heter group, som tar index och lägger till 1, detta för att index börjar på 0 och man vill gärna inte ha gruppnummer 0. 
Sedan delar jag upp grupperna med hjälp av variabeln size, standard sizen är 1, men jag har gjort en ny variabel vid namn groupAmount som är kopplad till HTML-filen. 

groupAmount är input med typen nummer. Det gör att det kommer upp ett fält där du får skriva in hur många medlemmar du vill ha i varje grupp. 

När du sedan trycker på knappen "Slumpa" så aktiveras en ny funktion vid namn groupBtn, denna funktion sorterar personerna slumpmässigt med hjälp av Math.random, sedan anropas funktionen assignGroup med index-värde 0, groupAmount.value (Det du skrev in i inputen på hemsidan), samt sortedUsers. Detta kommer att tilldela gruppnummer baserat på hur många personer i varje grupp du anger men alla personer har en slumpmässig ordning. Sedan skrivs sortedUsers ut i console log. 

Längst ner anropar jag funktionen getUsers, vilket fetchar all information jag behöver för att koden ska kunna köras. 

#
**style.css:**
I min styling till hemsidan har jag tagit inspiration från googles darkmode, jag gick in och inspekterade och hittade rätt färgkombination. Jag har även använt mig av display:flex för att snygga till looken på hemsidan. Jag har också lagt in text-transform:capitalize för att få en bättre helhet, detta för att alla inte hade använt stor bokstav i JSON-filerna. 








