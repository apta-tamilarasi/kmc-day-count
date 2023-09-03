let m=parseInt(prompt("Enter the month number"))
let y=parseInt(prompt("Enter the year"))

switch(true){
	case m==1|| m==3|| m==5|| m==7|| m==8|| m==10|| m==12:
		document.write("Given month "+m+ " has a 31 Days")
		break

	case m==4|| m==6|| m==9|| m==11:
		document.write("Given month "+m+ " has a 30 Days")
		break

	case m==2 && y%4==0:
		document.write("Given month "+m+ " has a 29 Days (leap year)")
		break
	
	case m==2 && y%4!=0:
		document.write("Given month "+m+ " has a 28 Days (not leap year)")
		break
	
	default:
		document.write("pls enter only number")
}

