/* ADD YOUR LECTURES HERE */
const lectures = [
 {title:"1. Verbal Communication", link:"https://www.youtube.com/watch?v=eIho2S0ZahI&t=60s"},
 {title:"2. Non-Verbal / Body Language", link:"https://www.youtube.com/watch?v=Ks-_Mh1QhMc&t=63s"},
 {title:"3. Tone, Voice & Pace", link:"https://www.youtube.com/watch?v=cSohjlYQI2A&t=56s"},
 {title:"4. Active Listening", link:"https://www.youtube.com/watch?v=R1vskiVDwl4&t=9s"},
 {title:"5. Clarity & Conciseness", link:"https://www.youtube.com/watch?v=g0kzHjmvuYQ&t=629s"},
 {title:"6. Confidence", link:"https://www.youtube.com/watch?v=2CfFvtSUDA0"},
 {title:"7. Empathy & Emotional Intelligence", link:"https://www.youtube.com/watch?v=iCvmsMzlF7o&t=2s"},
 {title:"8. Adaptability", link:"https://www.youtube.com/watch?v=qp0HIF3SfI4&t=77s"},
 {title:"9. Persuasion & Influence", link:"https://www.youtube.com/watch?v=e57X7GCFafo"},
 {title:"10. Storytelling", link:"https://www.youtube.com/watch?v=TCfxMTx7IC4&t=67s"},
 {title:"11. Feedback Skills", link:"https://www.youtube.com/watch?v=OAIlucguNzY&t=84s"},
 {title:"12. Critical Thinking", link:"https://www.youtube.com/watch?v=HAnw168huqA&t=1147s"},
 {title:"13. Public Speaking / Presentation", link:"https://www.youtube.com/watch?v=AFTPyvO6kcY&t=620s"},
{title:"14. Relationship Building & Trust", link:"https://www.youtube.com/watch?v=p6lUiRTKfKo&t=176s"},
    

];

const container = document.getElementById("lectureList");

function loadLectures(){
    container.innerHTML = "";

    if(!lectures.length){
        container.innerHTML = "<div class='empty-message'>No lectures added yet.</div>";
        return;
    }

    lectures.forEach((lec,index)=>{
        if(!lec.link || !lec.link.startsWith("http")) return;

        const a = document.createElement("a");
        a.href = lec.link;
        a.target = "_blank";
        a.className = "lecture";

        const title = lec.title ? lec.title : "Untitled Lecture";

        a.textContent = `Day ${index + 1} — ${title}`;

        container.appendChild(a);
    });
}

function toggleMode(){
    document.body.classList.toggle("dark");
}

loadLectures();