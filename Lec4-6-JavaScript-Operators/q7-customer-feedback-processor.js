// Q7. Customer Feedback Processor
function processFeedback(feedback) {
    // split() counts the words after trimming extra whitespace.
    const trimmedFeedback = feedback.trim();
    const wordCount = trimmedFeedback === "" ? 0 : trimmedFeedback.split(/\s+/).length;
    const normalizedFeedback = feedback.toLowerCase();

    // includes() checks negative keywords without case sensitivity.
    const containsNegativeWord =
        normalizedFeedback.includes("bad") || normalizedFeedback.includes("poor");

    console.log(`Feedback: "${feedback}"`);
    console.log(`Word count: ${wordCount}`);

    if (!containsNegativeWord) {
        console.log("Result: Positive Feedback");
    } else {
        console.log("Result: Needs Improvement");
    }
    console.log("------------------------------");
}

// Demonstrate both conditional outcomes.
processFeedback("Great product! Fast delivery and amazing sound quality!");
processFeedback("Poor packaging, and the product quality was bad.");
