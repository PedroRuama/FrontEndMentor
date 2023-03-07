let dropFea= false
let dropCom = false

function dropFeatures(){
    dropFea = !dropFea
    if(dropFea){
        document.getElementById("drop_features").style = "display: flex"
    }

    else{document.getElementById("drop_features").style = "display: none"}
}

function dropCompany(){
    dropCom = !dropCom
    if(dropCom){
        document.getElementById("drop_company").style = "display: flex"
    }

    else{document.getElementById("drop_company").style = "display: none"}
}
