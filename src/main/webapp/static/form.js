function handleSubmitAllClick() {
	const forms = document.querySelectorAll("form");
	const formData1 = new FormData(forms[0]);
	const formData2 = new FormData(forms[1]);
	
	let reqData = {};
	
	for(let entry of formData1.entries()) {
		const [ key, value ] = entry;
		reqData = {
			...reqData,
			[key]: value
		}
	}
	
	let DuplicatedKeys = [];
	let keyCount = {}
	
	for(let key of formData2.keys()) {
		if(Object.keys(keyCount).includes(key)) {
			keyCount = {
				...keyCount,
				[key]: keyCount[key] + 1
			}
			continue;
		}
		keyCount = {
			...keyCount,
			[key]: 1
		}
	}
	
	for(let key of Object.keys(keyCount)) {
		if(keyCount[key] > 1) {
			DuplicatedKeys = [ ...DuplicatedKeys, key ];
		}
	}
		
	for(let entry of formData2.entries()) {
		const [ key, value ] = entry;
		if(DuplicatedKeys.includes(key)) {
			reqData = {
				...reqData,
				[key]: [ ...(!reqData[key] ? [] : reqData[key]), value]
			}
			continue;
		}
		reqData = {
			...reqData,
			[key]: value
		}
	}
	
	console.log(reqData);
	
	const queryString = new URLSearchParams(reqData).toString();
	
	
	fetch(`http://localhost:8080/dvd/form?${queryString}`)
	.then(response => {
		response.text()
		.then(data => {
			
			const body = document.querySelector("body");
			body.innerHTML += `<h1>${data}</h1>`
		})
	})
}