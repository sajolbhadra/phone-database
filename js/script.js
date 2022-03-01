const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    //-------------Clear Data ----------------
    searchField.value = '';
    if (searchText === '') {
        // console.log('no Phone found');
        // alert('Enter Any Text to Search');
        document.getElementById('data-found').innerText = `Enter Any Text to Search`;
    }
    else {
        //--------------load Data----------------
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}
    `;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data));
    }
}

const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');

    //Clean phones 
    searchResult.textContent = '';

    if (phones.length === 0) {
        //show error (if no result found)
        // alert('No Phone Found');
        document.getElementById('data-found').innerText = `No phones Found`;
    }
    else {
        //Show if phones Founded
        document.getElementById('data-found').innerText = `${phones.length} phones Found`;
        phones.forEach(phones => {
            console.log(phones);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div onclick="loadPhoneDetail(${phones.title})" class="card h-100">
             <img src="${phones.image}" class="card-img-top" height="450px" width="150px" alt="No image found for this Phone">
            <div class="card-body">
              <h5 class="card-title">Brand: ${phones.brand}</h5>
              <h6 class="card-text">Name: ${phones.phone_name}</h6>
            </div>
            <button onclick="detail()" class="btn btn-outline-secondary" type="button"
                    id="phone-details">Detail</button>
          </div>
        `;
            searchResult.appendChild(div);
            // console.log(phones.numFound[0]);
        });
    }
}