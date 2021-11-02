# Feladatok

**A 06-destructuring mappán belül kell dolgoznod!**  
**A HTML-fájlokat ne módosítsd!**   
**Az export utasításokat hagyd a fájlok végén!**  
**Az `npm run test:destructuring` parancs futtatásával tudod futtatni a teszteket!**  

1. Adott az alábbi objektum:
```javascript
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
```
Mentsd el külön lastName, firstName,és job változókba a fenti objektum property-jeit!   
Ha valamelyik nincs megadva, akkor az érték legyen az "unknown" string!

2. Adott az alábbi objektum:
```javascript
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
```
Mentsd el külön `l`, `f` és `j` változókba a fenti objektum lastName, firstName és job property-jeit! 
Ha valamelyik nincs megadva, akkor az érték legyen az "unknown" string!

3. Mentsd el külön, `a`, `b` és `c` nevű változókba az alábbi tömb első, harmadik és ötödik indexű elemét!
```javascript 
    const names = ['John', 'Jane', 'Judith', 'Jennefer', 'Jeremiah', 'Johnny'];
```