const API_KEY= 'api_key=10ca986d638686bb2a378ad03d87af4f';
const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY; 
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const searchURL = BASE_URL + '/search/movie?'+API_KEY;



//fetching data

const todo=  async function(){
    const response= await fetch(API_URL);
    if(response.status!=200){
        throw new Error('could not fetch data');
    }
    const data=await response.json();
    
    return data;

}


//adding data to html

todo().then(
     function(data){
        console.log(data);
        let griddata='';       
        data.results.forEach((element)=>{
        griddata +=` <div class="card">
        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="image">
        <div class="title"> ${element.title}</div>
        <div class="rating">Rating: ${element.vote_average}</div>
                    </div>`;

        });
        document.querySelector('.movies').innerHTML=griddata;
    })

//search bar
   
const div= document.querySelector('.movies');
const search=document.forms['search'].querySelector('input');
search.addEventListener('keyup',function(e){
    const s=search.value.toLowerCase();
    const p= div.getElementsByClassName('title');
    Array.from(p).forEach(
        function(p){
            const x= p.textContent;
            if(x.toLowerCase().indexOf(s)!=-1){
            p.parentNode.classList.remove('none');
            }
            else{
            p.parentNode.classList.add('none');
            }
        }
    )      
})
