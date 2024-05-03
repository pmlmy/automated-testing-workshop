// person.js
function getFullName(participant) {
	if (!participant?.firstName && !participant?.lastName) {
		return "First name and last name is required!"
	}
	
	if (!participant.lastName) {
		return "Last name is required!"
	}

	if (!participant.firstName) {
		return "First name is required!"
	}

  return participant.firstName + " " + participant.lastName;
}


module.exports = { getFullName };