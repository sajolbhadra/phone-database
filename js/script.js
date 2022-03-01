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
            .then(data => console.log(data));
    }
}

