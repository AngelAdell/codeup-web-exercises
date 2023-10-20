let i = 2

while (i < 131072)  {
    console.log(i);
    i*=2
}

let allCones = Math.floor(Math.random() * 50) + 50;
    console.log("I have to sell " + allCones);
    do {
        let conesSell =Math.floor(Math.random() * 5) + 1;
        if (conesSell <= allCones) {
            console.log('I have sold '+ conesSell);
            allCones -= conesSell;
        } else {
            console.log('I cannot sell. I have only '+ conesSell + 'left' );
        }
    } while(allCones > 0);
    console.log('I have sold all my cones. I can go home!')