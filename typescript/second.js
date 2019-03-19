var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getinfo = function (n, a, c) {
        this.name = n;
        this.age = a;
        this.contact = c;
        return true;
    };
    Employee.prototype.putinfo = function () {
        console.log(this.name, this.age, this.contact);
    };
    return Employee;
}());
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super.call(this) || this;
    }
    Account.prototype.getinfo = function (bn, s, ac) {
        _super.prototype.getinfo.call(this, "Gopal", 27, "9604303040");
        this.b_name = bn;
        this.sal = s;
        this.ac = ac;
        return true;
    };
    Account.prototype.putinfo = function () {
        _super.prototype.putinfo.call(this);
        console.log(this.b_name, this.sal, this.ac);
    };
    return Account;
}(Employee));
var e = new Account();
e.getinfo("Union", 27000, "43960430304021");
e.putinfo();
