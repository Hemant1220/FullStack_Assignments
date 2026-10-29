// Q2. String Manipulation Report
const productName = " wireless headphones PRO ";

// Trim outer whitespace, lowercase, capitalize each word, then replace "Pro".
const trimmedName = productName.trim().toLowerCase();
const titleCaseName = trimmedName
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
const cleanedTitle = titleCaseName.replace(/\bPro\b/i, "Pro Edition");

console.log("Original title:", JSON.stringify(productName));
console.log("Cleaned title:", cleanedTitle);
console.log("Cleaned title length:", cleanedTitle.length);
