
const wordsTextArea = document.querySelector(".word-counter-container .kata");
const countButton = document.querySelector(".word-counter-container .hitung-tombol");
const clearButton = document.querySelector(".word-counter-container .clear-tombol");
const wordCountDisplay = document.querySelector(".word-counter-container .jumlah-kata span");

const countWords = () => {
    let words = wordsTextArea.value.trim();
    let wordsTrimmed = words.replace(/\s+/g, " ").trim(); 
    let splitWords = words.split(/\s+/).filter(word => word.length > 0);
    let numberOfWords = splitWords.length;
    wordCountDisplay.innerHTML = numberOfWords;
};

countButton.addEventListener("click", countWords);

clearButton.addEventListener("click", () => {
    wordsTextArea.value = "";
    wordCountDisplay.innerHTML = 0;
});
