var inter = null;
inter = setInterval(function() {
    if (document.getElementById("wrap")) {
        clearInterval(inter);
        console.log("NULL");
        setTimeout(function() {
            var tops = 0;
            $('#text').fadeOut("slow", function() {
                var wrap = document.getElementById("wrap");
                var clockBox = document.getElementById("clock-box");
                var divs = document.createElement("div");
                divs.style.height = "450px";
                divs.style.width = "350px";
                divs.style.overflow = "auto";
                divs.style.position = "absolute";
                divs.style.left = "50px";
                divs.style.top = "50px";
                for (var i = 1; i < 25; i++) {
                    (function(index) {
                        var img = document.createElement("img");
                        img.setAttribute("src", "./img/" + index + ".jpg");
                        img.style.width = "80%";
                        img.style.marginLeft = "10%";
                        img.style.marginTop = "30px";
                        img.style.display = "inline-block";
                        divs.appendChild(img);
                    })(i);
                }
                wrap.insertBefore(divs, clockBox);
            });
        }, 50000);
    }
}, 100);
