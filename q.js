let n=require("readline-sync")
password=n.question("enter: ")

if(password.match(/[A-Z]/m) && (password.match(/[a-z]/m)) && (password.match(/[0-9]/m) && (password.match(/[#$@&]/m)))){
    console.log("confirm");
}
else{
    console.log("wrong");
}
