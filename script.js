const corsProxy = 'cors-anywhere.herokuapp.com'; // Full domain of desired CORS proxy
const groupName = 'steamuniverse'; // The name of your Steam Group

fetch(`https://${corsProxy}/https://steamcommunity.com/groups/${groupName}/memberslistxml/?xml=1`, {
		method: 'GET',
		headers: {
			'origin': 'anonymous'
		}
	})
	.then(response => {
		return response.text();
	})
	.then(parsed => {
		const x2js = new X2JS();
		const dataAsJson = x2js.xml_str2json(parsed);
		return dataAsJson;
	})
	.then(data => {
		document.getElementById('steam_group_members').innerHTML = data.memberList.memberCount;
	})
	.catch(err => {
		console.log(err.message);
	});
