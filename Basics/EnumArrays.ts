let arrays = [
                {
                    name    :   "Sachin",
                    sex     :   "male"
                },
                {
                    name    :   "Vipul",
                    sex     :   "male"
                },
                {
                    name    :   "Kiran",
                    sex     :   "female"
                }
            ];

let sampleObj = {
                    name    :   "Vasuhda",
                    sex     :   "female"
                };
console.log(arrays);
arrays.push(sampleObj);
console.log(arrays);

let genericArrays : Array<Object> = [
    {
        name    :   "Sachin",
        sex     :   "male"
    },
    {
        name    :   "Vipul",
        sex     :   "male"
    },
    {
        name    :   "Kiran",
        sex     :   "female"
    }
]
console.log(genericArrays);