function encrypt(str)
{
	str = str.split("").reverse().join("")
	let code = "";
	for (let i = str.length - 1; i >= 0; i--) {
		let r = Math.floor((Math.random() * 100) + 1)
		code += `${r}-${str.charCodeAt(i) * r} `;
	}
	return code;
}

function decrypt(str)
{
	let newstr = "";
	let list = str.split(" ");
	for (let i = list.reverse().length - 1; i >= 0; i--) {
		let r = list[i].split("-")[0];
		let char = String.fromCharCode(parseInt(list[i].split("-")[1]) / r);
		newstr += char
	}
	return newstr
}

$(document).ready(function() {
	$("#encrypt").click(function() {
		$("#encrypted").val(encrypt($("#decrypted").val()));
	});

	$("#decrypt").click(function() {
		$("#decrypted").val(decrypt($("#encrypted").val()));
	});
});