function funImage(anything)
        {
            document.querySelector('.starbucks').src = anything;
        }

function changeColors(color)
        {  
            const circle=document.querySelector('.circle');
            circle.style.background=color;
            const hed=document.querySelector('.hed');
            hed.style.background=color;
            
        }  

        function menuFunction()
        {
            const m=document.querySelector('.menu');
            const n=document.querySelector('.nav');
            m.classList.toggle('active');
            n.classList.toggle('active');
            

        }