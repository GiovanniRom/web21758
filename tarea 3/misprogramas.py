
from cgi import print_arguments
from telnetlib import DO
import  numpy as np


print("Mis programas de Pseudocodigo\n")

print("Suma de dos numeros\n")
print("Por favor introduzca dos nueros que desee sumar\n")

n1 = int(input("Numero 1\n"))
n2 = int(input("Numero 2\n"))
nr = n1+n2
print("La suma de los numeros es: ",nr)

print("Impresion de nombre en pantalla\n")
nombre = input("Por favor  intruduzca su nombre\n")
print("Su nombre es: "+nombre+"\n")

print("Operador logico AND\n")
print("Por favor introduzca dos valores boleanos True o False\n")
print("Booleano 1\n")
b1 = input()
if(b1 == "True"):
    b1 = True
else:
    b1=False
print("Booleano 2\n")
b2 = input()
if(b2 == "True"):
    b2 = True
else:
    b2=False
if(b1 and b2):
    print("El resultado de la operacion AND es: True\n")
else:
    print("El resultado de la operacion AND es: False\n")


print("Operador logico OR\n")
print("Por  favor introduzca dos valores booleanos True o False\n")
b1 = input()
if(b1 == "True"):
    b1 = True
else:
    b1=False
print("Booleano 2\n")
b2 = input()
if(b2 == "True"):
    b2 = True
else:
    b2=False
if(b1 or b2):
    print("El resultado de la operacion OR es: True\n")
else:
    print("El resultado de la operacion OR es: False\n")

print("Operador NOT\n")
print("Por favor introduzca un valor booleano True o False\n")
b1 = input()
if(b1 == "True"):
    b1 = True
else:
    b1=False
br = not b1
print("El  resultado de la operacion NOT es: ",br)

print("Programa para introducir unnumero entre 1 y 10\n")
bu = True
while bu:
    nv = int(input("Por favor introduzca un numero valido entre 1 y 10\n"))
    if nv<1:
        bu1 = True
    else:
        bu1 = False
    if nv>10:
        bu2 = True
    else:
        bu2 = False
    bu = bu1 or bu2
print("Numero valido! su  numero es: \n",nv)



print("Programa para que adivines el numero que pense del 1 al 10\n")
na = np.random.randint(1,10,1)
print(na)
ng = int(na[0])
print(ng)

un = int(11)

while un != ng:
    un = int(input("Adivina en que numero pense del 1 al 10\n"))
    if un == ng:
        print("Le atinaste  xd\n")
    if un < ng:
        print("muy bajo  xd\n")
    if un > ng:
        print("muy alto  xd\n")







