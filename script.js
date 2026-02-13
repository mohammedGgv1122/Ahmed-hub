async function getAiStyling(userChoice) {
    const suggestionElement = document.getElementById('ai-suggestion');
    suggestionElement.innerText = "جاري استشارة المنسق الذكي... ⏳";

    // حط مفتاحك اللي جبته من Google AI Studio هنا
    const apiKey = "ضع_هنا_مفتاح_جوجل_الخاص_بك"; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const prompt = {
        "contents": [{
            "parts": [{
                "text": `أنا صاحب محل بدل اسمه Ahmed-hub. الزبون اختار ${userChoice}. اقترح لي بأسلوب فخم إيه البنطلون والجزمة والساعة اللي يمشوا معاه. الرد يكون بالعامية المصرية وفي سطرين بس.`
            }]
        }]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prompt)
        });
        const data = await response.json();
        const aiText = data.candidates[0].content.parts[0].text;
        suggestionElement.innerText = aiText;
    } catch (error) {
        suggestionElement.innerText = "معلش يا باشا، المنسق واخد بريك. جرب كمان شوية!";
        console.error(error);
    }
}

function applyCoupon() {
    const code = document.getElementById('couponInput').value;
    if (code === 'AHMED10') {
        alert("مبروك! تم تفعيل خصم 10% لعملاء Ahmed-Hub.");
    } else {
        alert("كود الخصم غير صحيح.");
    }
}
