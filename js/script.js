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


const displaySearchResult = (phones) => {
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
        <div " class="card my-4 h-100">
             <img src="${phones.image}" class="card-img-top" height="450px" width="150px" alt="No image found for this Phone">
            <div class="card-body">
              <h5 class="card-title">Brand: ${phones.brand}</h5>
              <h6 class="card-text">Name: ${phones.phone_name}</h6>            </div>
            <button onclick="detail('${phones.slug}')" class="btn btn-outline-secondary" type="button">Detail</button>
          </div>
        `;
            searchResult.appendChild(div);
            // console.log(phones.numFound[0]);
        });
    }
}




const detail = (id) => {
    //--------------load Detail Data----------------
    const url = `https://openapi.programming-hero.com/api/phone/${id}
    `;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showDetail(data.data));
    // console.log(id)
}

const showDetail = (phone) => {

    if (phone.releaseDate == '') {
        document.getElementById('phone-details').innerHTML = `
    <div>
    <img src="${phone.image}" alt"">
    <h4>Version: ${phone.name}</h4>
    <h5>Release Date: No release date found</h5>
    <h5>storage : ${phone.mainFeatures.storage}</h5>
    <h5>display Size : ${phone.mainFeatures.displaySize}</h5>
    <h5>ChipSet : ${phone.mainFeatures.chipSet}</h5>
    <h5>memory : ${phone.mainFeatures.memory}</h5>
    <h5>Sensors : ${phone.mainFeatures.sensors}</h5>
    <h5>Other Features : </h5>
    <p>WLAN: ${phone.others.WLAN}</p>
    <p>Bluetooth: ${phone.others.Bluetooth} </p>
    <p>GPS: ${phone.others.GPS}</p>
    <p>NFS: ${phone.others.NFS}</p>
    <p>Radio: ${phone.others.Radio}</p>
    </div>




    
    `;
    }
    else {
        document.getElementById('phone-details').innerHTML = `
    <div>
    <img src="${phone.image}" alt"">
    <h4>Name: ${phone.name}</h4>
    <h5>Release Date: ${phone.releaseDate}</h5>
    <h5>Version : ${phone.slug}</h5>
    <h5>storage : ${phone.mainFeatures.storage}</h5>
    <h5>display Size : ${phone.mainFeatures.displaySize}</h5>
    <h5>ChipSet : ${phone.mainFeatures.chipSet}</h5>
    <h5>memory : ${phone.mainFeatures.memory}</h5>
    <h5>Sensors : ${phone.mainFeatures.sensors}</h5>
    <h5>Other Features : </h5>
    <p>WLAN: ${phone.others.WLAN}</p>
    <p>Bluetooth: ${phone.others.Bluetooth} </p>
    <p>GPS: ${phone.others.GPS}</p>
    <p>NFS: ${phone.others.NFS}</p>
    <p>Radio: ${phone.others.Radio}</p>

    </div>
    `;
    }
    // document.getElementById('phone-details') = element.classList('border');

    // // document.getElementById('data-found').innerText = `${phones.length} phones Found`;
    // phone.forEach(phone => {
    //     console.log(phone);
    //     const div = document.createElement('div');
    //     div.classList.add('col');
    //     div.innerHTML = `
    //     <div " class="card my-4 h-100">
    //          <img src="${phone.image}" class="card-img-top" height="450px" width="150px" alt="No image found for this Phone">

    //     `;
    // phoneDetails.appendChild(div);
    // console.log(phones.numFound[0]);
    // });
    console.log(phone)
}   