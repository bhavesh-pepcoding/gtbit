String.prototype.repeatify = function(data){
    for(let i  = 0; i < data; i++) {
        console.log("" + this);
    }
};

"bhavesh".repeatify(100);

"bahvesh bansal".repeatify(10);