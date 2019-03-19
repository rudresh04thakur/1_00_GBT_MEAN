class Employee{
    name:string;
    age:number;
    contact:string;
    constructor(){}
    getinfo(n,a,c):boolean{
        this.name = n;
        this.age = a;
        this.contact = c;
        return true;
    }
    putinfo(){
        console.log(this.name,this.age,this.contact);
    }
}

class Demo{}

class Account extends Employee{
    b_name:string;
    sal:number;
    ac:string;
    constructor(){
        super()
    }
    getinfo(bn,s,ac):boolean{
        super.getinfo("Gopal",27,"9604303040")
        this.b_name = bn;
        this.sal = s;
        this.ac = ac;
        return true;
    }
    putinfo(){
        super.putinfo();
        console.log(this.b_name,this.sal,this.ac);
    }
}

var e = new Account();
e.getinfo("Union",27000,"43960430304021");
e.putinfo();