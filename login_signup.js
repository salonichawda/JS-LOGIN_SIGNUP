let fs=require("fs")
let input=require("readline-sync")
let file=fs.existsSync("Login_System.json")
// console.log(file);

if(file===false){
    let choose=input.question("choose what you want: signup or login? ")
    if(choose==="signup"){
        let username=input.question("Enter your name : ")
        let phoneNo=input.questionInt("Enter your phone number : ")
        let age=input.questionInt("Enter your age : ")
        let discription=input.question("Enter your discription : ")
        let password=input.question("Enter your password : ")
        if (password.length>=6 && password.length<=12){
            if(password.match(/[A-Z]/m) && (password.match(/[a-z]/m)) && (password.match(/[0-9]/m) && (password.match(/[#$@&]/m)))){
                console.log("...your password is valid...");
            }
            else{
                console.log("...something is missing please check ones...");
            }
        }
        else{
            console.log('password charector should be 6-12');
            let password=input.question("Enter your password again : ")
            if(password.match(/[A-Z]/m) && (password.match(/[a-z]/m)) && (password.match(/[0-9]/m) && (password.match(/[#$@&]/m)))){
                console.log("...your password is valid...");
            }
            else{
                console.log("...something is missing please check ones...");
            }
        }
        let confirmpass=input.question('confirm your password: ')
        let list=[]
        let details={}
        details["Name"]=username
        details["Phone"]=phoneNo
        details["Password"]=password
        details["Age"]=age
        details["Discription"]=discription
        list.push(details)
        if(password===confirmpass){
            console.log('...Registration successfuly...');
            data=JSON.stringify(list,null,2)
            fs.writeFileSync("Login_System.json",data)
        }
        else{
            console.log('...Registration failed! please confirm your password correct...');
        }
    }
    else{
        console.log('...you shuold signup first...');
    }
}
else if(file===true){
    let choose=input.question("choose what you want: signup or login? ")
    if(choose==="signup"){
        let username=input.question("Enter your name : ")
        let phoneNo=input.questionInt("Enter your phone number : ")
        let age=input.questionInt("Enter your age : ")
        let discription=input.question("Enter your discription : ")
        let password=input.question("Enter your password : ")
        if (password.length>=6 && password.length<=12){
            if(password.match(/[A-Z]/m) && (password.match(/[a-z]/m)) && (password.match(/[0-9]/m) && (password.match(/[#$@&]/m)))){
                console.log("...your password is valid...");
            }
            else{
                console.log("...something is missing please check ones...");
            }
        }
        else{
            console.log('password charector should be 6-12');
            let password=input.question("Enter your password again : ")
            if(password.match(/[A-Z]/m) && (password.match(/[a-z]/m)) && (password.match(/[0-9]/m) && (password.match(/[#$@&]/m)))){
                console.log("...your password is valid...");
            }
            else{
                console.log("...something is missing please check ones...");
            }
        }
        let confirmpass=input.question('confirm your password: ')
        let details={}
        details["Name"]=username
        details["Phone"]=phoneNo
        details["Password"]=password
        details["Age"]=age
        details["Discription"]=discription
        l=fs.readFileSync("Login_System.json")
        list=JSON.parse(l)
        list.push(details)
        if(password===confirmpass){
            console.log('...Registration successfuly...');
            data=JSON.stringify(list,null,2)
            fs.writeFileSync("Login_System.json",data)
        }
        else{
            console.log('...Registration failed! please confirm your password correct...');
        }
    }
    else if(choose==="login"){
        let username=input.question("Enter your name : ");
        let password=input.question("Enter your password : ");
        if (password.length>=6 && password.length<=12){
            if(password.match(/[A-Z]/m) && (password.match(/[a-z]/m)) && (password.match(/[0-9]/m) && (password.match(/[#$@&]/m)))){
                console.log("...your password is valid...");
            }
            else{
                console.log("...something is missing please check ones...");
            }
        }
        else{
            console.log('password charector should be 6-12');
            let password=input.question("Enter your password again : ")
            if(password.match(/[A-Z]/m) && (password.match(/[a-z]/m)) && (password.match(/[0-9]/m) && (password.match(/[#$@&]/m)))){
                console.log("...your password is valid...");
            }
            else{
                console.log("...something is missing please check ones...");
            }
        }
        let data=fs.readFileSync("Login_System.json")
        let d1=JSON.parse(data)
        let dic={}
        function login(d1,dic,password,username) {
            for(let i of d1){
                // console.log(i);
                if(i["Name"]===username && i["Password"]===password){
                    dic=i
                    for(let j in dic){
                        console.log(`${j} is - ${dic[j]}`);
                    }
                    console.log("login successfuly....");

                }
                // else{
                //     console.log('login failed! please enter your correct info....');
                // }
            }
        }
        login(d1,dic,password,username)
    }
    else{
        console.log("incorrect");
    }
}else{
    console.log("incorrect");
}