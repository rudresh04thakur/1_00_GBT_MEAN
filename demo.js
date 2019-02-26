json = {
    originator:{
        lmsdata:{},
        blockchaindata:{
            createpool:{
                a:{},
                b:{}
            },
            protfoliosetup:{
                a:{},
                b:{},
                c:{},
                d:{}
            }
        }
    }
}

function(json){
 return json.nodeChild()
}
