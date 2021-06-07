/*Escriba un bucle for que iterará de 0 a 20. Para cada iteración, verificará si el número actual es
par o impar, y lo informará en la pantalla (por ejemplo, "2 es par").*/

for (let i= 0; i <=20; i++) {
    if (i%2==0){
        document.write('<br>'+"el numero "+i+ " es par ");
    } else{
        document.write('<br>'+"el numero "+i +" es impar");
    }
    
}