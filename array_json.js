key = ["Name","Age"];
value = [["Puja",13],["Ankita",23]]

/**
 * {
 *  arrya :[
 *      {
 *          "name":"puja",
 *          "age":13
 *      },
 *      {
 *          "name":"ankita",
 *          "age":23
 *      }
 *  ]
 * }
 */
var j = (function(){
    json = {"employee":[]}
    temp_json={}
    value.map((item)=>{
        temp_json = {};
        key.map((e,i)=>{
            temp_json[e]=item[i];
        })
        json['employee'].push(temp_json);
    });
    return json;
}());
console.log(j);
