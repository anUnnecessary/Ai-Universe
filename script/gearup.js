//  Make a GET request to the API endpoint
const loadAi = async () => {
  const url = 'https://openapi.programming-hero.com/api/ai/tools'
  const res = await fetch(url);
  const data = await res.json();
  DisplayAi(data.data.tools)
}

const DisplayAi = AiUsers => {
  const aiContainer = document.getElementById('Ai-Container');
  AiUsers.forEach(aiUser => {
    const aiDiv = document.createElement('div');
    aiDiv.classList.add('cols');
    aiDiv.innerHTML = `
    <div class= "container mt-4 d-flex gap-4" >
 <div class="card container" style="width: 18rem;">
<img src=${aiUser.image} class="card-img-top mt-2" alt="...">
<div class="card-body">
<h5 class="card-title">${'Features'}</h5>
<ul>
<li>${aiUser.features[0]}</li>
<li>${aiUser.features[1]}</li>
<li>${aiUser.features[2]}</li>
</ul>
 <hr>
 <h5 class="card-title">${aiUser.name}</h5>
 <p>${aiUser.published_in})</p>
</div>


 <!-- Button trigger modal -->
<button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal")>Show Me Details</button>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
 <div class="modal-content">
   <div class="modal-header">
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div class="modal-body">
   <p>${aiUser.description}</p>
   <hr>
   <p>${aiUser.features[0]}</p>
   <p>${aiUser.features[1]}</p>
   <p>${aiUser.features[2]}</p>
   <p>${aiUser.links[0].name}</p>
   <p>${aiUser.links[0].url}</p>
   </div>
 </div>
</div>
</div>
`;

    aiContainer.appendChild(aiDiv);
  })

};



const fetchAi = (tools_name,) => {
  // console.log(category_id);
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      fetchData = data.data;
      showAllNews(data.data, tools_name)
    });
};
loadAi();