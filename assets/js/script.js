document.addEventListener("DOMContentLoaded", init);

function init() {
	processForm();
}

function processForm() {
	const $submitButton = document.querySelector("#calculate");
	$submitButton.addEventListener("click", gatherData);
}

function gatherData() {
	// Assets
	const $realEstate = parseInt(document.querySelector("#realEstate").value);
	const $checkingAccounts = parseInt(document.querySelector("#checkingAccounts").value);
	const $savingAccounts = parseInt(document.querySelector("#savingAccounts").value);
	const $retirementAccounts = parseInt(document.querySelector("#retirementAccounts").value);
	const $cars = parseInt(document.querySelector("#cars").value);
	const $otherAssets = parseInt(document.querySelector("#otherAssets").value);

	// Liabilities
	const $realEstateLoans = parseInt(document.querySelector("#realEstateLoans").value);
	const $creditCardDebt = parseInt(document.querySelector("#creditCardDebt").value);
	const $personalLoans = parseInt(document.querySelector("#personalLoans").value);
	const $studentLoans = parseInt(document.querySelector("#studentLoans").value);
	const $carLoans = parseInt(document.querySelector("#carLoans").value);
	const $otherDebt = parseInt(document.querySelector("#otherDebt").value);

	let totalAssets = sumAssets($realEstate, $checkingAccounts, $savingAccounts, $retirementAccounts, $cars, $otherAssets);
	let totalLiabilities = sumLiabities($realEstateLoans, $creditCardDebt, $personalLoans, $studentLoans, $carLoans, $otherDebt);

	calculateNetWorth(totalAssets, totalLiabilities);
}

function sumAssets(RL, CA, SA, RA, C, O) {
	const totalAssets = RL + CA + SA + RA + C + O;
	return totalAssets;
}

function sumLiabities(RL, CD, PL, SL, CL, OD) {
	const totalLiabities = RL + CD + PL + SL + CL + OD;
	return totalLiabities;
}

function calculateNetWorth(totalAssets, totalLiabilities) {
	const netWorth = totalAssets - totalLiabilities;
	generateHTML(totalAssets, totalLiabilities, netWorth);
}

function generateHTML(assets, liabilities, value) {
	const HTML = `
    <p>The combined value of your assets is $${assets}</p>
    <p>The combined value of your liabilities is $${liabilities}</p>
    <p>This makes your net worth equal to: $${value}</p>
    
    `;

	toHTML(HTML);
}

function toHTML(result) {
	const $resultArea = document.querySelector("#result");
	$resultArea.insertAdjacentHTML("beforeend", result);
}
