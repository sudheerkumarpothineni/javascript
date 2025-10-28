function voteEligibilityCheck(age){
    if(age >= 18){
        return "Approved";
    }else{
        return "Not approved";
    }
}
console.log(voteEligibilityCheck(23));