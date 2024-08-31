function toggleFaq(item){
    var faq_number= item.getAttribute('data-faq');
    var status= item.getAttribute('data-status');
    var faqCard= document.getElementById("faq-"+faq_number);
    var icon_plus= faqCard.querySelector(".icon #icon-plus");
    var icon_minus= faqCard.querySelector(".icon #icon-minus");
    var desc= faqCard.querySelector(".desc");

    document.querySelectorAll(".faq-header")
    .forEach((e) => {
        e.setAttribute('data-status','close');
        e.parentElement.querySelector(".desc").classList.remove("block");
        e.parentElement.querySelector(".desc").classList.add("hidden");
        e.querySelector(".icon #icon-plus").classList.add("block");
        e.querySelector(".icon #icon-plus").classList.remove("hidden");
        e.querySelector(".icon #icon-minus").classList.remove("block");
        e.querySelector(".icon #icon-minus").classList.add("hidden");
    });

    if(status == "open"){
        icon_plus.classList.add("block");
        icon_minus.classList.remove("block");
        icon_plus.classList.remove("hidden");
        icon_minus.classList.add("hidden");

        item.setAttribute('data-status','close');
    }
    else{
        icon_plus.classList.remove("block");
        icon_minus.classList.add("block");
        icon_plus.classList.add("hidden");
        icon_minus.classList.remove("hidden");

        desc.classList.remove("hidden");
        desc.classList.add("block");
        item.setAttribute('data-status','open');
    }
}
