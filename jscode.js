var students = [];
var numOfSubjects, highest = { mark:-1 }, lowest = { mark:101 };
while (isNaN(numOfSubjects) || numOfSubjects <= 0 || numOfSubjects > 15)
    numOfSubjects = parseInt(prompt('How many subjects? (1-15)', '1'), 10);


for (i = 1; i <= numOfSubjects; i++) {

    var student = {};
    while (typeof student.name === 'undefined' || student.name == '')
        student.name = prompt('Enter Subject '+i+' name:', '');
    
    while (typeof student.mark === 'undefined' || isNaN(student.mark) || student.mark < 0 || student.mark > 100)
        student.mark = parseFloat(prompt('Enter Subject '+i+' mark (0-100):', ''));
    

    if(student.mark > highest.mark) highest = student;
    if(student.mark < lowest.mark) lowest = student;
    
   
    students.push(student);
}


document.body.innerHTML ="The student has scored highest in "+ highest.name + " ,marks of the same being : " + highest.mark + ". " +"\n & has scored lowest in "+ lowest.name + " , marks of the same being :" + lowest.mark + "." ;

var fav=prompt('what is your favourite subject')
if (fav==highest.name){
   alert("you are performing well in your favourite subject it is suggested that you take up this subject in the future.")
}
else if (fav ==lowest.name){
   alert("you are performing poorly in your favourite subject ,it is recommended that you work hard towards it if you want to pursue it in future.")
}
else
  {
   alert("you are performing sub par in your favourite subject, it is recommended to put in a little effort towards it.")
  }
function future(xed)
{
    if (xed=="science"){
        alert("Options include B.sc, BTech, M.B.B.S etc")
    }
    else if(xed=="english"){
        alert("Options include English honors professions in writing journalism ,etc") 
    }
    else if(xed=="arts"){
        alert("Options include B.A ,professions in art and painting etc")
    }
    else if(xed=="cs"){
        alert("options include B.Tech in cs , ethical hacking,blockchain,artificial intelligence,machine learning etc.")
    }
    else if(xed=="music"){
        alert("options include B.arts spec. in  Music etc")
    }
    else if(xed=="p.ed"){
        alert("options include specializations in physical education degree and sports coaching")
    }
    else if(xed=="maths"){
        alert("options include B.Sc in mathematics and other mathematical spec.")
    }
    else
        {
            alert("explore other options")
        }
}
future(highest.name)
/*

*/
