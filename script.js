function generate() {
	var firstname = ["'If you can't explain it simply, you don't understand it well enough.' - ", "'If you can't make it good, at least make it look good.' - ", "'I'm as proud of what we don't do as I am of what we do.' -", "'A computer's power is not with natural language. It's with math. A human is better at taking to the people' - ", "Bits makes the destination", "'By giving people the power to share, we're making the world more transparent.' - ", "'Science is not only a disciple of reason but, also, one of romance and passion.'"];
	var lastname = ["Albert Einstein", "Bill Gates", "Steve Jobs", "Tanmay Bakshi", "Opemipo Disu", "Stephen Hawking", "Mark Zuckerberg"];
	var rand_first = Math.floor(Math.random()*firstname.length);
	var rand_last = Math.floor(Math.random()*lastname.length);
	document.getElementById('result').innerHTML = "<h3>The random name quote is:</h3><div class='alert alert-success'><h2>"+firstname[rand_first]+" "+lastname[rand_last]+"</h2></div>";
//Was working fine...
}