function bubbleSort(){
    //variables
    var i;
    var array;

    //functions
    function getArray(){
        array = prompt("Please type a list of numbers in random order; seperated by commas, no spaces: ").split(",");
        return array;
    }    
    
    function checkNumbers(array){
        "use strict";
        for (var i in array){
            if (isNaN(array[i])){
                return [false, array[i]];
            }
            array[i] = parseInt(array[i]);
            }
        return [true, array];
        }   
    
    function fullCheck(array){
        "use strict";
        function makeOnePass(array){
            function swapValues(array){
                var placeHolder = array[i];
                array[i] = array[i+1];
                array[i+1] = placeHolder;
                return array;
            }
            var swapCount = 0;
            for (i=0; i<array.length; i=i+1){
                if (array[i] > array[i+1]){
                    swapValues(array, i);
                    swapCount = swapCount+1;
                }
           }return [array, swapCount];
       }
       while (makeOnePass(array)[1] > 0){
           makeOnePass(array);
       }return array;
   }

    //code
    
    getArray();
    
    if (checkNumbers(array)[0] === true){
        console.log(checkNumbers(array)[0]);
        fullCheck(array);
        return alert("Here are your numbers, in order: " + array)
    }else{
        return alert(checkNumbers(array)[1] + " is not a number, please try again");
    }
}
