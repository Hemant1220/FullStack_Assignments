// Q5. Boolean Logic Access System
function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // OR detects whether any entry point is unsafe; ! negates the result.
    const isAnyEntryUnsafe = !isDoorLocked || !isWindowClosed;

    // All required conditions must be true for the system to be secure.
    const isSecure = isAlarmOn && isOwnerInside && !isAnyEntryUnsafe;

    console.log(
        `Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, ` +
        `Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside} => ` +
        (isSecure ? "Secure" : "Unsafe")
    );
    return isSecure;
}

// Test multiple combinations of conditions.
console.log("Boolean Logic Access System");
checkSecurity(true, true, true, true);    // Secure
checkSecurity(true, false, true, true);   // Unsafe: window open
checkSecurity(true, true, false, true);   // Unsafe: alarm off
checkSecurity(true, true, true, false);   // Unsafe: owner not inside
