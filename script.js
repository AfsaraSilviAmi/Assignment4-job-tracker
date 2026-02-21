let interBtn = document.querySelectorAll(".interv-btn");
let rejectBtn = document.querySelectorAll(".reject-btn");

for(let btn of interBtn){
    btn.addEventListener('click', function(e){
       let card = e.target.closest(".card");
       let changeInter = card.querySelector(".change-job-text");
       changeInter.innerText = "Interview";
       changeInter.classList.add("bg-green-100", "text-[#10B981]", "text-[17px]", "border", "border-[#10B981]", "rounded-xl");

       
    })
}


for(let btn of rejectBtn){
    btn.addEventListener('click', function(e){
       let card = e.target.closest(".card");
       let changeRej = card.querySelector(".change-job-text");
       changeRej.innerText = "Rejected";
       changeRej.classList.add("bg-red-100", "text-[#EF4444]", "text-[17px]", "border", "border-[#EF4444]", "rounded-xl");

       
    })
}
