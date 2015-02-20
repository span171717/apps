
            function clickButton(e){
                console.log("start:clickButton");
                e.target.innerHTML="kattintott";
            }
            document.addEventListener("DOMContentLoaded", function(event){
            console.log("start:DOMContentLoaded");
            var buttons = document.querySelectorAll("button");
                    //végigmegyünk az összes gombon
                    for(x=0;x<buttons.length;x++)
                    {
                        //console.log(buttons[x]);
                        buttons[x].addEventListener("click",clickButton);
                    }
            console.log("stop:DOMContentLoaded");
        });
        

