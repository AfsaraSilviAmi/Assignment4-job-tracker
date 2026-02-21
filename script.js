let interBtn = document.querySelectorAll(".interv-btn");
let rejectBtn = document.querySelectorAll(".reject-btn");

let allToggle = document.getElementById("all-toggle");
let interToggle = document.getElementById("inter-toggle");
let rejectToggle = document.getElementById("reject-toggle");


let totalCount = document.getElementById("totalCount");
let jobCount = document.getElementById("job-count");

function totalCardCount(){
    let cards = document.querySelectorAll(".card");
    totalCount.innerText = cards.length;
    jobCount.innerText = cards.length;
}
totalCardCount();

let noCardSection = document.getElementById("no-card-available");
noCardSection.classList.add("hidden");


for(let btn of interBtn){
    btn.addEventListener('click', function(e){
       let card = e.target.closest(".card");
       let changeInter = card.querySelector(".change-job-text");
       changeInter.innerText = "Interview";
       changeInter.classList.add("bg-green-100", "text-[#10B981]", "text-[17px]", "border", "border-[#10B981]", "rounded-xl");
        changeInter.classList.remove("bg-red-100","text-[#EF4444]","border-[#EF4444]");

       updateCount();
       filterUpdate();
    })
}


for(let btn of rejectBtn){
    btn.addEventListener('click', function(e){
       let card = e.target.closest(".card");
       let changeRej = card.querySelector(".change-job-text");
       changeRej.innerText = "Rejected";
       changeRej.classList.add("bg-red-100", "text-[#EF4444]", "text-[17px]", "border", "border-[#EF4444]", "rounded-xl");
        changeRej.classList.remove("bg-green-100","border-[#10B981]","text-[#10B981]");

       updateCount();
       filterUpdate();
    })
}


function updateCount(){
     const cards = document.querySelectorAll(".card");
     let interCount = 0;
     let rejectCount = 0;
     for(let card of cards){
        let jobText = card.querySelector(".change-job-text").innerText;
        if(jobText == "Interview"){
            interCount++;
        }
        else if(jobText == "Rejected"){
            rejectCount++;
        }
     }
     document.getElementById("interviewCount").innerText = interCount;
     document.getElementById("rejectedCount").innerText = rejectCount;

     
}
let currentFilter = "all";

allToggle.addEventListener('click', function(){
    currentFilter = "all";
    colorToggle();
    filterUpdate();
    
})
interToggle.addEventListener('click', function(){
    currentFilter = "Interview";
    colorToggle();
    filterUpdate();
})
rejectToggle.addEventListener('click', function(){
    currentFilter = "Rejected";
    colorToggle();
    filterUpdate();
})

function filterUpdate(){
    let cards = document.querySelectorAll(".card");
    let visibleCount = 0;
    let totalCards = cards.length;
    for(let card of cards){
        card.classList.remove("hidden");
        const stat = card.querySelector(".change-job-text").innerText;

        if(currentFilter === "Interview" && stat !=="Interview"){
            card.classList.add("hidden");
        }
        else if(currentFilter === "Rejected" && stat !== "Rejected"){
            card.classList.add("hidden");
        }

        if(!card.classList.contains("hidden")){
            visibleCount++;
        }
       
    }
    if(visibleCount === 0){
        noCardSection.classList.remove("hidden");
    }
    else{
        noCardSection.classList.add("hidden");
    }
    if (currentFilter == "all"){
        jobCount.innerText = `${totalCards}`;
    }else{
        jobCount.innerText = `${visibleCount} of ${totalCards}`;
    }
}

      allToggle.classList.add("bg-blue-500","text-white");
     
function colorToggle(){
       allToggle.classList.remove("bg-blue-500","text-white");
       interToggle.classList.remove("bg-blue-500","text-white");
       rejectToggle.classList.remove("bg-blue-500","text-white");

       allToggle.classList.add("bg-white","text-gray-500");
       interToggle.classList.add("bg-white","text-gray-500");
       rejectToggle.classList.add("bg-white","text-gray-500");

       

       if(currentFilter === "all"){
        allToggle.classList.remove("bg-white","text-gray-500");
        allToggle.classList.add("bg-blue-500","text-white");
       }
       else if(currentFilter === "Interview"){
        interToggle.classList.remove("bg-white","text-gray-500");
        interToggle.classList.add("bg-blue-500","text-white");
       }
       else if(currentFilter === "Rejected"){
        rejectToggle.classList.remove("bg-white","text-gray-500");
        rejectToggle.classList.add("bg-blue-500","text-white");
       }
}

