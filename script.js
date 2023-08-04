//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve saved preferences from cookies
    const fontSizeInput = document.getElementById("fontSize");
    const fontColorInput = document.getElementById("fontColor");

    const savedFontSize = getCookie("fontSize");
    if (savedFontSize) {
        fontSizeInput.value = savedFontSize;
        applyFontSize(savedFontSize);
    }

    const savedFontColor = getCookie("fontColor");
    if (savedFontColor) {
        fontColorInput.value = savedFontColor;
        applyFontColor(savedFontColor);
    }

    // Apply the selected font size
    function applyFontSize(fontSize) {
        document.body.style.fontSize = fontSize + "px";
    }

    // Apply the selected font color
    function applyFontColor(fontColor) {
        document.body.style.color = fontColor;
    }

    // Save preferences to cookies and apply them
    document.getElementById("applyBtn").addEventListener("click", function() {
        const fontSizeValue = fontSizeInput.value;
        const fontColorValue = fontColorInput.value;

        document.cookie = "fontSize=" + fontSizeValue;
        document.cookie = "fontColor=" + fontColorValue;

        applyFontSize(fontSizeValue);
        applyFontColor(fontColorValue);
    });

    // Helper function to get cookie value by name
    function getCookie(name) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts.length === 2) {
            return parts.pop().split(";").shift();
        }
    }
});
