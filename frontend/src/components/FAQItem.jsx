import "../static/faq-item.css";

function FAQItem(props){
    const adjustSize = ()=>{
        const faqItems = document.querySelectorAll(".faq-item");
        const faqQuestions = document.querySelectorAll(".faq-item-question-container");
        for(let i = 0; i < faqItems.length; i++){
            console.log(faqItems[i].offsetHeight + "px");
            faqItems[i].style.height = (faqQuestions[i].offsetHeight + 1) + "px";
        }
    }
    window.addEventListener("load", adjustSize);
    window.addEventListener("resize", adjustSize);
    const Collapse = (e) =>{
        const faqItems = document.querySelectorAll(".faq-item");
        const faqAnswers = document.querySelectorAll(".faq-item-answer");
        const arrows = document.querySelectorAll(".faq-item svg");
        const faqQuestions = document.querySelectorAll(".faq-item-question-container");

        let questionHeight = faqQuestions[e.target.getAttribute("index")].offsetHeight;

        if (e.target.getAttribute("semaf") === "0"){
            let answerHeight = faqAnswers[e.target.getAttribute("index")].offsetHeight;
            faqItems[e.target.getAttribute("index")].style.height = answerHeight + questionHeight + "px";
            arrows[e.target.getAttribute("index")].style.transform = "rotate(180deg)";
            e.target.setAttribute("semaf", "1");
        }
        else{
            adjustSize();
            arrows[e.target.getAttribute("index")].style.transform = "rotate(0)";
            e.target.setAttribute("semaf", "0");
        }
        
    }
    return(
        <div className = "faq-item">
            <div className = "faq-item-question-container" onClick = {Collapse} index = {props.index} semaf = "0">
                <h3>{props.question}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                    <path d="M6 10 L12 16 L18 10" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
            </div>
            <div className="faq-item-answer">
                {props.answer}
            </div>
        </div>
    );
}

export default FAQItem;