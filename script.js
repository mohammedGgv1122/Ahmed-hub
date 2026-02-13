async function getAiStyling(userChoice) {
    const apiKey = "AIzaSyDLOz5yWfPur2AcPRH7SHhiOqvGkR_1BYs";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const prompt = {
        "contents": [{
            "parts": [{
                "text": `أنا عندي محل بدل اسمه Ahmed-hub، الزبون اختار ${userChoice}، قولي إيه أشيك بنطلون وجزمة وساعة يليقوا عليه بأسلوب فخم ومختصر.`
            }]
        }]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(prompt)
        });
        const data = await response.json();
        const aiText = data.candidates[0].content.parts[0].text;
        
        // عرض النتيجة في الموقع
        document.getElementById('ai-suggestion').innerText = aiText;
    } catch (error) {
        console.error("الـ AI مهنج شوية:", error);
    }
}
