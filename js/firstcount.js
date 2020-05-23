function myfunction()
{
if(localStorage.pagecount)
{
    localStorage.pagecount = Number(localStorage.pagecount) + 1;
}
else
{
    localStorage.pagecount = 1; 
}
document.getElementById("page-count").innerHTML = "Welcome " + localStorage.pagecount + " time" ;
}