
const form = document.getElementById('contact-form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = `Please wait...`;
    if(result.innerHTML.trim()){
        result.style.display = "block";
    }else{
        result.style.display = "none";
    }

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = Swal.fire({
                    title: "Order Placed!!",
                    text: "We Will Reach You Soon..!!",
                    imageUrl: "./img/order.svg",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                });
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = `Something Went Wrong!`;
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 5000);
        });
});


// ==========================================================================

// Dev Tools Hidding

document.addEventListener('contextmenu',
function(event){
    event.preventDefault();
});