# Code Challenge


### Hola, mi nombre es Cesar, y trato siempre de buscar la mejor forma de crear mi código. 
### Mis objetivos son que sea eficaz, ligero y escalabre; todo dentro de lo posible. 


Por esto, creé componentes ligeramente fuera de las indicaciones de la práctica. 
Las razones de mis cambios fueron para que mi código no se limitara a una consulta específica, que en el caso práctico es de más de 500 créditos. Quise también crear un método extra con el que se pudiera consultar el nombre de los estudiantes con menos de X número de créditos, donde X será cualquier número de consulta. 
De la misma forma creé el parámetro CERTIFICATION para poder mandar en su lugar un SÍ o un NO que devuelva no solo la respuesta a la consulta de quienes ya están certificados, sino que además se podría consultar quienes no han logrado obtener la certificación. 


### En esta ocasión, tras haber visto código más limpio que el mío en prácticas anteriores, logre optimizar mi proyecto al agregar .map dentro de mis funciones en vez de agregar un array vacío en donde almacenar elementos resultantes de un ciclo con condicional, un método que hasta a mí me parecía impráctico. Espero seguir mejorando mis prácticas al momento de escribir código. 


## Dependencias


Dentro de las dependencias implementamos npm para la gestión de paquetes como lo es Jest, el cual usamos para realizar pruebas para cada uno de los componentes, optimizando el flujo de trabajo agregando scripts dentro del packag.json. 
Para una adecuada función del servidor del servidor local, usamos express que tiene una estructuración simple para el despliegue. 


## Detalles sobre el funcionamiento del API

Yendo a una explicación práctica, la **API** funciona creando consultas a través de una **URL**, consultas relacionadas a un archivo. **JSON** almacenado de forma local. 
Las consultas por el momento se limitan a llamar al total de estudiantes junto a los atributos de cada uno esto es mediante el **URL** ***http://localhost:3000/v1/allStudents/*** 
También con el **URL** http://localhost:3000/v1/allStudents/Certification y alterando su terminación entre ***Certification0*** y ***Certification1***, podemos consultar que estudiantes no se han certificado y quieres si, respectivamente. 
Además de poder acceder al nombre de los estudiantes que tengan más de **X** cantidad de créditos, donde **X** es el número de consulta, esto por medio del **URL** ***http://localhost:3000/v1/allStudents/CreditsGreaterThan:X***
Y por último, también puedes acceder al nombre de los estudiantes con menos de **X** cantidad de créditos, donde **X** es el número de consulta, esto con el **URL** ***http://localhost:3000/v1/allStudents/CreditsLessThan:X***

### Para una profundización a cerca de la funcionalidad de la API dejo un esquema para ilustrarlo:


