
function generatestory(){
    var n=document.getElementById("name").value;

    var storytext="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised  :insertp: weighs 300 pounds, and it was a hot day."
    const insertx=["Willy the Goblin",
    "Big Daddy",
    "Father Christmas"];
    const inserty=["the soup kitchen",
    "Disneyland",
    "the White House"];
    const insertz=["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];

    
    const random1=Math.floor(Math.random()*insertx.length);
    const random2=Math.floor(Math.random()*inserty.length);
    const random3=Math.floor(Math.random()*insertz.length);
    var xitem= insertx[random1];
    var yitem= inserty[random2];
    var zitem= insertz[random3];

    storytext=storytext.replace(":insertx:",xitem);
    storytext=storytext.replace(":insertp:",xitem);
    storytext=storytext.replace(":inserty",yitem);
    storytext=storytext.replace(":insertz:",zitem);
    storytext=storytext.replace("Bob",n);

 
    if(document.getElementById("us").checked) {
        const weight = Math.round(136);
        const temperature =  Math.round(34);
        storytext=storytext.replace("300",weight);
        storytext=storytext.replace("94",temperature);
    
      };
    
    document.getElementById("storyfield").innerHTML=storytext;
}