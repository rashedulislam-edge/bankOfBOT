function getInputFieldValueBYId(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldvalueString = inputField.value;
    const inputFieldvalue = parseFloat(inputFieldvalueString);
    inputField.value = "";
    return inputFieldvalue;
}

function getElementValueBYId(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const Elementvalue = parseFloat(elementValueString);
    return Elementvalue;
}

function setTextElementvalueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
