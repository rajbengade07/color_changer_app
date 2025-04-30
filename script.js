function change()
{
	event.preventDefault();
	let action=document.activeElement.value;
	if(action==="Red")
		document.body.style.backgroundColor="red";
	else if(action==="Orange")
		document.body.style.backgroundColor="orange";
	else if(action==="Blue")
		document.body.style.backgroundColor="blue";
}
