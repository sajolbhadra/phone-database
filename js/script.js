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
            // console.log(phones);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div " class="card my-4 h-100">
             <img src="${phones.image}" class="card-img-top"  alt="No image found for this Phone">
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
    <div class="container">
    <div class="row">
    <div class="col py-5">
    <table class="table table-striped">
    <tbody>
      <tr>
        <td>Version: ${phone.name}</td>
        </tr>
        <tr>
        <td>Release Date: No Release Date Found</td>
        </tr>
        <tr>
        <td>storage : ${phone.mainFeatures.storage}</td>
        </tr>
        <tr>
        <td>display Size : ${phone.mainFeatures.displaySize}</td>
        </tr>
        <tr>
        <td>ChipSet : ${phone.mainFeatures.chipSet}</td>
        </tr>
        <tr>
        <td>memory : ${phone.mainFeatures.memory}</td>
        </tr>
        <tr>
        </tbody>
        </table>

    </div>
    <div class="col">
    <h5 class="text-primary">Sensors</h5>
    <table class="table table-striped">
<tbody>
    <td>Sensors : ${phone.mainFeatures.sensors}</td>
  </tr>
  </tbody>
  </table>
    <h5 class="text-primary">Other Features : </h5>
    <table class="table table-striped">
  <tbody>
      <tr>
      <td>WLAN: ${phone.others.WLAN}</td>
    </tr>
      <tr>
      <td>Bluetooth: ${phone.others.Bluetooth}</td>
    </tr>
      <tr>
      <td>GPS: ${phone.others.GPS}</td>
    </tr>
      <tr>
      <td>NFS: ${phone.others.NFS}</td>
    </tr>
      <tr>
      <td>Radio: ${phone.others.Radio}</td>
    </tr>
  </tbody>
</table>
    </div>
</div>
    `;
    }
    else {
        document.getElementById('phone-details').innerHTML = `
    <div class="container">
    <img src="${phone.image}" alt"">
                <div class="row">
                    <div class="col">
                    <table class="table table-striped">
                    <tbody>
                      <tr>
                        <td>Version: ${phone.name}</td>
                        </tr>
                        <tr>
                        <td>Release Date: ${phone.releaseDate}</td>
                        </tr>
                        <tr>
                        <td>storage : ${phone.mainFeatures.storage}</td>
                        </tr>
                        <tr>
                        <td>display Size : ${phone.mainFeatures.displaySize}</td>
                        </tr>
                        <tr>
                        <td>ChipSet : ${phone.mainFeatures.chipSet}</td>
                        </tr>
                        <tr>
                        <td>memory : ${phone.mainFeatures.memory}</td>
                        </tr>
                        <tr>
                        </tbody>
                        </table>
                
                    </div>
                    <div class="col">
                    <h5 class="text-primary">Sensors</h5>
                    <table class="table table-striped">
                <tbody>
                    <td>Sensors : ${phone.mainFeatures.sensors}</td>
                  </tr>
                  </tbody>
                  </table>
                    <h5 class="text-primary">Other Features : </h5>
                    <table class="table table-striped">
                  <tbody>
                      <tr>
                      <td>WLAN: ${phone.others.WLAN}</td>
                    </tr>
                      <tr>
                      <td>Bluetooth: ${phone.others.Bluetooth}</td>
                    </tr>
                      <tr>
                      <td>GPS: ${phone.others.GPS}</td>
                    </tr>
                      <tr>
                      <td>NFS: ${phone.others.NFS}</td>
                    </tr>
                      <tr>
                      <td>Radio: ${phone.others.Radio}</td>
                    </tr>
                  </tbody>
                </table>
                    </div>
                </div>
    `;
        console.log(phone.others)
    }
}   