//function review
const calcAge=function(birthyear){
    return 2022-birthyear;
}
const yearsuntilRetirement=function(birthyear,firstname){
    const age=calcAge(birthyear);
    const retirement=2022-age;
if(retirement>0){
    return retirement;
}
else{
    return 9999;
}
}
console.log(yearsuntilRetirement(2002,"Jonas"));
console.log(yearsuntilRetirement(2022,"Yuvi"))