var images=[
"http://clipart-library.com/images/6ipnr54iE.jpg", 
"https://as2.ftcdn.net/jpg/02/90/10/17/500_F_290101710_WE2NJ0Zt6eCJiyclz3azWfJOaukx3b7P.jpg",
"https://previews.123rf.com/images/tigatelu/tigatelu1307/tigatelu130700232/21063032-cute-boy-cartoon.jpg",
"https://i.pinimg.com/236x/aa/42/7a/aa427a67d5dc8bc31629fbe50cc62abd.jpg",
"https://cdn2.vectorstock.com/i/1000x1000/50/61/cartoon-business-man-cartoon-character-young-male-vector-15325061.jpg",
"https://image.shutterstock.com/image-vector/face-expression-woman-smiling-female-260nw-753503635.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ26TKAYznC_EzMe36tQMRQS0x_fNui4EaHQ&usqp=CAU",
"https://previews.123rf.com/images/stockgiu/stockgiu1711/stockgiu171101322/89529127-grandfather-cartoon-of-old-person-and-grandparents-theme-isolated-design-vector-illustration.jpg"
    ];
    var names=[
        "Priya","Rama","Arjun","Abhinaya","Balaji","Praveena","Venkat","Ravi"
    ]
    var i=0;
    function nextslide()
       {document.getElementById("para1").innerHTML= reasons[i];
       document.getElementById("img1").src=images[i];
       i++;}
