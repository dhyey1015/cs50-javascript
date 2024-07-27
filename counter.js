if (!localStorage.getItem('counts')){
    localStorage.setItem('counts', 0)
}
            function count(){
                let counts = localStorage.getItem('counts')
                counts++;
                document.querySelector('h1').innerHTML= counts;
                localStorage.setItem('counts', counts);
            }

            document.addEventListener('DOMContentLoaded', function(){

                document.querySelector('h1').innerHTML = localStorage.getItem('counts');
                
                document.querySelector('button').onclick = count;
            })