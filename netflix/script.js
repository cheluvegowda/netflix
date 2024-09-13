
let movies = [

    {
        name:"Kaatera",
        poster:"https://imgs.search.brave.com/baNG02_zkiALQCp_pmuQ62wq4yyYehfPuomqj9a_D5A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmlsbWliZWF0/LmNvbS9pbWcvcG9w/Y29ybi9tb3ZpZV9w/b3N0ZXJzL2thYXRl/cmEtMjAyMzAyMTYw/NjU0MzAtMjA3NTUu/anBn",
        rating:7.4
    },
    {
        name:"Kurukshetra",
        poster:"https://imgs.search.brave.com/Yu5P0y9CwjOP48Hle4H-tV0s5AGvNpClMURAHnGgWNI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk4ySmtNekJq/TkRFdE56TTNPUzAw/WVRZNExXSmxaVFV0/WkdSbE5EbGxNakUx/TmpCalhrRXlYa0Zx/Y0dkZVFYVnlOalEx/TURjeE56TUAuanBn",
        rating:6.1
    },
    {
        name:"Kranthiveera Sangolli Rayanna",
        poster:"https://imgs.search.brave.com/cCBzgO75xWO7l3RhamaiVk9BDe432m460u43iWXa9wM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1URTJZakJo/TURNdE5UQmlOaTAw/TWpZMkxUZzFNREl0/TURFNE5URmlNVEky/T1RZelhrRXlYa0Zx/Y0dkZVFYVnlOalEx/TURjeE56TUAuanBn",
        rating:7.9
    },
    {
        name:"Saarathi",
        poster:"https://imgs.search.brave.com/wIPcmxlIM0oqnNRQ0CmD_l-hAiFonNWUB-i4i3BaAig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1XWmpOVEZp/WXpFdE5XWXdZaTAw/WkRrMkxXRmpPVFl0/WmpSaFpqWXhOREF5/WVdFNFhrRXlYa0Zx/Y0djQC5qcGc",
        rating:7.4
    },
    {
        name:"Yajamana",
        poster:"https://imgs.search.brave.com/m-viuv5SyoEfo36FelugCOWnbmwWqi8ITuTdnqVHNqc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9UVmtNVEk1/WkdFdE5XVmhNaTAw/WVRBM0xXSmxOVFV0/T1RRME1EWTNZMlpp/TkRBd1hrRXlYa0Zx/Y0djQC5qcGc",
        rating:6.5
    },
    {
        name:"Kranti",
        poster:"https://imgs.search.brave.com/xzvh0YVZkzwrRgLLe3NwTeSO6yuVYnOaI4lDt4CPyO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vo/akVUdjU0WFlENFda/bkxiVmdJcmRaZEVZ/QTIxdHJsS01TNlZV/cmRQNXJhU1lTWmUt/RlAxOXZMQURZTVZG/cEJJNF96SXpCUHAx/NWxEbk1Gam0yTHY3/Z2hxMnVLV3pQR3Fq/TmZCMlZPeTVnQUJs/ODFieDYyQlFXVW5F/TkxzZjA0Q0lMVDdh/TFc1b1lUS1Z0NThG/RkJNNmRmVG1QaHV6/c0lFdHU2RXlGWlNW/QzVpRDRSWFlpNlNM/T21KZ1pXQS9zNjAw/L0tyYW50aS1LYW5u/YWRhLU1vdmllLUJv/eC1PZmZpY2UtSGl0/LW9yLUZsb3AuanBn",
        rating:5.1
    },
    {
        name:"Bul Bul",
        poster:"https://imgs.search.brave.com/g4lYKAIoBeNiJq0ZQtLWckkpJ9-7xmNlDVjYxvPC-U0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllUVXlNelE0/TXpndE9HVmlNUzAw/WkRCa0xUa3dZV0V0/TkdJM05tUXhNRE5o/TWpRMUwybHRZV2Rs/TDJsdFlXZGxYa0V5/WGtGcWNHZGVRWFZ5/TmprNU1UYzRNREFA/LmpwZw",
        rating:6.6
    },
    {
        name:"Roberrt",
        poster:"https://imgs.search.brave.com/gez86h-3d-Wgnrfkdg7Fvgp31MvZ_NQnoy7eLEN3y3I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50MS5qZG1hZ2lj/Ym94LmNvbS9jb21w/L2pkX3NvY2lhbC9u/ZXdzLzIwMjBqdWwx/Mi9pbWFnZS04MzI0/NDctdnc3cjA0bzAw/cy5qcGc_Zml0PWFy/b3VuZHwyMTA6MzA4/JmNyb3A9MjEwOjMw/ODsqLCo",
        rating:5.9
    },
    {
        name:"Odeya",
        poster:"https://imgs.search.brave.com/__06d9ZPm1m-w3ySOEeQHgtv8sNyUqv1lOvycxAX9H0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50MS5qZG1hZ2lj/Ym94LmNvbS9tb3Zp/ZXMvY2VudHJhbGl6/ZWRfMTIzMDk3MDUy/MDE5XzEyXzA3XzA5/XzAxXzQ3XzIyMC5q/cGc_Zml0PWFyb3Vu/ZHwyMTA6MzA4JmNy/b3A9MjEwOjMwODsq/LCo",
        rating:3.9
    }
    


];



function searchMovie()
{
    let movieName = document.getElementById('search').value;
    
    if(movieName!=="")
    {

        let result =movies.filter(function(movie)
                    {
                        return movie.name.toUpperCase().includes(movieName.toUpperCase())
                    })

        if(result.length==0)
        {
            
        }


       displayMovies(result);


    }
    else 
    {
        displayMovies(movies);
    }
    


}


function displayMovies(data)
{
    
    document.getElementById("movies").innerHTML="";

    let htmlString = ``;


    for(let i=0;i<data.length;i++)
    {


        htmlString=htmlString+`
            <div class="movie">
                <div class="overlay">

                    <div class="video">

                    </div>

                    <div class="details">

                        <h1>${data[i].name}</h1>
                        <h2>IMDB : ${data[i].rating}</h2>
                        <p> Yen Ree Media</p>
                        <p> Yen Ree Media2</p>

                    </div>

                </div>
                <img class="poster" src="${data[i].poster}" alt="poster">
            </div>
        `
    }

    console.log(htmlString);

    document.getElementById("movies").innerHTML=htmlString;

}





function displayMovies1(data)
{
    
    document.getElementById("movies").innerHTML="";

    let htmlString = ``;


    for(let i=0;i<data.length;i++)
    {


        htmlString=htmlString+`
            <div class="movie">
                <div class="overlay">

                    <div class="video">

                    </div>

                    <div class="details">

                        <h1>${data[i].name}</h1>
                        <h2>IMDB : ${data[i].rating}</h2>
                        <p>Rami Malek</p>

                    </div>

                </div>
                <img class="poster" src="${data[i].poster}" alt="poster">
            </div>
        `
    }

    console.log(htmlString);

    document.getElementById("movies").innerHTML=htmlString;

}


displayMovies(movies);







// let movieDIV = document.createElement("div");
//   movieDIV.classList.add("movie");


//     let overlayDIV = document.createElement("div");  
//     overlayDIV.classList.add("overlay")

//     movieDIV.appendChild(overlayDIV);
    

    console.log(movieDIV);
